import Link from "next/link";
import ViewContentUser from "@/components/ViewContentUser";
import { previewUser } from "@/app/backend/actions/signup";

async function ViewUser({ params }) {
  const userData = await previewUser(params.id);
  const previewUserData = JSON.parse(JSON.stringify(userData));

  return (
    <div className="bg-slate-50">
      <p className="mb-4">
        <span className="font-medium text-3xl">User</span>
        <Link href="/users" className="text-indigo-700">
          &nbsp;&#171; Back
        </Link>
      </p>

      <ViewContentUser previewUserData={previewUserData} />
    </div>
  );
}

export default ViewUser;
