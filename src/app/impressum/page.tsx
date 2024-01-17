import NavUpIcon from "@/components/nav-up-icon";
import { ArrowUpToLineIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Impressum() {
  return (
    <div className="max-w-6/10 my-20 h-full flex flex-col mx-8 md:mx-40">
      <h1 className="text-2xl mb-12">Impressum</h1>
      <div className="space-y-3">
        <p className="mx-auto mb-8 text-left max-w-[700px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Holzhandlung Heidi Obert <br />
          Rankach 30 <br />
          77709 Oberwolfach - Walke
        </p>

        <p className="mx-auto text-left max-w-[700px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
          Tel.: 0 78 34 / 86 96 40 <br />
          Fax.: 0 78 34 / 90 71 <br />
          Email: info@holzhandlung-obert.de <br />
        </p>

        <p className="mx-auto my-8 text-left max-w-[700px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Ust.-IdNr.: DE 156642409
        </p>
      </div>
    </div>
  );
}
