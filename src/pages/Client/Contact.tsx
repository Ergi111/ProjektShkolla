import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactSchema = z.object({
  fullName: z.string().min(3, { message: "Name is required" }),
  email: z.string().email({ message: "Email is required" }),
  phoneNumber: z.string(),
  message: z
    .string()
    .min(30, { message: "Message must be at least 30 characters" }),
});

export type ContactType = z.infer<typeof ContactSchema>;

export const Contact = () => {
  const form = useForm<ContactType>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactType) => {
    console.log("Form data:", values);
    // mund të shtosh dërgimin e të dhënave me fetch/axios/emailjs etj.
  };

  return (
    <main>
      <section>
        <div
          className="w-full h-screen bg-center flex flex-col items-center justify-center text-white"
          style={{
            backgroundImage:
              "url('https://media.cntraveller.com/photos/642aa1ad770beda2d4f5cc22/4:3/w_2664,h_1998,c_limit/Fiji-march2023issue-JackJohns15.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <p className="text-xl font-semibold mb-4">CHAT WITH US</p>
          <h1 className="text-6xl font-bold font-mono text-center">
            Get In Touch
          </h1>
        </div>
      </section>

      <section className="w-full py-42 flex justify-center items-center bg-gray-50">
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 px-4">
          <div className="w-full md:w-1/2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
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
                      <FormControl>
                        <Input placeholder="Email" {...field} />
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
                      <FormControl>
                        <Input placeholder="Phone Number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Your Message..."
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-fit">
                  Submit
                </Button>
              </form>
            </Form>
          </div>

          <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
            <p className="mb-2">📍 Rruga e Durrësit, Tirana, Albania</p>
            <p className="mb-2">📞 +355 12 345 6789</p>
            <p className="mb-2">📧 info@hoteliim.com</p>
          </div>
        </div>
      </section>
    </main>
  );
};
