
import Navbar from "../components/Navbar";
import { Calendar } from "lucide-react";

const Dashboard = () => {
  const pastDeliveries = [
    {
      date: "March 2025",
      name: "Moonlit Jasmine",
      status: "Delivered",
    },
    {
      date: "February 2025",
      name: "Cedar & Sage",
      status: "Delivered",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Next Delivery */}
          <div className="md:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="font-playfair text-2xl mb-6">Your Next Delivery</h2>
              <div className="flex items-center gap-4 mb-6">
                <Calendar className="w-5 h-5 text-lavender-200" />
                <span>Arriving April 15, 2025</span>
              </div>
              <div className="aspect-video bg-lavender-50 rounded-xl mb-6" />
              <h3 className="font-playfair text-xl mb-2">Spring Blossom</h3>
              <p className="text-gray-600 mb-6">
                A fresh and uplifting blend of cherry blossom, green tea, and white musk.
              </p>
              <div className="space-x-4">
                <button className="bg-lavender-100 hover:bg-lavender-200 text-gray-800 font-medium px-6 py-2 rounded-lg transition-colors">
                  Skip This Month
                </button>
                <button className="text-gray-600 hover:text-gray-800 font-medium px-6 py-2 rounded-lg transition-colors">
                  Change Delivery Date
                </button>
              </div>
            </div>
          </div>

          {/* Subscription Management */}
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
              <h2 className="font-playfair text-2xl mb-6">Subscription</h2>
              <div className="space-y-4">
                <button className="w-full bg-lavender-100 hover:bg-lavender-200 text-gray-800 font-medium py-2 rounded-lg transition-colors">
                  Pause Subscription
                </button>
                <button className="w-full text-gray-600 hover:text-gray-800 font-medium py-2 rounded-lg transition-colors">
                  Cancel Subscription
                </button>
              </div>
            </div>

            {/* Past Deliveries */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="font-playfair text-2xl mb-6">Past Deliveries</h2>
              <div className="space-y-6">
                {pastDeliveries.map((delivery, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <div>
                      <div className="text-sm text-gray-600 mb-1">{delivery.date}</div>
                      <div className="font-medium">{delivery.name}</div>
                    </div>
                    <button className="text-lavender-200 hover:text-gray-800 transition-colors">
                      Leave Feedback
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
