import Link from "next/link";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";

export default function ImageFlipCard({
  src,
  title,
  description,
  link,
}: {
  src: string;
  title: string;
  description: string;
  link?: string;
}) {
  //the card flips on hover

  const content = (
    <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
      <div className="absolute backface-hidden w-full h-full">
        <Card className="w-full h-full rounded-lg shadow-md overflow-hidden">
          <img
            alt={title}
            className="overflow-hidden w-full h-full"
            src={src}
          />
        </Card>
      </div>
      <div className="absolute my-rotate-y-180 backface-hidden w-full h-full overflow-hidden">
        <Card className=" h-full">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>{description}</CardContent>
        </Card>
      </div>
    </div>
  );

  if (link) {
    return (
      <Link
        href={link}
        className="mx-auto select-none h-[250px] w-[300px] cursor-pointer group perspective"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="mx-auto select-none h-[250px] w-[300px] group perspective">
      {content}
    </div>
  );
}
