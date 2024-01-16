import NavUpIcon from "@/components/nav-up-icon";
import { ArrowUpToLineIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Impressum() {
  return (
    <section className="flex justify-center w-full h-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl mb-16 font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Impressum
          </h2>
          <p className="mx-auto mb-8 text-left max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Holzhandlung Heidi Obert <br />
            Rankach 30 <br />
            77709 Oberwolfach - Walke
          </p>

          <p className="mx-auto text-left max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Tel.: 0 78 34 / 86 96 40 <br />
            Fax.: 0 78 34 / 90 71 <br />
            Email: info@holzhandlung-obert.de <br />
          </p>

          <p className="mx-auto my-8 text-left max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Ust.-IdNr.: DE 156642409


          </p>
        </div>
      </div>
    </section>
  );
}
