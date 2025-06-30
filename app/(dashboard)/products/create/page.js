import { IconCurrencyDollar } from "@tabler/icons-react";

const createProduct = () => {
  return (
    <>
      <h1 className=" text-2xl mb-2 mt-10 font-medium">Add Products</h1>
      <form className=" [&_input]:mb-8 shadow shadow-neutral-300 w-340 p-8 bg-white">
        <div className="flex flex-col ">
          <span className="mb-4 ">Product Name:</span>
          <input
            type="text"
            placeholder="Product"
            className="w-320 h-10 shadow shadow-slate-300 border border-slate-200 p-4"
          ></input>
          <span className="mb-4 ">Quantity:</span>
          <input
            type="number"
            placeholder="Quantity"
            className="w-320 h-10 shadow shadow-slate-300 border border-slate-200 p-4"
          ></input>
          <span className="mb-4 ">Price:</span>
          <input
            type="number"
            placeholder="$ Price"
            className="w-320 h-10 shadow shadow-slate-300 border border-slate-200 p-4"
          ></input>
          <span className="mb-4 ">Image:</span>
          <input
            type="file"
            className="shadow shadow-slate-300 border border-slate-200 p-2 w-320 cursor-pointer "
          ></input>
        </div>

        <button className="bg-blue-600 text-white py-2 px-4 rounded-[4px]">
          Create
        </button>
      </form>
    </>
  );
};

export default createProduct;
