import ImageFlipCard from "@/components/image-flip-card";
import Link from "next/link";
import { MailIcon, PhoneIcon, TreePineIcon, Truck } from "lucide-react";

export default function Impressum() {
  return (
    <div className="w-10/12 mx-auto">
      <div className="space-y-6">
        <h1 className="text-2xl mb-12">Team</h1>
        <div className="mx-auto grid w-full grid-cols-1  md:grid-cols-2 lg:grid-cols-3  items-stretch justify-center gap-4">
          <ImageFlipCard
            title="Heidi Obert"
            description="Geschäftsführende Inhaberin"
            src="/static/holz/Fichtenholz.webp"
            children={
              <>
                <div className="flex mt-4">
                  <TreePineIcon className="text-xl mr-4" />
                  Verkauf
                </div>
                <Link
                  href="tel:497834869640"
                  className="flex mt-2 hover:underline"
                >
                  <PhoneIcon className="text-xl mr-4" />
                  07834 / 86 96 40
                </Link>
                <Link
                  href="mailto:obert@holzhandlung-obert.de"
                  className="flex mt-2 hover:underline"
                >
                  <MailIcon className="text-xl mr-4" />
                  Email schreiben
                </Link>
              </>
            }
          />
          <ImageFlipCard
            title="Wolf Roth"
            src="/static/holz/Fichtenholz.webp"
            children={
              <>
                <div className="flex mt-4">
                  <TreePineIcon className="text-xl mr-4" />
                  Verkauf & Außendienst
                </div>
                <Link
                  href="tel:497834869640"
                  className="flex mt-2 hover:underline"
                >
                  <PhoneIcon className="text-xl mr-4" />
                  07834 / 86 96 40
                </Link>
                <Link
                  href="mailto:roth@holzhandlung-obert.de"
                  className="flex mt-2 hover:underline"
                >
                  <MailIcon className="text-xl mr-4" />
                  Email schreiben
                </Link>
              </>
            }
          />
          <ImageFlipCard
            title="Bruno Günter"
            children={
              <>
                <div className="flex mt-4">
                  <Truck className="text-xl mr-4" />
                  LKW Fahrer
                </div>
              </>
            }
            src="/static/holz/Fichtenholz.webp"
          />
        </div>
      </div>
    </div>
  );
}
