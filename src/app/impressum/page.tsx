import Link from "next/link";

export default function Impressum() {
  return (
    <div className="max-w-xs md:max-w-xl mx-auto">
      <div className="space-y-6">
        <h1 className="text-2xl mb-12">Impressum</h1>
        <p className="text-xs text-gray-400">Angaben gemäß § 5 TMG</p>
        <p className="">
          Holzhandlung Heidi Obert <br />
          Rankach 30 <br />
          77709 Oberwolfach - Walke
        </p>

        <p className="">
          Tel: 0 78 34 / 86 96 40 <br />
          Email:
          <Link
            href="mailto:info@holzhandlung-obert.de"
            className="hover:underline underline-offset-4"
          >
            info@holzhandlung-obert.de
          </Link>
        </p>

        <p className="">Ust.-IdNr.: DE 156642409</p>

        <p className="text-xs text-gray-400">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
        </p>
        <p className="">
          Holzhandlung Heidi Obert <br />
          Rankach 30 <br />
          77709 Oberwolfach - Walke
        </p>
      </div>
    </div>
  );
}
