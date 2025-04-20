import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { RoomsModal } from "./RoomsModal";
import { SetStateAction, useState } from "react";

const rooms = [
  {
    id: 1,
    name: "Single Room",
    description: "A cozy room perfect for solo travelers.",
    price: 350,
    category: "Standard",
    image: "https://www.plazatirana.com/wp-content/uploads/sites/378/2021/11/presidential-suite-Maritim-Hotel-Plaza-Tirana.jpg",
  },
  {
    id: 2,
    name: "Double Room",
    description: "Ideal for couples, featuring a comfortable double bed.",
    price: 500,
    category: "Deluxe",
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
  },
  {
    id: 3,
    name: "Family Suite",
    description: "Spacious suite designed for families with kids.",
    price: 800,
    category: "Suite",
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
  },
  {
    id: 4,
    name: "Economy Room",
    description: "Affordable option for budget-conscious travelers.",
    price: 250,
    category: "Budget",
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
  },
  {
    id: 5,
    name: "Luxury Suite",
    description: "Experience ultimate luxury with premium amenities.",
    price: 1200,
    category: "Luxury",
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
  },
  {
    id: 6,
    name: "Presidential Suite",
    description: "Top-tier suite offering unmatched comfort and elegance.",
    price: 2000,
    category: "Premium",
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
  },
];

export function RoomsCard() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<{
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
  } | null>(null);

  const handleOpenModal = (
    room: SetStateAction<{
      id: number;
      name: string;
      description: string;
      price: number;
      category: string;
      image: string;
    } | null>
  ) => {
    setSelectedRoom(room);
    setIsDetailsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedRoom(null);
    setIsDetailsOpen(false);
  };

  return (
    <section className="w-full py-20 bg-gray-100 flex justify-center items-center flex-col">
      <h2 className="text-4xl font-bold font-mono mb-8">Our Rooms</h2>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <Card
            key={room.id}
            className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleOpenModal(room)}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium text-gray-900">
                  {room.name}
                </h3>
                <Badge>{room.category}</Badge>
              </div>
              <p className="text-gray-700 text-sm">${room.price} / per night</p>
            </CardContent>
          </Card>
        ))}
        {selectedRoom && (
          <RoomsModal
            onClose={handleCloseModal}
            open={isDetailsOpen}
            room={selectedRoom}
          />
        )}
      </div>
    </section>
  );
}
