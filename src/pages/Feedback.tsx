
import { useState } from "react";
import { Star } from "lucide-react";
import Navbar from "../components/Navbar";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-playfair text-4xl mb-8 text-center">How was your scent?</h1>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="aspect-video bg-lavender-50 rounded-xl mb-6" />
            <h2 className="font-playfair text-2xl mb-6">Moonlit Jasmine</h2>
            
            {/* Star Rating */}
            <div className="flex justify-center mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className="p-1"
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => setRating(star)}
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= (hover || rating)
                        ? "fill-lavender-200 text-lavender-200"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Comments */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">
                Share your thoughts (optional)
              </label>
              <textarea
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-100 min-h-[120px]"
                placeholder="What did you like or dislike about this scent?"
              />
            </div>

            <button className="w-full bg-lavender-100 hover:bg-lavender-200 text-gray-800 font-medium py-3 rounded-lg transition-colors">
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
