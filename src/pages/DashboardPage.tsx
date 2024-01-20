import { EnsureLoggedIn } from "../components/EnsureLoggedIn";
import { DailyUpdate } from "./../components/DailyUpdate";
import { Habits } from "./../components/Habits";
import { CheerUp } from "./../components/CheerUp";

function DashboardPage() {
  return (
    // <EnsureLoggedIn>
    <div className="container mx-auto">
      <DailyUpdate />
      <CheerUp />
      <Habits />
    </div>
    // </EnsureLoggedIn>
  );
}

export default DashboardPage;
