"use client"
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {TypographyShopUi} from "@/components/ui/typograpy-shop-ui";
import {useForm} from "react-hook-form";
import {ButtonShopUi} from "@/components/ui/button-shop-ui";
import {DialogClose} from "@/components/ui/dialog";
import React, {useEffect, useState} from "react";
import {updateCategory} from "@/lib/category/services/category.client.service";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";
import {Product} from "@/lib/product/models/product.model";
import {updateProduct} from "@/lib/product/services/product.client.service";
type DialogProps = {
    dialogClose: boolean;
    setOpen: (open: boolean) => void;
    product: Product;
}

export const  FormUpdateProduct= ({dialogClose, setOpen, product}: DialogProps) => {
    const router = useRouter();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Product>();
    const [ submitting, setSubmitting ] = useState<boolean>(false);

    useEffect(() => {
        if(product) {
            reset({
                name: product.name,
                description: product.description,
            })
        }
    },[product, reset])

    const onSubmit = (data: Product) => {

        setSubmitting(true);
        const data__ = {
            ...data,
            id: product.id
        }
        console.log(data__);
        const response = updateProduct(data__);
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