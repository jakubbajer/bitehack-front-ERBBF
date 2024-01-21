import { EnsureLoggedIn } from "../components/EnsureLoggedIn";
import { DailyUpdate } from "./../components/DailyUpdate";
import { Habits } from "./../components/Habits";
import { CheerUp } from "./../components/CheerUp";
import { useEffect, useState } from "react";
import { getUserStreak } from "./../api/user";
import { useUserContext } from "./../hooks/useUserContext";

interface UserStreak {
  userStreak: boolean
  data: number
}

function DashboardPage() {
  const { data: { userId, user } } = useUserContext();
  const [streak, setStreak] = useState<UserStreak>();
  const [cheered, setCheered] = useState<boolean>(false);

  useEffect(() => {
    const getStreak = async () => {
      try {
        const response = await getUserStreak(userId);
        setStreak(response);
      } catch (error) {
        console.error(error)
      }

    }

    getStreak();
  }, [cheered])

  return (
    <EnsureLoggedIn>
      <div className="h-[200px] flex justify-center items-center bg-primary p-4 mb-10">
        <div className="container mx-auto flex flex-col justify-center">
          <h2 className="text-3xl text-white">Witaj <span className="font-bold">{user}</span>, to twój profil.</h2>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="shadow rounded w-full p-5 bg-gray">
          {streak ? <p className="font-bold">🔥 Twój streak wynosi: {streak.data}</p> : null}
          <p>Integruj się ze społecznością aby utrzymać streak.</p>
        </div>
      </div>
      <div className="container mx-auto">
        <DailyUpdate />
        <CheerUp setCheered={setCheered} />
        <Habits />
      </div>
    </EnsureLoggedIn>
  );
}

export default DashboardPage;
