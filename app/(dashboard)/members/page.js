"use client";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

function MembersTable() {
  const [allMembers, setAllMembers] = useState([]);

  useEffect(() => {
    async function getMember() {
      try {
        const res = await axios.get(
          "https://dull-wasps-appear.loca.lt/members/all"
        );
        console.log(axios.get("https://dull-wasps-appear.loca.lt/members/all"));

        setAllMembers(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    getMember();
  }, []);

  return (
    <>
      <section>
        <h1 className="text-3xl mb-2 font-medium">Members</h1>
        <button className="mb-8 bg-blue-600 text-white px-4 py-2 rounded-[4px]">
          <Link href="/members/create">+ Add Members</Link>
        </button>
        <table>
          <thead>
            <tr>
              <th>Member Name</th>

              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {allMembers.map((props) => (
              <tr key={props._id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{props.memberName}</td>
                <td className="border px-4 py-2">{props.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* yet to do wait  */}
      </section>
    </>
  );
}
export default MembersTable;

{
  /* <td className="border px-4 py-2">
            {new Date(props.createdAt).toLocaleString()}
          </td> */
}
