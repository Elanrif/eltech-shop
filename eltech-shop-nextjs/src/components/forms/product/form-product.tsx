"use client"
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {TypographyShopUi} from "@/components/ui/typograpy-shop-ui";
import {useForm} from "react-hook-form";
import {Product} from "@/lib/category/models/category.model";
import {ButtonShopUi} from "@/components/ui/button-shop-ui";
import {DialogClose} from "@/components/ui/dialog";
import React, {useState} from "react";
import {createCategory} from "@/lib/category/services/category.client.service";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";

type DialogProps = {
    dialogClose: boolean;
    setOpen: (open: boolean) => void;
}

export const  FormProduct= ({dialogClose, setOpen}: DialogProps) => {
    const router = useRouter();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Product>();
    const [ submitting, setSubmitting ] = useState<boolean>(false);

    const onSubmit = (data: Product) => {
        console.log(data);
        setSubmitting(true);
        const data_ = {
            name: data.name,
            description: data.description,
        }
        const response = createCategory(data_);
        router.refresh();
        setTimeout(() => {
            toast.success('successfully created!', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            setSubmitting(false);
            reset()
            setOpen(false)
        console.log("received data", response);
        },3000)

    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card className={'flex flex-col gap-3'}>
                <CardHeader>
                    <CardTitle>
                        <TypographyShopUi>Categorie</TypographyShopUi>
                    </CardTitle>
                    <CardDescription>
                        <TypographyShopUi size={'xs'}>
                            Créer une catégorie associé aux produits
                        </TypographyShopUi>
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="name" className="after:content-['*'] after:text-shop-danger">Nom</Label>
                        <Input
                            id="text"
                            placeholder="Saisir le nom de la catégorie..."
                            {...register('name', { required: true})}
                        />
                        {errors.name && <span className={'text-shop-danger text-xs'}> Ce champ est requis.</span>}
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="description">Description</Label>
                        <Input
                            id="text"
                            placeholder="Description..."
                            {...register('description')}
                        />
                    </div>
                </CardContent>
                <CardFooter className={'flex gap-3 items-center'}>
                    <ButtonShopUi
                        type={"submit"}
                        loading={submitting}
                    >Ajouter</ButtonShopUi>
                    {dialogClose && (
                        <DialogClose asChild>
                        <ButtonShopUi type="button" variant="destructive">
                            Annuler
                        </ButtonShopUi>
                    </DialogClose>)}
                </CardFooter>
            </Card>
        </form>
    )
}