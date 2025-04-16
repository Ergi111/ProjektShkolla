import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "lucide-react";

const ourStaff = [
  {
    id: 1,
    name: "Arben Dema",
    role: "Hotel Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Experienced manager with over 10 years in the hospitality industry.",
  },
  {
    id: 2,
    name: "Elda Hoxha",
    role: "Receptionist",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Always ready to welcome guests with a smile and assist with their needs.",
  },
  {
    id: 3,
    name: "Gentian Leka",
    role: "Chef",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    bio: "Passionate about Albanian cuisine and modern culinary techniques.",
  },
  {
    id: 4,
    name: "Blerta Shehu",
    role: "Housekeeping",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
    bio: "Ensures every room is clean and comfortable for our guests.",
  },
  {
    id: 5,
    name: "Erion Meta",
    role: "Concierge",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Ready to help with bookings, recommendations and local info.",
  },
  {
    id: 6,
    name: "Anisa Kola",
    role: "Event Coordinator",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    bio: "Organizes unforgettable events and ensures every detail is perfect.",
  },
];

export const OurStaf = () => {
  return (
    <section className="w-full py-20 bg-gray-100 flex justify-center items-center flex-col">
      <h2 className="text-4xl font-bold font-mono mb-8">Our Staff</h2>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ourStaff.map((items) => (
          <Card
            key={items.id}
            className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={items.image}
                alt={items.name}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium text-gray-900">
                  {items.name}
                </h3>
                <Badge>{items.role}</Badge>
              </div>
              <p className="text-gray-700 text-sm">{items.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
