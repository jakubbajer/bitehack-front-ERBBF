import { DailyUpdate } from "./../components/DailyUpdate";
import { Habits } from "./../components/Habits";
import { CheerUp } from "./../components/CheerUp";


function DashboardPage() {

  return (
    <div className="container mx-auto">
      <DailyUpdate/>
      <CheerUp/>
      <Habits/>
    </div>
  );
}

export default DashboardPage;
