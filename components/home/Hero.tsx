import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          Changing the way people shop
        </h1>
        <p className="max-w-xl mt-8 text-lg leading-8 text-muted-foreground">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, sint
          doloremque cum quas numquam et perspiciatis voluptas asperiores
          assumenda voluptate harum saepe distinctio quia quam nemo amet,
          quibusdam cumque ut!
        </p>
        <Button asChild size={"lg"} className="mt-10">
          <Link href={"/products"}>Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;
