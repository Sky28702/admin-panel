"use client";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

function ViewMembers(params) {
  const [allMembers, setAllMembers] = useState();

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

  return (
    <div className="bg-slate-50">
      <p className="mb-4">
        <span className="font-medium text-3xl">Members</span>
        <Link href="/members" className="text-indigo-700">
          &nbsp;&#171; Back
        </Link>
      </p>

      {/* <Toaster /> */}
      <table className="[&_tr]:border [&_tr]:border-slate-200 bg-white [&_td]:p-4 shadow shadow-slate-300 rounded-[10px] w-320 text-left border-collapse ">
        <tbody>
          {Object.entries(allMembers).map(([key, value]) => (
            <tr key={key}>
              <td className="text-1xl font-medium">{key}:</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewMembers;
