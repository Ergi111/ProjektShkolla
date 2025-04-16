import {
  Dumbbell,
  Coffee,
  Bed,
  Wifi,
  Tv,
  PawPrint,
  ShieldCheck,
  WavesLadder,
} from "lucide-react";

export const HotelsFeatures = () => {
  const facilities = [
    { name: "Gym", icon: <Dumbbell className="w-20 h-20 text-gray-700" /> },
    {
      name: "Swimming",
      icon: <WavesLadder className="w-20 h-20 text-blue-500" />,
    },
    {
      name: "Breakfast",
      icon: <Coffee className="w-20 h-20 text-yellow-600" />,
    },
    { name: "Comfort Bed", icon: <Bed className="w-20 h-20 text-gray-600" /> },
    { name: "Free WiFi", icon: <Wifi className="w-20 h-20 text-green-500" /> },
    { name: "TV", icon: <Tv className="w-20 h-20 text-purple-500" /> },
    {
      name: "Pet Friendly",
      icon: <PawPrint className="w-20 h-20 text-orange-400" />,
    },
    {
      name: "Secure",
      icon: <ShieldCheck className="w-20 h-20 text-teal-600" />,
    },
  ];
  return (
    <section className="w-full h-full py-24 flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold font-mono mb-8 underline underline-offset-8">
        Hotels Features
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-20 py-10">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-center space-y-2"
          >
            {facility.icon}
            <p className="text-sm font-medium text-gray-700">{facility.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
