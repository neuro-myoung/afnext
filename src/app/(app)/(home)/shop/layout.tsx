import configPromise from "@payload-config";
import { getPayload, withNullableJSONSchemaType } from "payload";
import { Category } from '@/payload-types'

import { SearchFilters } from "./seach-filters";

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    depth: 1,
    pagination: false,
    where: {
      parent: {
        exists: false,
      },
    },
  });

  const formattedData = data.docs.map((doc) => ({
    ...doc,
    // Because of depth: 1 we can be confident doc will always be a Category
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({...(doc as Category), 
      sucategories:undefined,
    }))
  }))

  return (
    <div>
      <SearchFilters data={formattedData} />
      {children}
    </div>
  );
};

export default Layout;
