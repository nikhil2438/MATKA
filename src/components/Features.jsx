const Features = () => {
  const features = [
    "Community Travel",
    "In-house Execution",
    "Safety First",
    "Seamless Experience",
  ];

  return (
    <div className="px-8 py-12 bg-secondary">
      <h1 className="text-3xl font-bold text-center mb-10">
        Why Choose Us
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="p-6 bg-red-600 rounded-xl shadow">
            {f}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;