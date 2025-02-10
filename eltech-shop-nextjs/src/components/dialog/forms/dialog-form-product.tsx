"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {ButtonShopUi} from "@/components/ui/button-shop-ui";
import {Eye, Pencil, PlusIcon} from "lucide-react";
import React from "react";
import {AlertDialogDelete} from "@/components/modal/alert-dialog-delete";
import {Product} from "@/lib/product/models/product.model";
import {FormUpdateProduct} from "@/components/forms/product/form-update-product";
import {FormProduct} from "@/components/forms/product/form-product";
import CldImageUpload from "@/components/next-cloudinary/cld-image-upload";


export const DialogFormProduct = ({product}: {product?: Product}) => {
    const [open, setOpen] = React.useState(false);


    return (
        <div className={'flex gap-3 items-center'}>
            {product && (<CldImageUpload/>)}
            <Dialog open={open} onOpenChange={setOpen}>
                {product ?
                    <div className={'flex items-center gap-1.5'}>
                        <DialogTrigger asChild>
                           <Pencil size={16} className={'hover:cursor-pointer hover:text-shop-secondary duration-400'}/>
                        </DialogTrigger>
                        <AlertDialogDelete data={product} type={"product"} />
                        <Eye size={16} className={'hover:cursor-pointer hover:text-shop-secondary duration-400'}/>
                    </div>
                    :
                    <DialogTrigger asChild>
                        <ButtonShopUi icon={<PlusIcon size={18}/>} directionIcon={"left"}> Ajouter </ButtonShopUi>
                    </DialogTrigger>
                }
                <DialogContent className="sm:min-w-[925px] overflow-y-auto max-h-[90vh]">
                    <DialogHeader className={'hidden'}>
                        <DialogTitle>{!product ? 'Modifier le produit' : 'Ajouter un produit'}</DialogTitle>
                        <DialogDescription>
                            Veuillez remplir les champs ci-dessous pour créer le produit
                        </DialogDescription>
                    </DialogHeader>
                    {(product) ?
                        <FormUpdateProduct
                            dialogClose={true}
                            setOpen={setOpen}
                            product={product}/>
                        :
                        <FormProduct
                            dialogClose={true}
                            setOpen={setOpen}/>
                    }
                </DialogContent>
            </Dialog>
        </div>
    )
}