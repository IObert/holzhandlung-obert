import Image from "next/image";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Holzhandlung Heidi Obert
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Qualität Gibt Sicherheit!
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="Umwelt"
        className="w-full py-12 text-gray-400 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      >
        <div className="mx-auto container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-800">
                Regionaler Kontakt
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Service
              </h2>
              <p className="max-w-[900px]   dark:text-gray-400">
                Zuverlässigkeit, hohe Produktqualität und optimale Beratung sind
                bei uns selbstverständlich.
              </p>
              <p className="max-w-[900px]  dark:text-gray-400">
                Darüber hinaus profitieren Sie von:
                <ul>
                  <li>gut sortiertem Lager</li>
                  <li>Kommissionierung</li>
                  <li>Vollmaßigem Einschnitt</li>
                  <li>kurzen Lieferzeiten</li>
                  <li>hoher Flexibilität durch eigenen LKW</li>
                  <li>
                    lange Geschäftszeiten - überdurchschnittlich gute
                    Erreichbarkeit
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="lieferprogramm" className="w-full py-12 md:py-24 lg:py-32">
        <div className="mx-auto container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Unser Lieferprogramm
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Klicken Sie auf die jeweilige Kategorie um mehr zu erfahren
            </p>
          </div>
          <div className="mx-auto grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="105"
                src="static/pellets.jpeg"
                width="200"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="105"
                src="static/profilbretter.jpeg"
                width="200"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="105"
                src="static/pellets.jpeg"
                width="200"
              />
            </div>
          </div>
          <div className="mx-auto grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="105"
                src="static/profilbretter.jpeg"
                width="200"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="105"
                src="static/pellets.jpeg"
                width="200"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="105"
                src="static/profilbretter.jpeg"
                width="200"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="2"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      >
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              2
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              2
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="max-w-lg flex-1"
                placeholder="Enter your email"
                type="email"
              />
              <Button type="submit">Sign Up</Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Sign up to get notified when we launch.
              <Link className="underline underline-offset-2" href="#">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section id="Umwelt" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Nachhaltiges Bauen
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Umwelt
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Für uns und unsere Partner steht der verantwortungsvolle und
                ressourcenschonende Umgang mit dem einzigartigen Naturwerkstoff
                Holz im Vordergrund.
              </p>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Selbst anfallende Sägewerksresthölzer (Schwarten, Spreissel und
                Hackschnitzel) werden sinnvoll bis zur letzten Faser genutzt.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="holzarten"
        className="w-full py-12 md:py-24 lg:py-32 text-gray-500 bg-gray-100 dark:bg-gray-800"
      >
        <div className="mx-auto container grid items-center justify-center gap-6 px-4 md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Holzarten
            </h2>
            <p className="mx-auto max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Fahren Sie mit der Maus über die jeweilige Holzart um mehr zu
              erfahren
            </p>
          </div>
          <div className="divide-y rounded-lg border">
            <div className="mx-auto grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
              <div className="mx-auto flex w-full items-center justify-center ">
                <img
                  alt="Logo"
                  className="overflow-hidden object-contain object-center"
                  height="200"
                  width="400"
                  src="/static/Fichtenholz.webp"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center">
                <img
                  alt="Logo"
                  className="overflow-hidden object-contain object-center"
                  height="200"
                  width="400"
                  src="/static/Kiefernholz.webp"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center">
                <img
                  alt="Logo"
                  className="overflow-hidden object-contain object-center"
                  height="200"
                  width="400"
                  src="/static/douglasienholz.jpg"
                />
              </div>
            </div>
            <div className="mx-auto grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="105"
                  src="/placeholder.svg"
                  width="200"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="105"
                  src="/placeholder.svg"
                  width="200"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="105"
                  src="/placeholder.svg"
                  width="200"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Contact Sales
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
              href="#"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Performance
              </div>
              <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Traffic spikes should be exciting, not scary.
              </h2>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Get Started
              </Link>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Security
              </div>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Fully managed infrastructure designed to scale dynamically with
                your traffic, a global edge to ensure your site is fast for
                every customer, and the tools to monitor every aspect of your
                app.
              </p>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                href="#"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
