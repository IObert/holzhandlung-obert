import ImageFlipCard from "@/components/image-flip-card";
import Link from "next/link";
import { MailIcon, PhoneIcon, TreePineIcon, Truck } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export default function Impressum() {
  return (
    <div className="w-10/12 mx-auto">
      <div className="space-y-6">
        <h1 className="text-2xl mb-12">Team</h1>
        <div className="mx-auto grid w-full grid-cols-1  md:grid-cols-2 lg:grid-cols-3  items-stretch justify-center gap-4">
          <Card className="h-[250px] w-[300px]">
            <CardHeader>
              <CardTitle>Heidi Obert</CardTitle>
            </CardHeader>
            <CardContent>
              {"Geschäftsführende Inhaberin"}
              {
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
            </CardContent>
          </Card>

          <Card className="h-[250px] w-[300px]">
            <CardHeader>
              <CardTitle>Wolf Roth</CardTitle>
            </CardHeader>
            <CardContent>
              {""}
              {
                <>
                  <div className="flex mt-4">
                    <TreePineIcon className="text-xl mr-4" />
                    Verkauf & Außendienst
                  </div>
                  <Link
                    href="tel:491702845408"
                    className="flex mt-2 hover:underline"
                  >
                    <PhoneIcon className="text-xl mr-4" />
                    0170 / 28 45 408
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
            </CardContent>
          </Card>

          <Card className="h-[250px] w-[300px]">
            <CardHeader>
              <CardTitle>Bruno Günter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex mt-4">
                <Truck className="text-xl mr-4" />
                LKW Fahrer
              </div>
              <Link
                href="tel:491702840017"
                className="flex mt-2 hover:underline"
              >
                <PhoneIcon className="text-xl mr-4" />
                0170 / 28 40 017
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
