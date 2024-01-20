import { EnsureLoggedIn } from "../components/EnsureLoggedIn";
import { DailyUpdate } from "./../components/DailyUpdate";
import { Habits } from "./../components/Habits";
import { CheerUp } from "./../components/CheerUp";

function DashboardPage() {
  return (
    <EnsureLoggedIn>
      <div className="h-[200px] flex justify-center items-center bg-primary p-4 mb-10">
        <div className="container mx-auto flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-white">Twój dashboard</h2>
        </div>
      </div>
      <div className="container mx-auto">
        <DailyUpdate />
        <CheerUp />
        <Habits />
      </div>
    </EnsureLoggedIn>
  );
}

export default DashboardPage;
