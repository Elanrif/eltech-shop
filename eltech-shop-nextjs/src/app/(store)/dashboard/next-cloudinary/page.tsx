"use client"
import {ReactNode, useState} from "react";
import {CldUploadButton} from "next-cloudinary";
import CldImage from "@/components/next-cloudinary/cld-image";

export default function Page({children}: {children: ReactNode}) {
    const [uploadedImage, setUploadedImage] = useState<{  url: string, public_id: string } | null>(null);

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
            <CldUploadButton
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                onSuccess={(result) => {
                    const info = result.info as {secure_url: string; public_id: string};
                    setUploadedImage({url: info.secure_url, public_id: info.public_id});
                }}
                className="py-2 px-4 bg-blue-500 text-white rounded"
            >
                Upload an Image
            </CldUploadButton>

            {uploadedImage && (
                <div className="mt-4">
                    <p className="text-lg font-medium">Nom de l&apos;image : {uploadedImage.public_id}</p>

                    <CldImage
                        src={uploadedImage.public_id} // Utilisation du public_id retourné
                        alt="Uploaded Cloudinary Image"
                        width="500"
                        height="500"
                        crop={{
                            type: 'auto',
                            source: true
                        }}
                    />
                </div>
            )}

        </>
    )
}