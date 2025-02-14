"use client";

import { CldImage as CldImageDefault, CldImageProps }  from 'next-cloudinary';

const CldImage = (props: CldImageProps) => {
    return <CldImageDefault {...props} />
}

export default CldImage;

/* how to use */
/*
*
* <CldImage
      src={product.imageUrl ?
          product.imageUrl
          :
          process.env.NEXT_PUBLIC_CLOUDINARY_DEFAULT_IMG_URL as string
      }
      alt=""
      width="500"
      height="240"
      crop={{
        type: 'auto',
        source: true,
      }}
   />
*
*
* */