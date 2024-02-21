import Image from "next/image";
import hero from "../assessts/hero.png";
import product1 from '../assessts/product1.jpg';
import product2 from '../assessts/product2.jpg';
import product3 from '../assessts/product3.jpg';
import product4 from '../assessts/product4.jpg';


export default function Home() {
  return (
    <>
      <div className="container bg-purple-300 mx-16 flex items-center justify-between">
        <div>
          <h1 className="text-8xl font-semibold text-amber-950">Slick. Modern.</h1>
          <h1 className="text-8xl font-semibold text-amber-950">Awesome</h1>
          <button className="mt-4 bg-amber-950 p-5 rounded-md text-white hover:bg-pink-600">
            Shop Collection
          </button>
        </div>
        <div>
          <Image src={hero} alt="Hero Image"
            width={500}
            height={500} />
        </div>
        <div>

        </div>
        <div>
        </div>
      </div>
      <div className="container">
        <div className="mt-10 text-center">
          <p className="font-light text-xs">SUMMER COLLECTION</p>
          <h1 className="font-bold text-4xl">Popular T-Shirts</h1>
        </div>
        <div className="flex gap-7 ml-24 mt-6">
          <div>
            <Image src={product1} alt="Product 1" height={300} width={300} />
            <span className="font-light text-xs">MEN</span>
            <p className="font-bold ml-2">T-Shirt Name 1</p>
            <p className="font-bold ml-2">$33.00 </p>
          </div>
          <div>
            <Image src={product2} alt="Product 2" height={300} width={300} />
            <span className="font-light text-xs">WOMEN</span>
            <p className="font-bold ml-2">T-Shirt Name 2</p>
            <p className="font-bold ml-2">$23.00  </p>
          </div>
          <div>
            <Image src={product3} alt="Product 3" height={300} width={300} />
            <span className="font-light text-xs">MEN</span>
            <p className="font-bold ml-2">T-Shirt Name 3</p>
            <p className="font-bold ml-2">$21.00 </p>
          </div>
          <div>
            <Image src={product4} alt="Product 4" height={300} width={300} />
            <span className="font-light text-xs">WOMEN</span>
            <p className="font-bold ml-2">T-Shirt Name 4</p>
            <p className="font-bold ml-2">$36.00 </p>
          </div>
        </div>
      </div>
    </>
  );
}
