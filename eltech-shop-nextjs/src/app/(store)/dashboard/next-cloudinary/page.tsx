import {ReactNode} from "react";
import CldImage from "@/common/cld-image";

export default function Page({children}: {children: ReactNode}) {
    console.log(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
    console.log(process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);

    return (
        <>
            <CldImage
                src="cld-sample-5" // Use this sample image or upload your own via the Media Explorer
                alt={"simple cloudinary image"}
                width="500" // Transform the image: auto-crop to square aspect_ratio
                height="500"
                crop={{
                    type: 'auto',
                    source: true
                }}
            />
            {children}
        </>
    )
}