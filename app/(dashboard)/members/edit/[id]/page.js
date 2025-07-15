"use client";
import EditMember from "@/components/EditMember";
import axios from "axios";
import { useEffect, useState } from "react";

function UpdateMember({ params }) {
  const [allMembers, setAllMembers] = useState([]);

  useEffect(() => {
    async function memberView() {
      try {
        const res = await axios.get(
          `http://localhost:8000/members/view/${params.id}`
        );
        console.log(res);

        setAllMembers(res.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    memberView();
  }, []);

  // const MemberData = allMembers(params.id);
  const previewData = JSON.parse(JSON.stringify(allMembers));

  // const productData = await preViewProducts(params.id);
  // const previewData = JSON.parse(JSON.stringify(productData));

  return <EditMember previewData={previewData} id={params.id} />;
}
// previewData={previewData}
export default UpdateMember;
