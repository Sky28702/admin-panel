const Login = () => {
  return (
    <section>
      <form className="pl-76">
        <div className="flex flex-col items-center border border-none rounded-[4px] shadow shadow-slate-400 mt-76 text-center max-w-100 py-6">
          <h1 className=" mb-10 font-bold text-[36px] text-blue-700 ">
            <u>Login</u>
          </h1>
          <input
            type="text"
            name="userName"
            placeholder="Username"
            className="pl-2 border border-slate-300 rounded-[4px] h-10 w-70 mb-8"
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="pl-2 border border-slate-300 rounded-[4px] h-10 w-70 mb-8"
          ></input>
          <button className="bg-blue-700 text-white text-xl px-6 py-2 rounded-[4px] cursor-pointer hover:bg-blue-600">
            Log In
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
