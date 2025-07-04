"use client";
import Link from "next/link";
import { preViewProducts } from "@/app/backend/actions/productCreate";

async function viewProducts({ params }) {
  const preViewData = await preViewProducts(params.id);
  console.log(preViewData);
  return (
    <>
      <div className="bg-slate-50">
        <p className="mb-4">
          <span className="font-medium text-3xl "> Products</span>{" "}
          <Link href="/products" className="text-indigo-700">
            {" "}
            &nbsp;&#171; Back
          </Link>
        </p>

        <table className="[&_tr]:border [&_tr]:border-slate-200 bg-white [&_td]:p-4 shadow shadow-slate-300 rounded-[10px] w-320 text-left border-collapse ">
          <tbody>
            <tr>
              <td className="text-1xl font-medium ">Title: </td>
              <td className="">{preViewData.productName}</td>
            </tr>
            <tr>
              <td className="text-1xl font-medium align-top">Quantity:</td>

              <td className="pl-10">{preViewData.quantity}</td>
            </tr>
            <tr>
              <td className="text-1xl font-medium ">Price:</td>
              <td className="pl-10">{preViewData.price} </td>
            </tr>
            <tr>
              <td className="text-1xl font-medium ">Cretaed:</td>
              <td className="pl-10">{preViewData.createdAt.toString()}</td>
            </tr>
            <tr>
              <td className="text-1xl font-medium ">Update:</td>
              <td className="pl-10">{preViewData.updatedAt.toString()} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default viewProducts;
