import { useEffect, useState } from "react";
import axios from "axios";
import { BookingList } from "./components/BookingList";
import { EditBookingModal } from "./components/BookingEditModal";
import { BookingType } from "./types/BookingTypes";

export const Booking = () => {
  const [bookings, setBookings] = useState<BookingType[]>([]);
  const [editingBooking, setEditingBooking] = useState<BookingType | null>(
    null
  );
  const [modalOpen, setModalOpen] = useState(false);

  const fetchBookings = async () => {
    const res = await axios.get("http://localhost:3001/bookings");
    setBookings(res.data);
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:3001/bookings/${id}`);
    fetchBookings();
  };

  const handleEdit = (booking: BookingType) => {
    setEditingBooking(booking);
    setModalOpen(true);
  };

  const handleSubmit = async (updatedBooking: BookingType) => {
    await axios.put(
      `http://localhost:3001/bookings/${updatedBooking.id}`,
      updatedBooking
    );
    setModalOpen(false);
    setEditingBooking(null);
    fetchBookings();
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Booking</h1>
      <BookingList
        bookings={bookings}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <EditBookingModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        booking={editingBooking}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
