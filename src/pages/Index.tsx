
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Index = () => {
  const steps = [
    {
      title: "Tell us your preferences",
      description: "Take our quick quiz to help us understand your taste"
    },
    {
      title: "Get a match",
      description: "Receive personalized fragrance recommendations"
    },
    {
      title: "Enjoy your scent",
      description: "Experience a new signature scent each month"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl mb-6 animate-fade-in">
            Find your perfect scent—
            <br />
            <span className="text-lavender-200">every month.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up">
            Discover fragrances tailored to your unique preferences through our personalized subscription service.
          </p>
          <Link
            to="/quiz"
            className="inline-block bg-lavender-100 hover:bg-lavender-200 text-gray-800 font-medium px-8 py-3 rounded-full transition-all transform hover:scale-105 animate-slide-up shadow-md hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>

        {/* How it Works */}
        <div className="container mx-auto mt-32">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-16">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-lavender-100 transition-all"
              >
                <div className="font-playfair text-2xl mb-4">{step.title}</div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
