import { Habits } from "./../components/Habits";

function DashboardPage() {
  return (
    <div className="p-5 rounded fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <Habits/>
    </div>
  );
}

export default DashboardPage;
