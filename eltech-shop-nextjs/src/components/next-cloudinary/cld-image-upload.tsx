"use client"
import { useState } from 'react';
import { CldUploadButton, CldImage } from 'next-cloudinary';
import {ImageIcon} from "lucide-react";

export interface UploadedImage {
    url: string;
    public_id: string;
}

export default function CldImageUpload() {
    const [uploadedImage, setUploadedImage] = useState<UploadedImage | null>(null);

    return (
        <div className={'flex items-center gap-4'}>
            {/* Bouton pour uploader une image */}
            <CldUploadButton
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                onSuccess={(result: any) => {
                    const info = result.info as { secure_url: string; public_id: string };
                    setUploadedImage({ url: info.secure_url, public_id: info.public_id });
                }}
            >
                <ImageIcon size={16} className={'hover:cursor-pointer hover:text-shop-secondary duration-400'}/>
            </CldUploadButton>

            {/* Afficher l'image uploadée */}
            {uploadedImage && (
                <div className="mt-4">
                   {/* <p className="text-lg font-medium">Nom de l&apos;image : {uploadedImage.public_id}</p>*/}
                    <CldImage
                        src={uploadedImage.public_id} // Utilisation du public_id retourné
                        alt="Uploaded Cloudinary Image"
                        width="150"
                        height="70"
                        crop={{
                            type: 'auto',
                            source: true,
                        }}
                    />
                </div>
            )}
        </div>
    );
}