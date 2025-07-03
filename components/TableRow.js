"use server";
import Link from "next/link";
import { IconEdit } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconEye } from "@tabler/icons-react";
import { deleteItem } from "@/app/backend/actions/productCreate";

async function TableRow(props) {
  // async function handleDelete() {await deleteItem(id);}`
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
          <button href="/edit" className="flex hover:cursor-pointer">
            <IconEdit stroke={2} />
            Edit
          </button>
          <button className="flex hover:cursor-pointer">
            <IconTrash stroke={2} />
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default TableRow;
