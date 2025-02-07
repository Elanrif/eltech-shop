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
import {PlusIcon} from "lucide-react";
import {FormCategory} from "@/components/forms/category/form-category";
import React from "react";
import {FormUpdateCategory} from "@/components/forms/category/form-update-category";
import {Category} from "@/lib/category/models/category.model";

export const DialogFormCategory = ({isCreate,category}: {isCreate?: boolean; category?: Category}) => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <ButtonShopUi icon={<PlusIcon size={18}/>} directionIcon={"left"}> {isCreate? 'Ajouter': 'Modifier'}</ButtonShopUi>
                </DialogTrigger>
                <DialogContent className="sm:min-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{isCreate ? 'Ajouter une catégorie': 'Modifier la catégorie'}</DialogTitle>
                        <DialogDescription>
                            Veuillez remplir les champs ci-dessous pour créer la catégorie
                        </DialogDescription>
                    </DialogHeader>
                    {(isCreate || !category) ?
                        <FormCategory
                            dialogClose={true}
                            setOpen={setOpen}/>
                        :
                        <FormUpdateCategory
                            dialogClose={true}
                            setOpen={setOpen}
                            category={category}/>
                    }
                </DialogContent>
            </Dialog>
        </>
    )
}