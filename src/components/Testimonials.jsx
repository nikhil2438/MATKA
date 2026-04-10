const Testimonials = () => {
  return (
    <div className="px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        What Travellers Say
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((t) => (
          <div key={t} className="p-6 shadow rounded-xl">
            <p>
              Amazing experience, well organized and fun trip!
            </p>
            <h3 className="mt-4 font-bold">User {t}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;