import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">

      {/* 🔵 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2F80ED] via-[#3A8DFF] to-[#56CCF2]" />

      {/* 🌊 Bottom Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          d="M0,120L80,130C160,140,320,160,480,150C640,140,800,100,960,90C1120,80,1280,100,1360,110L1440,120V200H0Z"
        />
      </svg>

      {/* 🧱 Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-32 grid lg:grid-cols-2 items-center gap-12 text-white">

        {/* LEFT TEXT */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Connect with Doctors,
            <br className="hidden sm:block" />
            Book Appointments Easily
          </h1>

          <p className="mt-6 text-base sm:text-lg text-blue-100 max-w-xl mx-auto lg:mx-0">
            Your healthcare, simplified. Find the right doctor or
            get referred to specialists in minutes.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition">
              Book Appointment
            </button>

            <button className="bg-blue-700 bg-opacity-80 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-opacity-100 transition">
              Join as Doctor
            </button>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center items-end mt-10 lg:mt-0">

          {/* Doctor Image */}
          <div className="relative z-20">
            <Image
              src="/images/doctor.png"
              alt="Doctor"
              width={280}
              height={420}
              className="w-[200px] sm:w-[250px] lg:w-[300px] drop-shadow-2xl"
              priority
            />
          </div>

<Image
  src="/images/doctormobilepng.png"
  alt="App Mobile"
  width={260}
  height={500}
  className="w-[180px] sm:w-[220px] lg:w-[260px] drop-shadow-xl animate-float"
  priority
/>

        </div>
      </div>
    </section>
  );
}