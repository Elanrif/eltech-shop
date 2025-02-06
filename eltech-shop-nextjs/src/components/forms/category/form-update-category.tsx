"use client"
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {TypographyShopUi} from "@/components/ui/typograpy-shop-ui";
import {useForm} from "react-hook-form";
import {Category} from "@/lib/category/models/category.model";
import {ButtonShopUi} from "@/components/ui/button-shop-ui";
import {DialogClose} from "@/components/ui/dialog";
import React, {useEffect, useState} from "react";
import {updateCategory} from "@/lib/category/services/category.client.service";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";
type DialogProps = {
    dialogClose: boolean;
    setOpen: (open: boolean) => void;
    category: Category;
}

export const  FormUpdateCategory= ({dialogClose, setOpen, category}: DialogProps) => {
    const router = useRouter();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Category>();
    const [ submitting, setSubmitting ] = useState<boolean>(false);

    useEffect(() => {
        if(category) {
            reset({
                name: category.name,
                description: category.description,
            })
        }
    },[category, reset])

    const onSubmit = (data: Category) => {

        setSubmitting(true);
        const data__ = {
            ...data,
            id: category.id
        }
        console.log(data__);
        const response = updateCategory(data__);
        router.refresh();
        setTimeout(() => {
            toast.success('successfully created!', {
                position: 'top-right',
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
                            Modifé la catégorie associé aux produits
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
                    >Modifier</ButtonShopUi>
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