import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaArrowRight } from "react-icons/fa";



export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="hero-section h-[550px] w-full bg-stone-100 flex justify-between sm:px-2 md:px-2 lg:px-5 xl:px-5">
        <div className="text-container w-full lg:w-2/4 xl:w-2/4 block my-24 lg:my-auto xl:my-auto ml-10 text-left">
          <span className="text-red-500 font-bold font-serif text-sm lg:mb-10">SUMMER COLLECTION</span>
          <h2 className="text-2xl md:text-3xl lg:text-5xl xl:text-5xl sm:font-bold text-gray-950 mb-3 mt-8">Fall - Winter</h2>
          <h2 className="text-2xl md:text-3xl lg:text-5xl xl:text-5xl sm:font-bold text-gray-950 mb-8">Collaction 2030</h2>
          <p className="text-gray-500 text-sm md:text-lg lg:text-lg xl:text-lg">Lorem ipsum dolor sit amet consectetbr, adipisicing elit. Maiores, ratione!</p>
          <p className="text-gray-500 text-sm md:text-lg lg:text-lg xl:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <button className="bg-gray-950 text-white px-6 py-3 my-10 font-sans flex items-center justify-center space-x-4">
            <span className="flex gap-3 mx-auto">SHOP NOW < FaArrowRight className="block my-auto text-xl" /> </span>
          </button>
        </div>
        <div className="image-container w-2/4 ">
          <Image 
            src="/img-2.png"
            alt="Hero Picture"
            width={400}
            height={500}
            className="min-h-80 p-0 -mt-16 hidden lg:flex"
          />
        </div>
      </div>

      <div className="clothing-section h-[500px] w-full block md:block lg:flex lg:justify-end xl:felx xl:justify-end  lg:pr-44 xl:pr-44 my-10 md:my-10 lg:my-28 xl:my-28 px-5 md:mx-5 lg:mx-0 xl:mx-0">
        <div className="image-box w-full md:w-full lg:w-fit xl:w-fit bg-stone-200 border-b-4 border-gray-900">
          <Image 
            src="/img-3.png"
            alt="Clothe Collactions"
            width={400}
            height={500}
            className="mt-5 md:mt-5 lg:-mt-24 xl:-mt-24"
          />
        </div>

        <div className="text-box w-full md:w-full lg:w-[250px] xl:w-[250px] text-start md:text-start lg:text-start xl:text-start block my-auto border-b-2 border-gray-900 px-2 md:px-2 lg:px-0 xl:px-0">
          <h2 className="text-2xl md:text-xl lg:text-3xl xl:text-4xl lg:mr-10 xl:mr-10 mt-2 md:mt-2 lg:mt-5 xl:mt-5 mb-2 font-semibold md:font-semibold lg:font-bold xl:font-bold">Clothing</h2>
          <h2 className="text-2xl md:text-xl lg:text-3xl xl:text-4xl lg:mr-10 xl:mr-10 mt-2 md:mt-2 lg:mt-5 xl:mt-5 mb-2 font-semibold md:font-semibold lg:font-bold xl:font-bold">Collactions 2030</h2>
          <button className="bg-transparent text-sm ml-12 md:ml-12 lg:ml-0 xl:ml-0 lg:mr-28 xl:mr-28 mb-5 border-b-2 border-b-gray-900 hover:border-b-red-600">SHOP NOW</button>
        </div>
        
      </div>

      <div className="clothing-section h-[500px] w-full block md:block lg:flex lg:justify-end xl:felx xl:justify-end  lg:pr-44 xl:pr-44 my-10 md:my-10 lg:my-28 xl:my-28 px-5 md:mx-5 lg:mx-0 xl:mx-0">

        <div className="image-box w-full md:w-full lg:w-fit xl:w-fit bg-stone-200 border-b-4 border-gray-900">
          <Image 
            src="/img-5.png"
            alt="Clothe Collactions"
            width={400}
            height={500}
            className="mt-5 md:mt-5 lg:mt-24 xl:mt-24"
          />
        </div>

        <div className="text-box w-full md:w-full lg:w-[250px] xl:w-[250px] text-start md:text-start lg:text-start xl:text-start block my-auto border-b-2 border-gray-900 px-2 md:px-2 lg:px-0 xl:px-0">
          <h2 className="text-2xl md:text-xl lg:text-3xl xl:text-4xl lg:mr-10 xl:mr-10 mt-2 md:mt-2 lg:mt-5 xl:mt-5 mb-2 font-semibold md:font-semibold lg:font-bold xl:font-bold">Clothing</h2>
          <h2 className=" text-2xl md:text-xl lg:text-3xl xl:text-4xl lg:mr-10 xl:mr-10 mt-2 md:mt-2 lg:mt-5 xl:mt-5 mb-2 font-semibold md:font-semibold lg:font-bold xl:font-bold">Collactions 2030</h2>
          <button className="bg-transparent text-sm ml-12 md:ml-12 lg:ml-0 xl:ml-0 lg:mr-28 xl:mr-28 mb-5 border-b-2 border-b-gray-900 hover:border-b-red-600">SHOP NOW</button>
        </div>
        
      </div>

      <div className="clothing-section h-[500px] w-full block md:block lg:flex lg:justify-end xl:felx xl:justify-end  lg:pr-44 xl:pr-44 my-10 md:my-10 lg:my-28 xl:my-28 px-5 md:mx-5 lg:mx-0 xl:mx-0">

        <div className="image-box w-full md:w-full lg:w-fit xl:w-fit bg-stone-200 border-b-4 border-gray-900">
          <Image 
            src="/img-5.png"
            alt="Clothe Collactions"
            width={400}
            height={500}
            className="mt-5 md:mt-5 lg:mt-24 xl:mt-24"
          />
        </div>

        <div className="text-box w-full md:w-full lg:w-[250px] xl:w-[250px] text-start md:text-start lg:text-start xl:text-start block my-auto border-b-2 border-gray-900 px-2 md:px-2 lg:px-0 xl:px-0">
          <h2 className="text-2xl md:text-xl lg:text-3xl xl:text-4xl lg:mr-10 xl:mr-10 mt-2 md:mt-2 lg:mt-5 xl:mt-5 mb-2 font-semibold md:font-semibold lg:font-bold xl:font-bold">Clothing</h2>
          <h2 className=" text-2xl md:text-xl lg:text-3xl xl:text-4xl lg:mr-10 xl:mr-10 mt-2 md:mt-2 lg:mt-5 xl:mt-5 mb-2 font-semibold md:font-semibold lg:font-bold xl:font-bold">Collactions 2030</h2>
          <button className="bg-transparent text-sm ml-12 md:ml-12 lg:ml-0 xl:ml-0 lg:mr-28 xl:mr-28 mb-5 border-b-2 border-b-gray-900 hover:border-b-red-600">SHOP NOW</button>
        </div>
        
      </div>

      <div className="heading-container gap-3 md:gap-2 lg:gap-20 xl:gap-20 items-center h-32 w-full flex justify-center text-[16px] md:text-lg lg:text-2xl font-bold mt-10">
        <h2 className="text-gray-900 cursor-pointer">Best Sellers</h2>
        <h2 className="text-gray-600 cursor-pointer">New Arrivals</h2>
        <h2 className="text-gray-600 cursor-pointer">Hot sales</h2>
      </div>

      <div className="products-section block md:block lg:flex flex-row justify-between xl:flex px-5 md:px-5 lg:px-20 xl:px-20 h-[430px] w-full my-5">
        <div className="product-box mx-5  w-[250px] h-[450] mb-8">
          <div className="product-img bg-stone-200 w-[250px] h-[300px]">
            <Image  src="/img-5.png" alt="Prodct Image" width={300} height={500} className="h-[300px] hover:border-2 hover:border-gray-400" />
          </div>
          <div className="product-text">
            <h3 className=" text-gray-950 mt-4 mb-2">Nicky Shoes</h3>
            <h3 className="cursor-pointer text-gray-950 mt-2 mb-2 hover:font-semibold">+ Add To Cart</h3>
            <h3 className="text-xl font-semibold text-gray-950 mt-2 mb-2">$54</h3>
          </div>
        </div>

        <div className="product-box mx-5  w-[250px] h-[450] mb-8">
          <div className="product-img bg-stone-200 w-[250px] h-[300px]">
            <Image  src="/img-5.png" alt="Prodct Image" width={300} height={500} className="h-[300px] hover:border-2 hover:border-gray-400" />
          </div>
          <div className="product-text">
            <h3 className=" text-gray-950 mt-4 mb-2">Nicky Shoes</h3>
            <h3 className="cursor-pointer text-gray-950 mt-2 mb-2 hover:font-semibold">+ Add To Cart</h3>
            <h3 className="text-xl font-semibold text-gray-950 mt-2 mb-2">$54</h3>
          </div>
        </div>

        <div className="product-box mx-5  w-[250px] h-[450] mb-8">
          <div className="product-img bg-stone-200 w-[250px] h-[300px]">
            <Image  src="/img-5.png" alt="Prodct Image" width={300} height={500} className="h-[300px] hover:border-2 hover:border-gray-400" />
          </div>
          <div className="product-text">
            <h3 className=" text-gray-950 mt-4 mb-2">Nicky Shoes</h3>
            <h3 className="cursor-pointer text-gray-950 mt-2 mb-2 hover:font-semibold">+ Add To Cart</h3>
            <h3 className="text-xl font-semibold text-gray-950 mt-2 mb-2">$54</h3>
          </div>
        </div>

        <div className="product-box mx-5  w-[250px] h-[450] mb-8">
          <div className="product-img bg-stone-200 w-[250px] h-[300px]">
            <Image  src="/img-5.png" alt="Prodct Image" width={300} height={500} className="h-[300px] hover:border-2 hover:border-gray-400" />
          </div>
          <div className="product-text">
            <h3 className=" text-gray-950 mt-4 mb-2">Nicky Shoes</h3>
            <h3 className="cursor-pointer text-gray-950 mt-2 mb-2 hover:font-semibold">+ Add To Cart</h3>
            <h3 className="text-xl font-semibold text-gray-950 mt-2 mb-2">$54</h3>
          </div>
        </div>
      </div>

      <div className="products-section mt-[1350px] md:mt-[500px] lg:mt-0 xl:mt-0 block md:block lg:flex flex-row justify-between xl:flex px-5 md:px-5 lg:px-20 xl:px-20 h-[430px] w-full my-5">
        <div className="product-box mx-5  w-[250px] h-[450] mb-8">
          <div className="product-img bg-stone-200 w-[250px] h-[300px]">
            <Image  src="/img-5.png" alt="Prodct Image" width={300} height={500} className="h-[300px] hover:border-2 hover:border-gray-400" />
          </div>
          <div className="product-text">
            <h3 className=" text-gray-950 mt-4 mb-2">Nicky Shoes</h3>
            <h3 className="cursor-pointer text-gray-950 mt-2 mb-2 hover:font-semibold">+ Add To Cart</h3>
            <h3 className="text-xl font-semibold text-gray-950 mt-2 mb-2">$54</h3>
          </div>
        </div>

        <div className="product-box mx-5  w-[250px] h-[450] mb-8">
          <div className="product-img bg-stone-200 w-[250px] h-[300px]">
            <Image  src="/img-5.png" alt="Prodct Image" width={300} height={500} className="h-[300px] hover:border-2 hover:border-gray-400" />
          </div>
          <div className="product-text">
            <h3 className=" text-gray-950 mt-4 mb-2">Nicky Shoes</h3>
            <h3 className="cursor-pointer text-gray-950 mt-2 mb-2 hover:font-semibold">+ Add To Cart</h3>
            <h3 className="text-xl font-semibold text-gray-950 mt-2 mb-2">$54</h3>
          </div>
        </div>

        <div className="product-box mx-5  w-[250px] h-[450] mb-8">
          <div className="product-img bg-stone-200 w-[250px] h-[300px]">
            <Image  src="/img-5.png" alt="Prodct Image" width={300} height={500} className="h-[300px] hover:border-2 hover:border-gray-400" />
          </div>
          <div className="product-text">
            <h3 className=" text-gray-950 mt-4 mb-2">Nicky Shoes</h3>
            <h3 className="cursor-pointer text-gray-950 mt-2 mb-2 hover:font-semibold">+ Add To Cart</h3>
            <h3 className="text-xl font-semibold text-gray-950 mt-2 mb-2">$54</h3>
          </div>
        </div>

        <div className="product-box mx-5  w-[250px] h-[450] mb-8">
          <div className="product-img bg-stone-200 w-[250px] h-[300px]">
            <Image  src="/img-5.png" alt="Prodct Image" width={300} height={500} className="h-[300px] hover:border-2 hover:border-gray-400" />
          </div>
          <div className="product-text">
            <h3 className=" text-gray-950 mt-4 mb-2">Nicky Shoes</h3>
            <h3 className="cursor-pointer text-gray-950 mt-2 mb-2 hover:font-semibold">+ Add To Cart</h3>
            <h3 className="text-xl font-semibold text-gray-950 mt-2 mb-2">$54</h3>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
