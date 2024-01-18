import Image from "next/image";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Section from "@/components/section";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const images = JSON.parse(process.env.images || "[]") as [];

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
      <Section id="umwelt">
        <div className="inline-block mb-2 rounded-lg bg-gray-600 text-gray-100 px-2 py-1 text-xs">
          Umwelt
        </div>
        <h2 className="lg:leading-tighter text-3xl text-black font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
          Für einen verantwortungsvolle und ressourcenschonende Umgang mit dem
          einzigartigen Naturwerkstoff Holz.
        </h2>
      </Section>
      <Section
        id="regional"
        darkBackground={true}
        title="Regionaler Kontakt"
        tag="Wir sind für Sie da!"
      >
        <p className="mb-2">
          Zuverlässigkeit, hohe Produktqualität und optimale Beratung sind bei
          uns selbstverständlich. Darüber hinaus profitieren Sie von:
        </p>
        <ul className="ml-4" style={{ listStyleType: "circle" }}>
          <li>Einem gut sortiertem Lager</li>
          <li>Kommissionierung</li>
          <li>Vollmaßigem Einschnitt</li>
          <li>Kurzen Lieferzeiten</li>
          <li>Hoher Flexibilität durch eigenen LKW</li>
          <li>
            Lange Geschäftszeiten - überdurchschnittlich gute Erreichbarkeit
          </li>
        </ul>
      </Section>
      <Section
        id="lieferprogramm"
        title="Unser Lieferprogramm"
        subtitle="Klicken Sie auf die jeweilige Kategorie um mehr zu erfahren"
      >
        <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
          <div className="flex w-full items-center justify-center p-4 sm:p-8">
            <img
              alt="Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="105"
              src="static/pellets.jpeg"
              width="200"
            />
          </div>
          <div className="flex w-full items-center justify-center p-4 sm:p-8">
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
      </Section>
      <Section
        id="galerie"
        tag="Unser Lager"
        title="Galerie"
        darkBackground={true}
      >
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image: any, index) => (
              <CarouselItem key={index}>
                <Link
                  href={image.path.replace("/static", "").replace(".jpeg", "")}
                  target="_blank"
                  className="flex flex-col items-center justify-center cursor-zoom-in"
                >
                  <img
                    alt={image.alt}
                    className="overflow-hidden rounded-lg w-10/12"
                    src={image.path}
                  />
                  <span className="">{image.alt}</span>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Section>
      <Section
        id="holzarten"
        title="Holzarten"
        subtitle="Fahren Sie mit der Maus über die jeweilige Holzart um mehr zu  erfahren"
      >
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
      </Section>

      <section
        id=""
        className="w-full py-12 md:py-24 lg:py-32 text-gray-500 bg-gray-100 dark:bg-gray-800"
      >
        <div className="mx-auto container grid items-center justify-center gap-6 px-4 md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"></h2>
            <p className="mx-auto max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"></p>
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
    </main>
  );
}
