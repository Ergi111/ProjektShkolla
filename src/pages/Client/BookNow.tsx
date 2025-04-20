import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";

const BookingSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Full name must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string().min(7, { message: "Phone number is required" }),
  checkIn: z.string().min(1, { message: "Please select a check-in date" }),
  checkOut: z.string().min(1, { message: "Please select a check-out date" }),
  roomType: z.string().min(1, { message: "Please select a room type" }),
  message: z.string().optional(),
});

type BookingType = z.infer<typeof BookingSchema>;

export const BookNow = () => {
  const form = useForm<BookingType>({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      checkIn: "",
      checkOut: "",
      roomType: "",
      message: "",
    },
  });

  const onSubmit = async (data: BookingType) => {
    try {
      await axios.post("http://localhost:3001/bookings", data);
      console.log("Booking successfully submitted:", data);
      form.reset();
    } catch (error) {
      console.error("Error submitting the booking:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Book Now</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Full Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="P.sh. erisa@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+355 69 000 0000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="checkIn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Check In</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="checkOut"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Check Out</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="roomType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rooms type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Zgjidh një opsion" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="double">Double</SelectItem>
                    <SelectItem value="suite">Suite</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Messages</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Dëshira të veçanta..."
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Book Now
          </Button>
        </form>
      </Form>
    </div>
  );
};
