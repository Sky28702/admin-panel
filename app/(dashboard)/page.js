import Cards from "@/components/DashboardCards";
import { countProducts } from "../backend/actions/productCreate";
import { countUsers } from "../backend/actions/signup";

const Dashboard = async () => {
  const totalProducts = await countProducts();
  const totalUsers = await countUsers();
  return (
    <section className="mb-[80px] ">
      <h2 className="font-medium text-3xl mb-[20px]">Dashboard</h2>
      <div className="md:flex md:flex-row flex-col justify-around mr-40  ">
        <Cards
          title="Total Users"
          paragraph="Total Users by now"
          number={totalUsers}
        />
        <Cards
          title="Total Products"
          paragraph="Total products available"
          number={totalProducts}
        />
        <Cards
          title="Average Sales"
          paragraph="Average sales per month"
          number="8.9"
        />
      </div>
    </section>
  );
};

export default Dashboard;
