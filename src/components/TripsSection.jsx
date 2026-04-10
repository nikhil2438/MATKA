import TripCard from "./TripCard";
import bali from "../assets/bali.jpg"; 
import bali2 from "../assets/bali2.jpg";
import bali3 from "../assets/bali3.jpg";

const TripsSection = ({ title }) => {
  const trips = [
    { title: "Bali", price: "24999", image: bali },
    { title: "Burj", price: "30999", image: bali2 },
    { title: "Bali Adventure", price: "19999", image: bali3 },
    
  ];

  return (
    <div className="px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>

      <div className="grid md:grid-cols-3 gap-6  max-full">
        {trips.map((trip, i) => (
          <TripCard key={i} {...trip} />
        ))}
      </div>
    </div>
  );
};

export default TripsSection;