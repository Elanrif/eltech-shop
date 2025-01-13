import Image from "next/image";

export default function Logo() {
  const img = { src: "/assets/logo.webp", alt: "logo de la boutique" };
  return (
      <Image
        src= {img.src}
        alt={img.alt}
        width={50}
        height={50}
        quality={100}
        className="h-[3rem] w-[3rem] rounded-md object-cover"
      />
  );
}
