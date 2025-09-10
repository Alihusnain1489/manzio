
const page = () => {
  return (
     <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/Hero.jpg')" }} // use a different hero image
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Learn more about our journey, our values, and the people behind{" "}
            <span className="text-teal-400 font-semibold">Manzio</span>.
          </p>
        </div>

        {/* Decorative Shape */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-white clip-path-wave"></div>
      </section>

      {/* About Content */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-6">Who We Are</h2>
        <p className="text-gray-600 mb-12">
          At Manzio, we specialize in building modern web experiences with
          simplicity and impact. Our mission is to help businesses connect with
          people through design and technology.
        </p>

        {/* Team Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Ali Khan", role: "CEO & Founder", img: "/team1.jpg" },
            { name: "Sara Ahmed", role: "Lead Developer", img: "/team2.jpg" },
            { name: "John Doe", role: "Designer", img: "/team3.jpg" },
          ].map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {person.name}
              </h3>
              <p className="text-teal-600">{person.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default page