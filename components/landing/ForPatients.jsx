import Image from "next/image";

export default function ForPatients() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h2 className="text-3xl font-bold mb-4">For Patients</h2>
          <p className="text-gray-600 mb-6">Easy and quick appointments</p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Search Nearby Doctors</li>
            <li>✔ Book Instantly Online</li>
            <li>✔ Receive Specialist Referrals</li>
          </ul>
        </div>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/patient.png"
            alt="Patient consulting doctor"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}