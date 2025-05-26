import configPromise from '@payload-config'
import { getPayload, withNullableJSONSchemaType } from 'payload'

export default async function Shop() {
    const payload = await getPayload({
        config: configPromise,
    })

    const data = await payload.find({
        collection: "categories",
        depth: 1,
        where: {
            parent: {
                exists: false,
            }
        }
    })

    console.log(data)
  return(
    <div className="min-h-[50vh]">
      {JSON.stringify(data, null, 2)}
    </div>
  )
}
