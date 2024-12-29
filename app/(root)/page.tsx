
import { getLatestProducts } from "@/lib/actions/product.actions";
import ProductList from "@/components/shared/product/product-list";

const Home = async () => {
  const latestProducts = await getLatestProducts();

  return ( 
    <>
      <ProductList data={latestProducts} title="Newest Arrivals">

      </ProductList>
    </>
   );
}
 
export default Home;