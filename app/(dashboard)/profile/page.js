import Link from "next/link";
import { previewUser } from "@/app/backend/actions/signup";
import ProfileContent from "@/components/Profile";

async function ViewUser() {
  const userData = await previewUser("686d39940b668811e03fb704");
  const previewUserData = JSON.parse(JSON.stringify(userData));

  return (
    <div className="bg-slate-50">
      <p className="mb-4">
        <span className="font-medium text-3xl">Profile</span>
      </p>

      <ProfileContent previewUserData={previewUserData} />
    </div>
  );
}

export default ViewUser;
