"use client";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { IconEdit } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconEye } from "@tabler/icons-react";
import { deleteMember } from "@/app/backend/actions/member";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-20%",
    transform: "translate(-50%, -50%)",
    radius: "8px",
    shadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
};

function MembersTable() {
  const [allMembers, setAllMembers] = useState([]);

  useEffect(() => {
    async function getMember() {
      try {
        const res = await axios.get("http://localhost:8000/members/all");
        console.log(res.data.data);

        setAllMembers(res.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    getMember();
  }, []);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function handleDelete(id) {
    await deleteMember(id);
  }

  return (
    <>
      <section>
        <h1 className="text-3xl mb-2 font-medium">Members</h1>
        <button className="mb-8 bg-blue-600 text-white px-4 py-2 rounded-[4px]">
          <Link href="/members/create">+ Add Members</Link>
        </button>
        <table className=" ml-50 bg-white border border-white  [&_th]:px-8 [&_th]:py-2 [&_td]:p-6 [&_td]:pr-30 [&_th]:text-slate-400  [&_td]:text-center  shadow shadow-slate-300 rounded-[4px]">
          <thead>
            <tr>
              <th>Member Name</th>

              <th>Gender</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="[&_tr]:hover:bg-blue-100 [&_tr]:odd:bg-slate-100">
            {allMembers.map((props) => (
              <tr key={props._id} className="hover:bg-gray-50">
                <td className="">{props.memberName}</td>
                <td className="">{props.gender}</td>
                <td className="flex flex-row text-indigo-500 gap-16">
                  <button className="flex hover:cursor-pointer">
                    <IconEye stroke={2} />
                    <Link href={"members/view/" + props._id}> Preview</Link>
                  </button>
                  <button className="flex flex-row hover:cursor-pointer">
                    <Link href={"members/edit/" + props._id} className="flex">
                      <IconEdit stroke={2} />
                      Edit
                    </Link>
                  </button>
                  <button
                    onClick={openModal}
                    className="flex hover:cursor-pointer"
                  >
                    <IconTrash stroke={2} />
                    Delete
                  </button>

                  <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                  >
                    <p className="text-3xl pt-10 mb-6 text-center">
                      Are you sure?
                    </p>
                    <p className=" mb-8 w-[400px] text-center text-slate-500">
                      Do you really want to delete these records? This process
                      can't be undone!
                    </p>
                    <div className="text-center">
                      {" "}
                      <button
                        onClick={() => {
                          handleDelete(props._id);
                          closeModal();
                        }}
                        className="bg-red-400 rounded-[4px] px-8 py-2 text-white hover:cursor-pointer  mr-[20px]"
                      >
                        Delete
                      </button>
                      <button
                        onClick={closeModal}
                        className="bg-slate-300 rounded-[4px] px-8 py-2 text-white hover:cursor-pointer mb-10 "
                      >
                        Cancle
                      </button>
                    </div>
                  </Modal>
                </td>
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
