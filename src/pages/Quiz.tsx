
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const questions = [
    {
      question: "What type of scents do you prefer?",
      options: ["Floral", "Woody", "Citrus", "Oriental"],
    },
    {
      question: "When do you wear fragrance most?",
      options: ["Daily", "Special Occasions", "Evening", "Seasonal"],
    },
    {
      question: "How strong do you like your scent?",
      options: ["Light", "Medium", "Strong", "Very Strong"],
    },
  ];

  const navigate = useNavigate();

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      navigate("/recommendation");
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-20">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-12">
          <div className="h-2 bg-gray-100 rounded-full">
            <div
              className="h-2 bg-lavender-200 rounded-full transition-all duration-500"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Step {step} of {totalSteps}
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="font-playfair text-2xl mb-8">
            {questions[step - 1].question}
          </h2>

          <div className="space-y-4">
            {questions[step - 1].options.map((option) => (
              <button
                key={option}
                className="w-full p-4 text-left border border-gray-200 rounded-lg hover:border-lavender-100 hover:bg-lavender-50 transition-all"
                onClick={handleNext}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
