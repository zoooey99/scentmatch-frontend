
import Navbar from "../components/Navbar";

const Scents = () => {
  const scents = [
    {
      name: "Moonlit Jasmine",
      description: "Night-blooming jasmine with warm amber undertones",
      gradient: "from-[#d299c2] to-[#fef9d7]",
      notes: ["Jasmine", "Vanilla", "Amber"]
    },
    {
      name: "Mediterranean Breeze",
      description: "Fresh citrus with sea salt and cedar",
      gradient: "from-[#accbee] to-[#e7f0fd]",
      notes: ["Bergamot", "Sea Salt", "Cedar"]
    },
    {
      name: "Forest Whisper",
      description: "Earthy moss and pine with hints of lavender",
      gradient: "from-[#e6b980] to-[#eacda3]",
      notes: ["Pine", "Moss", "Lavender"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50 to-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="font-playfair text-4xl mb-12 text-center text-gradient">My Scent Collection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scents.map((scent, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-tr ${scent.gradient} p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform`}
            >
              <div className="aspect-square bg-white/20 rounded-xl mb-6" />
              <h2 className="font-playfair text-2xl mb-2">{scent.name}</h2>
              <p className="text-gray-700 mb-4">{scent.description}</p>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Notes:</h3>
                <div className="flex flex-wrap gap-2">
                  {scent.notes.map((note) => (
                    <span
                      key={note}
                      className="px-3 py-1 bg-white/30 text-gray-800 rounded-full text-sm"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-x-4">
                <button className="bg-white/30 backdrop-blur-sm text-gray-800 font-medium px-6 py-2 rounded-lg hover:bg-white/50 transition-colors">
                  Reorder
                </button>
                <button className="text-gray-600 hover:text-gray-800 font-medium px-6 py-2 rounded-lg transition-colors">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scents;
