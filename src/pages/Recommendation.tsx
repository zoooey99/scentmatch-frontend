
import { useNavigate } from "react-router-dom";

const Recommendation = () => {
  const navigate = useNavigate();
  
  const handleAccept = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-playfair text-4xl text-center mb-12">Your Perfect Match</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="aspect-square bg-lavender-50 rounded-xl mb-6" />
            <h2 className="font-playfair text-2xl mb-2">Moonlit Jasmine</h2>
            <p className="text-gray-600 mb-4">
              A delicate blend of night-blooming jasmine, vanilla orchid, and warm amber.
            </p>
            <div className="mb-6">
              <h3 className="font-medium mb-2">Notes:</h3>
              <div className="flex flex-wrap gap-2">
                {["Jasmine", "Vanilla", "Amber", "White Musk"].map((note) => (
                  <span
                    key={note}
                    className="px-3 py-1 bg-lavender-50 rounded-full text-sm"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-x-4">
              <button
                onClick={handleAccept}
                className="bg-lavender-100 hover:bg-lavender-200 text-gray-800 font-medium px-6 py-2 rounded-lg transition-colors"
              >
                Add to My Box
              </button>
              <button className="text-gray-600 hover:text-gray-800 font-medium px-6 py-2 rounded-lg transition-colors">
                Skip
              </button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="aspect-square bg-peach-100 rounded-xl mb-6" />
            <h2 className="font-playfair text-2xl mb-2">Mediterranean Breeze</h2>
            <p className="text-gray-600 mb-4">
              Fresh citrus notes mixed with sea salt and sun-warmed woods.
            </p>
            <div className="mb-6">
              <h3 className="font-medium mb-2">Notes:</h3>
              <div className="flex flex-wrap gap-2">
                {["Bergamot", "Sea Salt", "Cedar", "Moss"].map((note) => (
                  <span
                    key={note}
                    className="px-3 py-1 bg-lavender-50 rounded-full text-sm"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-x-4">
              <button
                onClick={handleAccept}
                className="bg-lavender-100 hover:bg-lavender-200 text-gray-800 font-medium px-6 py-2 rounded-lg transition-colors"
              >
                Add to My Box
              </button>
              <button className="text-gray-600 hover:text-gray-800 font-medium px-6 py-2 rounded-lg transition-colors">
                Skip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
