// import filename from "@/components/filename";

const Home = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      <section>
        <div className=" flex flex-col [&>p]:hover:cursor-pointer [&>p]:hover:bg-blue-200 [&>p]:items-center [&>p]:w-50 border boder-none border-white h-full w-50 shadow shadow-slate-500">
          <h1 className="text-blue-600 font-bold text-3xl pl-4">Title</h1>
          <p className="pl-4 pt-2 font-normal text-xl mt-6">
            <i className="fa-solid fa-gauge"></i> &nbsp; Dashboard
          </p>

          <p className="pl-4 pt-2 font-normal text-xl mt-6">
            <i class="fa-solid fa-server"></i> &nbsp; Data
          </p>

          <p className="pl-4 pt-2 font-normal text-xl mt-6">
            <i class="fa-solid fa-message"></i> &nbsp; Message
          </p>

          <p className="pl-4 pt-2 font-normal text-xl mt-6">
            <i class="fa-solid fa-bell"></i> &nbsp; Notification
          </p>

          <p className="pl-4 pt-2 font-normal text-xl mt-6">
            <i class="fa-solid fa-gear"></i> &nbsp; Setting
          </p>

          <p className="relative bottom-0 mt-140  p-4">
            <i class="fa-solid fa-user"></i> &nbsp; Profile
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
