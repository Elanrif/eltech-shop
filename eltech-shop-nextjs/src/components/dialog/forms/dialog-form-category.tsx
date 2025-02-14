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
import {FormCategory} from "@/components/forms/category/form-category";
import React from "react";
import {FormUpdateCategory} from "@/components/forms/category/form-update-category";
import {Category} from "@/lib/category/models/category.model";
import {AlertDialogDelete} from "@/components/modal/alert-dialog-delete";

export const DialogFormCategory = ({category}: {category?: Category}) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                {category ?
                    <div className={'flex items-center gap-1.5'}>
                        <DialogTrigger asChild>
                           <Pencil size={16} className={'hover:cursor-pointer hover:text-shop-secondary duration-400'}/>
                        </DialogTrigger>
                        <AlertDialogDelete data={category} type={"category"} />
                        <Eye size={16} className={'hover:cursor-pointer hover:text-shop-secondary duration-400'}/>
                    </div>
                    :
                    <DialogTrigger asChild>
                        <ButtonShopUi icon={<PlusIcon size={18}/>} directionIcon={"left"}> Ajouter </ButtonShopUi>
                    </DialogTrigger>
                }
                <DialogContent className="sm:min-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{!category ? 'Modifier la catégorie' : 'Ajouter une catégorie'}</DialogTitle>
                        <DialogDescription>
                            Veuillez remplir les champs ci-dessous pour créer la catégorie
                        </DialogDescription>
                    </DialogHeader>
                    {(category) ?
                        <FormUpdateCategory
                            dialogClose={true}
                            setOpen={setOpen}
                            category={category}/>
                        :
                        <FormCategory
                            dialogClose={true}
                            setOpen={setOpen}/>
                    }
                </DialogContent>
            </Dialog>
        </>
    )
}