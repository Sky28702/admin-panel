import Link from "next/link";
import ViewContentProduct from "@/components/ViewContentProduct";
import { preViewProducts } from "@/app/backend/actions/productCreate";

async function ViewProducts({ params }) {
  const previewData = await preViewProducts(params.id);

  return (
    <div className="bg-slate-50">
      <p className="mb-4">
        <span className="font-medium text-3xl">Products</span>
        <Link href="/products" className="text-indigo-700">
          &nbsp;&#171; Back
        </Link>
      </p>

      <ViewContentProduct previewData={previewData} />
    </div>
  );
}

export default ViewProducts;
