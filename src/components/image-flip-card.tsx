import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";

export default function ImageFlipCard({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) {
  //the card flips on hover

  return (
    <div
      className="mx-auto select-none h-[250px] w-[300px] cursor-pointer group perspective"
    >
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
          <Card   className=" h-full">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
