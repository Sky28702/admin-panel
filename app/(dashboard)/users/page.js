import { IconEye } from "@tabler/icons-react";
import { allUsers } from "@/app/backend/actions/signup";

async function Users() {
  const allDataUsers = await allUsers();
  return (
    <div>
      <table className=" bg-white border border-white  [&_th]:px-8 [&_th]:py-2 [&_td]:p-6 [&_td]:pr-30 [&_th]:text-slate-400  [&_td]:text-center  shadow shadow-slate-300 rounded-[4px] ml-66">
        <thead>
          <tr className="text-left">
            <th>UserName</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className="[&_tr]:hover:bg-blue-100 [&_tr]:odd:bg-slate-100">
          {allDataUsers.map((u) => (
            <tr key={u.id}>
              <td>{u.userName}</td>
              <td>{u.email}</td>

              <td className="flex flex-row text-indigo-500 gap-16">
                {" "}
                <button href="/preview" className="flex hover:cursor-pointer">
                  <IconEye stroke={2} />
                  Preview
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
