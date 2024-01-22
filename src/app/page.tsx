import Image from "next/image";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Section from "@/components/section";
import { generateStaticParams } from "./produkte/[id]/page";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ImageFlipCard from "@/components/image-flip-card";

export default async function Home() {
  const images = JSON.parse(process.env.images || "[]") as [];

  const produkte = (await generateStaticParams()) as any[];

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="mx-auto container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 mb-4">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Holzhandlung Heidi Obert
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Qualität Gibt Sicherheit!
              </p>
            </div>
            <div className="text-block  max-w-[900px] space-y-1">
              <p>
                Wir sind ein junges Unternehmen, das sich auf den Vertrieb von
                ökologischen Baumaterialien spezialisiert hat.
              </p>
              <p>
                Die Mehrheit unserer Kunden sind moderne Holzbaubetriebe,
                Dachdeckereien und Baustoffhandlungen, in letzter Zeit jedoch
                auch immer mehr Heimwerker.
              </p>
              <p>
                Erstklassiger Service und innovative Produkte machen uns zu
                einem attraktiven Partner.
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
        subtitle="Klicken Sie auf das jeweilige Produkt um mehr zu erfahren"
      >
        <div className="mx-auto grid w-full grid-cols-1  md:grid-cols-2 lg:grid-cols-3  items-stretch justify-center gap-4">
          {produkte.map((produkt: any) => (
            <ImageFlipCard
              key={produkt.id}
              title={produkt.title}
              description={produkt.description}
              src={produkt.image}
              link={`/produkte/${produkt.id}`}
            />
          ))}
        </div>
      </Section>
      <Section
        id="galerie"
        tag="Unser Lager"
        title="Galerie"
        darkBackground={true}
      >
        <Carousel className="mx-auto w-8/12 md:w-full">
          <CarouselContent>
            {images.map((image: any, index) => (
              <CarouselItem key={index}>
                <Link
                  href={image.path.replace("/static", "").replace(".jpeg", "")}
                  className="flex flex-col items-center justify-center cursor-zoom-in"
                >
                  <img
                    alt={image.alt}
                    className="overflow-hidden rounded-lg w-full"
                    src={image.path}
                  />
                  <span className="pt-2">{image.alt}</span>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" md:flex" />
          <CarouselNext className=" md:flex" />
        </Carousel>
      </Section>
      <Section
        id="holzarten"
        title="Holzarten"
        subtitle="Wählen Sie eine Holzart aus, um mehr zu erfahren"
      >
        <div className="mx-auto grid w-full grid-cols-1  md:grid-cols-2 lg:grid-cols-3  items-stretch justify-center gap-4">
          <ImageFlipCard
            title="Fichtenholz"
            description="Die Fichte, als Konstruktionsholz bekannt, eignet sich für Profile, massive Fußböden und Instrumentenbau. "
            src="/static/holz/Fichtenholz.webp"
          />
          <ImageFlipCard
            title="Kiefernholz"
            description="Kiefer eignet sich für Konstruktionshölzer, Fenster und Möbel."
            src="/static/holz/Kiefernholz.webp"
          />
          <ImageFlipCard
            title="Douglasienholz"
            description="Die Douglasie, beliebt für Fassaden und Balkone, dient auch im Schiffbau. "
            src="/static/holz/douglasienholz.jpg"
          />
          <ImageFlipCard
            src="/static/holz/Eichenholz.jpeg"
            title="Eichenholz"
            description="Die Eiche, für Furniere und robuste Konstruktionshölzer, ist ideal im Fußboden- und Brückenbau."
          />
          <ImageFlipCard
            src="/static/holz/laerchenholz.jpeg"
            title="Lärchenholz"
            description="Lärche überzeugt als Konstruktionsholz, für Fassaden und Möbel, während die sibirische Variante für Fassaden, Balkone und Terrassen geeignet ist. "
          />
          <ImageFlipCard
            src="/static/holz/weisstanne.jpeg"
            title="Weisstanne"
            description="Die Tanne, ideal für Konstruktionshölzer und Innenausbauten, findet Anwendung im Saunabau und Fensterbau."
          />
          <ImageFlipCard
            src="/static/holz/redcedar.jpeg"
            title="Red Cedar"
            description="Red Cedar glänzt in Profilbrettern für Fassadenverkleidungen."
          />
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
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="max-w-md flex-1"
                placeholder="Enter your email"
                type="email"
              />
              <Button type="submit">Sign Up</Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <Link
                className="underline underline-offset-2"
                href="/datenschutz"
              >
                Datenschutzhinweis
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
