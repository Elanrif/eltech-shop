import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { TypographyShopUi } from "./ui/typograpy-shop-ui";
import TypographyAnchor from "./ui/typography-anchor";

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
        <TypographyShopUi className="max-w-[24rem]">
          {speech.title}
        </TypographyShopUi>
        <TypographyShopUi className="max-w-[24rem]">
          {speech.message}
        </TypographyShopUi>
        <TypographyAnchor value={speech.url} url={"#"} textSize="sm" />
      </CardContent>
    </Card>
  );
}
