import { Button } from "@/components/ui/button";
import { BookingType } from "../types/BookingTypes";

interface Props {
  bookings: BookingType[];
  onDelete: (id: number) => void;
  onEdit: (booking: BookingType) => void;
}

export const BookingList = ({ bookings, onDelete, onEdit }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {bookings.map((booking) => (
        <div
          key={booking.id}
          className="bg-white rounded-xl p-5 shadow-md border border-gray-200"
        >
          <h2 className="text-xl font-semibold mb-1">{booking.fullName}</h2>
          <p className="text-sm text-gray-600 mb-1">
            {booking.email} | {booking.phoneNumber}
          </p>
          <p className="text-sm mb-1">🛏️ {booking.roomType}</p>
          <p className="text-sm mb-1">
            📅 {booking.checkIn} → {booking.checkOut}
          </p>
          {booking.message && (
            <p className="text-gray-700 mb-2">💬 {booking.message}</p>
          )}
          <div className="flex gap-3 mt-4">
            <Button
              variant="destructive"
              onClick={() => booking.id && onDelete(booking.id)}
            >
              Delete
            </Button>
            <Button variant="outline" onClick={() => onEdit(booking)}>
              Edit
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
