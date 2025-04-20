import { z } from "zod";

export const BookingSchema = z.object({
  id: z.number().optional(),
  fullName: z.string().min(3),
  email: z.string().email(),
  phoneNumber: z.string().min(7),
  checkIn: z.string().min(1),
  checkOut: z.string().min(1),
  roomType: z.string().min(1),
  message: z.string().optional(),
});

export type BookingType = z.infer<typeof BookingSchema>;
