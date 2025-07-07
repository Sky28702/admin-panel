import { preViewProducts } from "@/app/backend/actions/productCreate";
import EditForm from "@/components/EditForm";

async function Edit({ params }) {
  const productData = await preViewProducts(params.id);
  const previewData = JSON.parse(JSON.stringify(productData));

  return <EditForm previewData={previewData} id={params.id} />;
}

export default Edit;
