export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Find Your Doctor", desc: "Search specialists near you" },
            { step: "2", title: "Book Appointment", desc: "Schedule visits with ease" },
            { step: "3", title: "Get Referred & Treated", desc: "Get referrals when needed" },
          ].map((item) => (
            <div key={item.step} className="bg-white p-8 rounded-xl shadow">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                {item.step}
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
