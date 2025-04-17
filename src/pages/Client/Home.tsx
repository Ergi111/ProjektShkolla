import { AboutUs } from "@/components/AboutUs";
import { HotelsFeatures } from "@/components/HotelsFeatures";
import { RoomsCard } from "@/components/Rooms/RoomCard";

export const Home = () => {
  return (
    <main>
      <section>
        <div
          className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
          style={{
            backgroundImage:
              "url('https://momblogsociety.com/wp-content/uploads/2019/03/hotels.jpg')",
          }}
        >
          <h1 className="text-6xl font-bold font-mono text-center">
            Welcome to the Hotel
          </h1>
          <p className="text-xl font-semibold mt-4">Enjoy with us</p>
        </div>
      </section>
      <section>
        <RoomsCard />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <HotelsFeatures />
      </section>
    </main>
  );
};
