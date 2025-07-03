"use server";
import Link from "next/link";
import { allProducts } from "@/app/backend/actions/productCreate";

import TableRow from "@/components/TableRow";
async function Products() {
  const allDataProduct = await allProducts();
  return (
    <section className="">
      <div className="[&_td]:text-left text-left">
        <h1 className="text-3xl mb-2 font-medium">Products</h1>
        <button className="mb-8 bg-blue-600 text-white px-4 py-2 rounded-[4px]">
          <Link href="/products/create">+ Add Article</Link>
        </button>
        <table className=" bg-white border border-white  [&_th]:px-8 [&_th]:py-2 [&_td]:p-6 [&_td]:pr-30 [&_th]:text-slate-400  [&_td]:text-center  shadow shadow-slate-300 rounded-[4px]">
          <thead>
            <tr>
              <th>Title</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody className="[&_tr]:hover:bg-blue-100 [&_tr]:odd:bg-slate-100">
            {allDataProduct.map((p) => (
              <TableRow
                key={p.id}
                id={p.id}
                productName={p.productName}
                quantity={p.quantity}
                price={p.price}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Products;
