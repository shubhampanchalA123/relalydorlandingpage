import { ShieldCheck, CalendarCheck, Lock, GitBranch } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Verified Doctors",
      desc: "All doctors are verified and trusted professionals.",
      icon: <ShieldCheck size={36} />,
    },
    {
      title: "Easy Scheduling",
      desc: "Book appointments in just a few simple clicks.",
      icon: <CalendarCheck size={36} />,
    },
    {
      title: "Secure & Private",
      desc: "Your health data is encrypted and fully protected.",
      icon: <Lock size={36} />,
    },
    {
      title: "Referral Tracking",
      desc: "Track patient referrals and build your network.",
      icon: <GitBranch size={36} />,
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Key Features
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          Everything you need to connect with doctors and manage healthcare seamlessly.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-3"
            >
              <div className="flex justify-center mb-6 text-blue-600 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}