import { DailyUpdate } from "./../components/DailyUpdate";
import { Habits } from "./../components/Habits";


function DashboardPage() {

  return (
    <div className="container mx-auto">
      <DailyUpdate/>
      <Habits/>
    </div>
  );
}

export default DashboardPage;
