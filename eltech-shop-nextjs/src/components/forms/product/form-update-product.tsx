"use client"
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {TypographyShopUi} from "@/components/ui/typograpy-shop-ui";
import {useForm} from "react-hook-form";
import {ButtonShopUi} from "@/components/ui/button-shop-ui";
import {DialogClose} from "@/components/ui/dialog";
import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";
import {Product} from "@/lib/product/models/product.model";
import {updateProduct} from "@/lib/product/services/product.client.service";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {useCategoryContext} from "@/contexts/category-context";
type DialogProps = {
    dialogClose: boolean;
    setOpen: (open: boolean) => void;
    product: Product;
}
type ColorsProps = {
    name: string;
    color: string;
}
const colors : ColorsProps[] = [
    {
        name: 'blanc',
        color: 'bg-slate-300',
    },
    {
        name: 'noire',
        color: 'bg-black',
    },
    {
        name: 'orange',
        color: 'bg-orange-500',
    },
    {
        name: 'vert',
        color: 'bg-green-500',
    },
]

export const  FormUpdateProduct= ({dialogClose, setOpen, product}: DialogProps) => {
    const router = useRouter();
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<Product>({
        defaultValues: {
            id: product.id,
            name: product.name,
            description: product.description,
            detail: product.detail,
            quantity: product.quantity,
            price: product.price,
            image: product.image,
            color: product.color,
        }
    });
    const [ submitting, setSubmitting ] = useState<boolean>(false);
    const category = useCategoryContext()

    const onSubmit = async(data: Product) => {
        setSubmitting(true);
        console.log(data);
        const payload = {
            ...data,
            price: Number(data.price),
            quantity: Number(data.quantity),
        };
        const response = await updateProduct(payload);
        router.refresh();
        setTimeout(() => {
            if("message" in response!) {
                toast.error('Internal server error!', {
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
            } else {
                toast.success('successfully updated!', {
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
            }
        },3000)

    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card className={'flex flex-col gap-3'}>
                <CardHeader>
                    <CardTitle>
                        <TypographyShopUi>Produit</TypographyShopUi>
                    </CardTitle>
                    <CardDescription>
                        <TypographyShopUi size={'xs'}>
                            Créer un produit
                        </TypographyShopUi>
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className={'flex items-center gap-4 justify-between'}>
                        <div className="space-y-1 w-full">
                            <Label htmlFor="name" className="after:content-['*'] after:text-shop-danger">Nom</Label>
                            <Input
                                id="name"
                                placeholder="Saisir le nom du produit..."
                                {...register('name', { required:true})}
                            />
                            {errors.name && <span className={'text-shop-danger text-xs'}> Ce champ est requis.</span>}
                        </div>
                        <div className="space-y-1 w-full">
                            <Label htmlFor="description" className="after:content-['*'] after:text-shop-danger">Description</Label>
                            <Input
                                id="description"
                                placeholder="Ajouter une description..."
                                {...register('description',{ required: true})}
                            />
                            {errors.description && <span className={'text-shop-danger text-xs'}> Ce champ est requis.</span>}
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="detail" className="after:content-['*'] after:text-shop-danger">Detail</Label>
                        <Input
                            id="detail"
                            placeholder="Ajouter une detail..."
                            {...register('detail', { required: true})}
                        />
                        {errors.detail && <span className={'text-shop-danger text-xs'}> Ce champ est requis.</span>}
                    </div>
                    <div className={'flex items-center gap-3 justify-between'}>
                        <div className="space-y-1 w-full">
                            <Label htmlFor="quantity" className="after:content-['*'] after:text-shop-danger">Quantité</Label>
                            <Input
                                id="quantity"
                                type={"number"}
                                placeholder="Saisir la quantité"
                                {...register('quantity',{ required: true})}
                            />
                            {errors.quantity && <span className={'text-shop-danger text-xs'}> Ce champ est requis.</span>}
                        </div>
                        <div className="space-y-1 w-full">
                            <Label htmlFor="price" className="after:content-['*'] after:text-shop-danger">Prix</Label>
                            <Input
                                id="price"
                                type={"integer"}
                                placeholder="Saisir le prix"
                                {...register('price',{ required: true})}
                            />
                            {errors.price && <span className={'text-shop-danger text-xs'}> Ce champ est requis.</span>}
                        </div>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1 w-full">
                            <Label htmlFor="color" className="after:content-['*'] after:text-shop-danger">Couleur</Label>
                            <Select
                                onValueChange={(value) => {
                                    setValue("color", value); // met à jour la valeur du formulaire
                                }}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Selectionner une couleur" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup className={'w-full'}>
                                        <SelectLabel>Couleur</SelectLabel>
                                        {colors.map((data,index) => (
                                            <SelectItem
                                                key ={index}
                                                value={data.name}
                                                {...register('color',{ required: true})}
                                                className={`flex w-full flex-col items-start gap-4`}
                                            >
                                                <div className={`flex gap-5 justify-between items-center`}>
                                                    <div> {data.name}</div>
                                                    <div
                                                        className={`py-2 border px-5 rounded-lg ${data.color}`}
                                                    ></div>
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-1 w-full">
                            <Label htmlFor="category">Catégorie</Label>
                            <Select
                                onValueChange={(value) => setValue('category',JSON.parse(value))}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select une catégorie" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectGroup>
                                            <SelectLabel>Catégories</SelectLabel>
                                            {category.map((data,index) => (
                                                <SelectItem
                                                    key ={index}
                                                    value={JSON.stringify(data)}
                                                >{data.name}</SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
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