"use client";
import toast, { Toaster } from "react-hot-toast";
import React, { useState } from "react";
import Link from "next/link";
import { IconEdit } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconEye } from "@tabler/icons-react";
import { deleteItem } from "@/app/backend/actions/productCreate";
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

function TableRow(props) {
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
  };

  return (
    <>
      <tr>
        <td>{props.productName}</td>
        <td>{props.quantity}</td>
        <td>{"Rs " + props.price}</td>

        <td className="flex flex-row text-indigo-500 gap-16">
          {" "}
          <button className="flex hover:cursor-pointer">
            <IconEye stroke={2} />
            <Link href={"products/view/" + props.id}> Preview</Link>
          </button>
          <button className="flex flex-row hover:cursor-pointer">
            <Link href={"products/edit/" + props.id} className="flex">
              <IconEdit stroke={2} />
              Edit
            </Link>
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
              Do you really want to delete these records? This process can't be
              undone!
            </p>
            <div className="text-center">
              {" "}
              <button
                onClick={() => {
                  handleDelete();
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
    </>
  );
}

export default TableRow;
