import { ArrowUpToLineIcon } from "lucide-react";
import Link from "next/link";

export default function NavUpIcon() {
  return (
    <Link href="#top" className="">
      <ArrowUpToLineIcon className="h-6 w-6 my-6" />
    </Link>
  );
}
