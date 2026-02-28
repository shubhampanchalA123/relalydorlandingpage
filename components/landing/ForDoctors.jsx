import Image from "next/image";

export default function ForDoctors() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/doctor.png"
            alt="Doctor"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">For Doctors</h2>
          <p className="text-gray-600 mb-6">Refer & grow your practice</p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Refer Patients Effortlessly</li>
            <li>✔ Track Your Referrals</li>
            <li>✔ Build Your Network</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
