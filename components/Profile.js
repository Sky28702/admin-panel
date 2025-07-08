"use client";

function ProfileContent(props) {
  const filteredEntries = Object.entries(props.previewUserData).filter(
    ([key]) => key.toLowerCase() !== "password"
  );

  return (
    <>
      <table className="[&_tr]:border [&_tr]:border-slate-200 bg-white [&_td]:p-4 shadow shadow-slate-300 rounded-[10px] w-320 text-left border-collapse ">
        <tbody>
          {filteredEntries.map(([key, value]) => (
            <tr key={key}>
              <td className="text-1xl font-medium">{key}:</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProfileContent;
