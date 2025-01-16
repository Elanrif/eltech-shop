import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import TypographyH from "./ui/typography-h";
import TypographyP from "./ui/typography-p";
import TypographyA from "./ui/typography-a";
import Image from "next/image";

export type SpeechProps = {
    title: string;
    imageUrl?: string;
    message: string;
    url: string;
}
export default function CardSpeechClient({speech}:{speech: SpeechProps}) {
  return (
    <Card className="flex items-center gap-1 bg-shop-accent/30">
      <CardHeader>
        <div className="relative w-36 h-[150px]">
          <Image
            src={`/assets/${speech.imageUrl}`}
            alt={`image product ${speech.imageUrl}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <TypographyH value={speech.title} textSize="h7" fontWeight="semibold" className="max-w-[24rem]" />
        <TypographyP value={speech.message} textSize="sm" className="max-w-[24rem]"/>
        <TypographyA value={speech.url} url={"#"} textSize="sm"/>
      </CardContent>
    </Card>
  );
}
