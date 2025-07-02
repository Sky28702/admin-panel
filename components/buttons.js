"use client";

import { IconEdit } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconEye } from "@tabler/icons-react";
import { deleteItem } from "@/app/backend/actions/productCreate";

function Buttons({ id }) {
  async function handleDelete() {
    await deleteItem(id);
  }
  return (
    <>
      <button href="/preview" className="flex hover:cursor-pointer">
        <IconEye stroke={2} />
        Preview
      </button>

      <button href="/edit" className="flex hover:cursor-pointer">
        <IconEdit stroke={2} />
        Edit
      </button>

      <button onClick={handleDelete} className="flex hover:cursor-pointer">
        <IconTrash stroke={2} />
        Delete
      </button>
    </>
  );
}

export default Buttons;
