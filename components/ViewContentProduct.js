"use client";
import toast, { Toaster } from "react-hot-toast";
import React, { useState } from "react";
import Link from "next/link";
import { IconEdit } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconEye } from "@tabler/icons-react";
import { deleteItem } from "@/app/backend/actions/productCreate";
import Modal from "react-modal";
import { redirect } from "next/navigation";

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

function ViewContentProduct(props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleDelete = async () => {
    await deleteItem(props.id);
    await toast.success("Item Deleted");
    redirect("/products");
  };

  console.log(props.previewData);

  return (
    <>
      <Toaster />
      <table className="[&_tr]:border [&_tr]:border-slate-200 bg-white [&_td]:p-4 shadow shadow-slate-300 rounded-[10px] w-320 text-left border-collapse ">
        <tbody>
          {Object.entries(props.previewData).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
          <tr className="text-1xl font-medium">
            <td>Actions:</td>

            <td className="flex flex-row text-indigo-500 gap-16">
              {" "}
              <button className="flex hover:cursor-pointer">
                <IconEye stroke={2} />
                <Link href={"products/view/" + props.id}> Preview</Link>
              </button>
              <button href="/edit" className="flex hover:cursor-pointer">
                <IconEdit stroke={2} />
                Edit
              </button>
              <button onClick={openModal} className="flex hover:cursor-pointer">
                <IconTrash stroke={2} />
                Delete
              </button>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
              >
                <p className="text-3xl pt-10 mb-6 text-center">Are you sure?</p>
                <p className=" mb-8 w-[400px] text-center text-slate-500">
                  Do you really want to delete these records? This process can't
                  be undone!
                </p>
                <div className="text-center">
                  <button
                    onClick={async () => {
                      await handleDelete();
                      await closeModal();
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
        </tbody>
      </table>
    </>
  );
}

export default ViewContentProduct;
