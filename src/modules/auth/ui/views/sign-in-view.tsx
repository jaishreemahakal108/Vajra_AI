"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { OctagonAlert } from "lucide-react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { motion } from "framer-motion";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle } from "@/components/ui/alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Password is required" }),
});

export const SignInView = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setError(null);
    setPending(true);

    authClient.signIn.email(
      {
        email: data.email,
        password: data.password,
        callbackURL: "/",
      },
      {
        onSuccess: () => {
          setPending(false);
          router.push("/");
        },
        onError: ({ error }) => {
          setError(error.message);
          setPending(false);
        },
      }
    );
  };

  const onSocial = (provider: "github" | "google") => {
    setError(null);
    setPending(true);

    authClient.signIn.social(
      {
        provider,
        callbackURL: "/",
      },
      {
        onSuccess: () => {
          setPending(false);
        },
        onError: ({ error }) => {
          setError(error.message);
          setPending(false);
        },
      }
    );
  };

  return (
    <div className="relative min-h-screen h-screen w-full overflow-hidden flex items-center justify-center p-4 bg-black">
      {/* Background video (kept) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bg-video1.mp4" type="video/mp4" />
      </video>

      {/* Dim overlay */}
      <div className="fixed inset-0 bg-black/55 backdrop-blur-sm z-0" />

      {/* soft decorative orbs */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
      >
        <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-gradient-to-tr from-emerald-500/20 via-green-400/10 to-transparent blur-3xl animate-blob" />
        <div className="absolute -right-32 bottom-20 w-80 h-80 rounded-full bg-gradient-to-bl from-green-600/18 via-emerald-500/8 to-transparent blur-3xl animate-blob animation-delay-2000" />
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-5xl flex flex-col gap-6 px-4"
      >
        <Card className="relative overflow-hidden border-0 shadow-2xl bg-white/6 backdrop-blur-md ring-1 ring-white/6 transform transition-transform duration-500 hover:-translate-y-1 group">
          <CardContent className="grid p-0 md:grid-cols-2">
            {/* Form side */}
            <Form {...form}>
              <div className="p-8 md:p-10">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col text-center space-y-2">
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-emerald-200 to-white drop-shadow-sm">
                      Welcome Back!
                    </h1>
                    <p className="text-sm text-white/70">
                      Login to your account
                    </p>
                  </div>

                  <div className="grid gap-4">
                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-white/75">
                            Email
                          </FormLabel>
                          <FormControl>
                            <div className="relative group">
                              <Input
                                type="email"
                                placeholder="xyz@example.com"
                                className="bg-[rgba(255,255,255,0.03)] border-transparent focus:border-transparent h-11 rounded-md shadow-sm placeholder:text-white/40 text-white transition-transform duration-200 focus:scale-[1.01] focus:shadow-lg focus:shadow-[0_10px_30px_rgba(34,197,94,0.08)]"
                                {...field}
                              />
                              {/* animated underline + glow */}
                              <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-green-400 via-emerald-300 to-white opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 rounded" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Password */}
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-white/75">
                            Password
                          </FormLabel>
                          <FormControl>
                            <div className="relative group">
                              <Input
                                type="password"
                                placeholder="••••••••"
                                className="bg-[rgba(255,255,255,0.03)] border-transparent focus:border-transparent h-11 rounded-md shadow-sm placeholder:text-white/40 text-white transition-transform duration-200 focus:scale-[1.01] focus:shadow-lg focus:shadow-[0_10px_30px_rgba(34,197,94,0.08)]"
                                {...field}
                              />
                              <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-green-400 via-emerald-300 to-white opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 rounded" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {!!error && (
                    <Alert className="bg-red-900/60 border-red-700 animate-fade-in">
                      <OctagonAlert className="h-4 w-4 !text-red-300" />
                      <AlertTitle className="text-red-200 font-medium">
                        {error}
                      </AlertTitle>
                    </Alert>
                  )}

                  {/* Primary button with glowing-worm */}
                  <div>
                    <button
                      disabled={pending}
                      onClick={form.handleSubmit(onSubmit)}
                      type="button"
                      aria-disabled={pending}
                      className="relative overflow-hidden group w-full h-11 rounded-lg px-4 flex items-center justify-center font-semibold text-base text-black bg-gradient-to-r from-green-200 via-emerald-200 to-white shadow-md transform transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
                    >
                      {/* worm glow streak (animated) */}
                      <span
                        aria-hidden
                        className="absolute left-[-40%] top-0 w-[140%] h-full pointer-events-none transform -skew-x-12 translate-x-[-60%] group-hover:translate-x-[10%] transition-transform duration-700 bg-[linear-gradient(90deg,#7CFFB2,#6EE7B7,#7CFFB2,rgba(255,255,255,0))] opacity-70"
                        style={{ mixBlendMode: "screen" }}
                      />
                      <span className="relative z-10">
                        {pending ? "Signing in..." : "Sign In"}
                      </span>
                    </button>
                  </div>

                  {/* divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-white/10" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-[rgba(255,255,255,0.03)] px-3 text-white/60 font-medium tracking-wide rounded-full">
                        Or Continue with
                      </span>
                    </div>
                  </div>

                  {/* social */}
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      disabled={pending}
                      onClick={() => onSocial("google")}
                      type="button"
                      className="relative group w-full h-11 rounded-lg border border-white/8 bg-[rgba(255,255,255,0.02)] flex items-center justify-center gap-2 font-medium text-white/90 transition-transform duration-200 hover:scale-[1.03]"
                    >
                      <FaGoogle className="mr-2" />
                      <span>Google</span>
                    </button>

                    <button
                      disabled={pending}
                      onClick={() => onSocial("github")}
                      type="button"
                      className="relative group w-full h-11 rounded-lg border border-white/8 bg-[rgba(255,255,255,0.02)] flex items-center justify-center gap-2 font-medium text-white/90 transition-transform duration-200 hover:scale-[1.03]"
                    >
                      <FaGithub className="mr-2" />
                      <span>GitHub</span>
                    </button>
                  </div>

                  <div className="text-center text-sm">
                    <span className="text-white/70">Don't have an account?</span>{" "}
                    <Link
                      href="/sign-up"
                      className="underline underline-offset-4 text-emerald-200 font-semibold"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </Form>

            {/* Right panel - branding */}
            <div className=" relative hidden md:flex flex-col gap-y-6 items-center justify-center p-10">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-6" />
              <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="rounded-full p-1 bg-gradient-to-tr from-white/30 to-transparent shadow-lg">
                  <div className="h-[200px] w-[200px] rounded-full overflow-hidden">
                    <video
                      src="/logo1.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-white/60 text-center text-xs">
          By clicking continue, you agree to our{" "}
          <a href="#" className="underline text-white/80 font-medium">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline text-white/80 font-medium">
            Privacy Policy
          </a>
        </div>
      </motion.div>
    </div>
  );
};