import {ReactNode} from "react";
import CldImage from "@/components/next-cloudinary/cld-image";
import CldImageUpload from "@/components/next-cloudinary/cld-image-upload";

export default function Page({children}: {children: ReactNode}) {

    return (
        <>
            <CldImage
                src="chaussure_blanc_bzlsfa" // Use this sample image or upload your own via the Media Explorer
                alt={"simple cloudinary image"}
                width="500" // Transform the image: auto-crop to square aspect_ratio
                height="500"
                crop={{
                    type: 'auto',
                    source: true
                }}
            />
            {children}
            <CldImageUpload/>
        </>
    )
}