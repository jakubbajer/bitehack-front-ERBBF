import { useNavigate } from "react-router"
import { Button } from "../Button";

export const SupportSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray py-10">
        <div className="container mx-auto my-20">
            <div className="grid grid-cols-2">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-bold text-4xl mb-4">Pomagając <span className="text-primary">innym</span> pomagasz <span className="text-primary">sobie</span></h2>
                    <p className="text-l mb-5">Zakładając konto i motywując innych użytkowników sam zaczniesz otrzymywać słowa wsparcia.</p>
                    <p className="text-l mb-5">
                        Bezpieczną przestrzeń zapewnia nasz system filtrowania wiadomości, nie otrzymasz    nigdy żadnej złej wiadomości, jesteś w pełni anonimowy i bezpieczny.
                    </p>
                    <div className="w-full">
                        <Button kind="primary" children="Dołącz do nas" handleClick={() => navigate('/dashboard')}></Button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src="/support.png" />
                </div>
            </div>
        </div>
    </div>
  )
}