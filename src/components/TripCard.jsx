const TripCard = ({ title, price, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
      <img src={image} className="h-52 w-full object-cover" />

      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-primary font-semibold mt-2">₹{price}</p>

        <button className="mt-3 bg-primary text-red-800 px-4 py-2 rounded-lg">
          View Details
        </button>
      </div>
    </div>
  );
};

export default TripCard;