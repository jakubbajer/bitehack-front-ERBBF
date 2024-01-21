import { useNavigate } from "react-router"
import { Button } from "../Button";

export const StatsSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray py-10">
        <div className="container mx-auto my-20">
            <div className="grid grid-cols-2">
                <div className="flex flex-col items-center justify-center">
                    <img src="/stats.png" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-bold text-4xl mb-4 text-right">Monitoruj swój <span className="text-primary">postęp</span> licz zaoszczędzone <span className="text-primary">pieniądze</span></h2>
                    <p className="text-l mb-5 text-right">W naszym panelu możesz śledzić swoje postępy, oszczędności czasu oraz pieniędzy.</p>
                    <p className="text-l mb-5 text-right">Monitoruj swoje samopoczucie, uzyskuj motywujące wiadomości od innych użytkowników.</p>
                    <div className="w-full flex justify-end">
                        <Button kind="primary" children="Dołącz do nas" handleClick={() => navigate('/dashboard')}></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}