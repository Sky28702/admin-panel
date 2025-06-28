import Link from "next/link";
import { IconDashboard } from "@tabler/icons-react";
import { IconEdit } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconEye } from "@tabler/icons-react";

const Products = () => {
  return (
    <section className="">
      <div className="[&_td]:text-left text-left">
        <h1 className="text-3xl mb-2 font-medium">Products</h1>
        <button
          href="/create"
          className="mb-8 bg-blue-600 text-white px-4 py-2 rounded-[4px]"
        >
          + Add Article
        </button>
        <table className=" bg-white border border-white  [&_th]:px-8 [&_th]:py-2 [&_td]:p-6 [&_td]:pr-30 [&_th]:text-slate-400  [&_td]:text-center  shadow shadow-slate-300 rounded-[4px]">
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>

          <tbody className="[&_tr]:hover:bg-blue-100">
            <tr className="bg-slate-100">
              <td>Graphics Card</td>
              <td>2</td>
              <td>Rs 24,999</td>
              <td className="flex flex-row text-indigo-500 gap-16">
                <Link href="/preview" className="flex ">
                  <IconEye stroke={2} />
                  Preview
                </Link>

                <Link href="/edit" className="flex">
                  <IconEdit stroke={2} />
                  Edit
                </Link>

                <Link href="/delete" className="flex">
                  <IconTrash stroke={2} />
                  Delete
                </Link>
              </td>
            </tr>
            <tr>
              <td>SSD 1TB</td>
              <td>3</td>
              <td>Rs 6,999</td>
              <td className="flex flex-row text-indigo-500 gap-16">
                <Link href="/preview" className="flex">
                  <IconEye stroke={2} />
                  Preview
                </Link>

                <Link href="/edit" className="flex">
                  <IconEdit stroke={2} />
                  Edit
                </Link>

                <Link href="/delete" className="flex">
                  <IconTrash stroke={2} />
                  Delete
                </Link>
              </td>
            </tr>
            <tr className="bg-slate-100">
              <td>RAM 16GB DDR4</td>
              <td>4</td>
              <td>Rs 3,499</td>
              <td className="flex flex-row text-indigo-500 gap-16">
                <Link href="/preview" className="flex">
                  <IconEye stroke={2} />
                  Preview
                </Link>

                <Link href="/edit" className="flex">
                  <IconEdit stroke={2} />
                  Edit
                </Link>

                <Link href="/delete" className="flex">
                  <IconTrash stroke={2} />
                  Delete
                </Link>
              </td>
            </tr>
            <tr>
              <td>Processor Ryzen 5</td>
              <td>1</td>
              <td>Rs 18,750</td>
              <td className="flex flex-row text-indigo-500 gap-16">
                <Link href="/preview" className="flex">
                  <IconEye stroke={2} />
                  Preview
                </Link>

                <Link href="/edit" className="flex">
                  <IconEdit stroke={2} />
                  Edit
                </Link>

                <Link href="/delete" className="flex">
                  <IconTrash stroke={2} />
                  Delete
                </Link>
              </td>
            </tr>
            <tr className="bg-slate-100">
              <td>Motherboard B550</td>
              <td>2</td>
              <td>Rs 12,500</td>
              <td className="flex flex-row text-indigo-500 gap-16">
                <Link href="/preview" className="flex">
                  <IconEye stroke={2} />
                  Preview
                </Link>

                <Link href="/edit" className="flex">
                  <IconEdit stroke={2} />
                  Edit
                </Link>

                <Link href="/delete" className="flex">
                  <IconTrash stroke={2} />
                  Delete
                </Link>
              </td>
            </tr>
            <tr>
              <td>Power Supply 650W</td>
              <td>3</td>
              <td>Rs 4,299</td>
              <td className="flex flex-row text-indigo-500 gap-16">
                <Link href="/preview" className="flex">
                  <IconEye stroke={2} />
                  Preview
                </Link>

                <Link href="/edit" className="flex">
                  <IconEdit stroke={2} />
                  Edit
                </Link>

                <Link href="/delete" className="flex">
                  <IconTrash stroke={2} />
                  Delete
                </Link>
              </td>
            </tr>
            <tr className="bg-slate-100">
              <td>CPU Cooler</td>
              <td>2</td>
              <td>Rs 2,499</td>
              <td className="flex flex-row text-indigo-500 gap-16">
                <Link href="/preview" className="flex">
                  <IconEye stroke={2} />
                  Preview
                </Link>

                <Link href="/edit" className="flex">
                  <IconEdit stroke={2} />
                  Edit
                </Link>

                <Link href="/delete" className="flex">
                  <IconTrash stroke={2} />
                  Delete
                </Link>
              </td>
            </tr>
            <tr>
              <td>PC Cabinet</td>
              <td>1</td>
              <td>Rs 5,999</td>
              <td className="flex flex-row text-indigo-500 gap-16">
                <Link href="/preview" className="flex">
                  <IconEye stroke={2} />
                  Preview
                </Link>

                <Link href="/edit" className="flex">
                  <IconEdit stroke={2} />
                  Edit
                </Link>

                <Link href="/delete" className="flex">
                  <IconTrash stroke={2} />
                  Delete
                </Link>
              </td>
            </tr>
            <tr className="bg-slate-100">
              <td>Wi-Fi Card</td>
              <td>1</td>
              <td>Rs 1,299</td>
              <td className="flex flex-row text-indigo-500 gap-16">
                <Link href="/preview" className="flex">
                  <IconEye stroke={2} />
                  Preview
                </Link>

                <Link href="/edit" className="flex">
                  <IconEdit stroke={2} />
                  Edit
                </Link>

                <Link href="/delete" className="flex">
                  <IconTrash stroke={2} />
                  Delete
                </Link>
              </td>
            </tr>
            <tr>
              <td>Monitor 24"</td>
              <td>2</td>
              <td>Rs 10,999</td>
              <td className="flex flex-row text-indigo-500 gap-16">
                <Link href="/preview" className="flex">
                  <IconEye stroke={2} />
                  Preview
                </Link>

                <Link href="/edit" className="flex">
                  <IconEdit stroke={2} />
                  Edit
                </Link>

                <Link href="/delete" className="flex">
                  <IconTrash stroke={2} />
                  Delete
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Products;
