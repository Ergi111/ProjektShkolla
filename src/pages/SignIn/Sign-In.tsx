import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const signInSchema = z.object({
  userName: z.string().min(3, "User name is required"),
  password: z.string().min(4, "Password is required"),
});
type SignInForm = z.infer<typeof signInSchema>;

export const SignIn = () => {
  const form = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const onSubmit = (data: SignInForm) => {
    console.log("Form Data:", data);
    alert("Login successful!");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm p-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full max-w-sm flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="userName">User Name</Label>
                  <FormControl>
                    <Input placeholder="User name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="password">Password</Label>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-4">
              <Button type="submit" className="w-full">
                Log In
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
};
