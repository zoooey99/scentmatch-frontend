
import { useNavigate } from "react-router-dom";

const Recommendation = () => {
  const navigate = useNavigate();
  
  const handleAccept = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50 to-white px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-playfair text-4xl text-center mb-12 text-gradient">Your Perfect Match</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-tr from-lavender-50 to-white p-8 rounded-2xl shadow-lg border border-lavender-100 hover:scale-105 transition-transform">
            <div className="aspect-square bg-gradient-to-br from-[#ffc3a0] to-[#ffafbd] rounded-xl mb-6" />
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
                    className="px-3 py-1 bg-lavender-100 text-lavender-200 rounded-full text-sm"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-x-4">
              <button
                onClick={handleAccept}
                className="bg-gradient-to-r from-lavender-100 to-lavender-200 text-gray-800 font-medium px-6 py-2 rounded-lg transition-colors hover:opacity-90"
              >
                Add to My Box
              </button>
              <button className="text-gray-600 hover:text-gray-800 font-medium px-6 py-2 rounded-lg transition-colors">
                Skip
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-tr from-peach-100 to-white p-8 rounded-2xl shadow-lg border border-peach-100 hover:scale-105 transition-transform">
            <div className="aspect-square bg-gradient-to-br from-[#accbee] to-[#e7f0fd] rounded-xl mb-6" />
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
                className="bg-gradient-to-r from-peach-100 to-lavender-100 text-gray-800 font-medium px-6 py-2 rounded-lg transition-colors hover:opacity-90"
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
