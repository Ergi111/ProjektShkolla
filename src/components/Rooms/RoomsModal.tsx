import { RoomsType } from "@/type/RoomType";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";

interface Room {
  open: boolean;
  onClose: () => void;
  room: RoomsType;
}

export const RoomsModal = ({ open, onClose, room }: Room) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Rooms Details</DialogTitle>
          <DialogDescription>{room.name}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">{room.name}</h3>

          <div className="w-full h-60 overflow-hidden rounded-lg border">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-gray-700">{room.description}</p>

          <div className="flex justify-between text-sm text-gray-600 border-t pt-4">
            <div>
              <span className="font-medium">
                ${Number(room.price).toFixed(2)}
              </span>
            </div>
            <div>
              <span className="font-medium">{room.category}</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
