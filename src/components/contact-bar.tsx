import {
  ArrowUpToLineIcon,
  MailIcon,
  PhoneIcon,
  PrinterIcon,
} from "lucide-react";
import Link from "next/link";

export default function ContactBar() {
  return (
    <div className="text-sm md:text-base mx-auto p-4 flex flex-col md:flex-row items-center justify-center gap-2 lg:gap-10">
      <Link
        href="tel:497834869640"
        className="flex flex-row mt-2 text-center hover:underline hover:bg-gray-400 p-2 rounded-lg hover:text-gray-900"
      >
        <PhoneIcon className="mx-auto" />
        <span className="mt-0 ml-2">07834 / 869640</span>
      </Link>
      <Link
        href="mailto:info@holzhandlung-obert.de"
        className="flex flex-row mt-2 text-center hover:underline hover:bg-gray-400 p-2 rounded-lg hover:text-gray-900"
      >
        <MailIcon className="mx-auto" />
        <span className="mt-0 ml-2">info@holzhandlung-obert.de</span>
      </Link>
    </div>
  );
}
