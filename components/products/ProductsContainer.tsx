import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fetchAllProducts } from "@/utils/actions";
import Link from "next/link";

// The ProductsContainer component is an asynchronous function that fetches and displays products
// based on the provided layout and search parameters.
async function ProductsContainer({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) {
  // Fetch products based on the search term
  const products = await fetchAllProducts({ search });
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <>
      {/* HEADER */}
      <section>
        <div className="flex justify-between items-center">
          {/* Display the total number of products */}
          <h4 className="font-medium text-lg">
            {totalProducts} product{totalProducts > 1 && "s"}
          </h4>
          <div className="flex gap-x-4">
            {/* Button to switch to grid layout */}
            <Button
              variant={layout === "grid" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=grid${searchTerm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            {/* Button to switch to list layout */}
            <Button
              variant={layout === "list" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=list${searchTerm}`}>
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>

      {/* PRODUCTS */}
      <div>
        {/* Display a message if no products match the search */}
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          // Display products in a grid layout
          <ProductsGrid products={products} />
        ) : (
          // Display products in a list layout
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
}

export default ProductsContainer;
