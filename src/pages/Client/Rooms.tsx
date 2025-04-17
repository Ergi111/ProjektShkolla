import { RoomsCard } from "@/components/Rooms/RoomCard";

export const Rooms = () => {
  return (
    <main>
      <section>
        <div
          className="w-full h-screen bg-center flex flex-col items-center justify-center text-white"
          style={{
            backgroundImage:
              "url('https://wallpapers.com/images/hd/hotel-room-1920-x-1080-picture-dyxueresgj1e4s3n.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <p className="text-xl font-semibold mb-4">LUXURIOUS ROOMS</p>
          <h1 className="text-6xl font-bold font-mono text-center">
            Hotel Rooms
          </h1>
        </div>
      </section>
      <section>
        <RoomsCard />
      </section>
    </main>
  );
};
