"use client"
import { useState } from 'react';
import {CldUploadButton, CldImage, CloudinaryUploadWidgetResults} from 'next-cloudinary';
import {ImageIcon} from "lucide-react";
import {Product, ProductUploadImage} from "@/lib/product/models/product.model";
import {uploadProductImage} from "@/lib/product/services/product.client.service";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";

export interface UploadedImage {
    url: string;
    public_id: string;
}

export default function CldImageUpload({data}: { data: Product }) {
    const [uploadedImage, setUploadedImage] = useState<UploadedImage | null>(null);
    const router = useRouter();

    const handleOnSuccess = (result: CloudinaryUploadWidgetResults) => {
        const info = result.info as { secure_url: string; public_id: string };
        setUploadedImage({ url: info.secure_url, public_id: info.public_id });

        const payload: ProductUploadImage = {
            id: data.id as number,
            imageUrl: info.secure_url,
        };

        /* auto async call*/
        (async () => {
            const response = await uploadProductImage(payload)

            router.refresh();
            if("message" in response!) {
                toast.error('Internal server error!', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            } else {
                toast.success('Image successfully updated!', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        })()

    }

    return (
        <div className={'flex items-center gap-4'}>
            {/* Bouton pour uploader une image */}
            <CldUploadButton
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                onSuccess={(result)=> handleOnSuccess(result)}
            >
                <ImageIcon size={16} className={'hover:cursor-pointer hover:text-shop-secondary duration-400'}/>
            </CldUploadButton>

           {/* {uploadedImage && (
                <div className="mt-4">
                     <p className="text-lg font-medium">Nom de l&apos;image : {uploadedImage.public_id}</p>
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
            )}*/}
        </div>
    );
}