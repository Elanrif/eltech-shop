import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {Trash} from "lucide-react";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";
import {deleteCategory} from "@/lib/category/services/category.client.service";
import {Order} from "@/lib/order/models/order.model";
import {Product} from "@/lib/product/models/product.model";
import {User} from "@/lib/user/models/user.model";
import {Category} from "@/lib/category/models/category.model";
import {deleteProduct} from "@/lib/product/services/product.client.service";

 type DataProps = {
    data: Order | Product | Category | User
    type: "order" | "category" | "product" | "user"
}

export function AlertDialogDelete({type, data}: DataProps) {
    const router = useRouter();

    const handleDelete = async () => {
        let response;
        switch (type) {
            case "order":
                response = await deleteCategory(data.id as number);
                break;
            case "product":
                response = await deleteProduct(data.id as number);
                break;
            case "category":
                response = await deleteCategory(data.id as number);
                break;
            case "user":
                //response = await deleteUserAction(data);
            default:
                response = { message : "AlertDialogDelete ne contient pas de value" };
                break;
        }
        router.refresh()
        if (response?.message) {
            toast.error(`Impossible de supprimer la donnée`, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });

        } else {
            toast.success(`${type} a été supprimé avec succès !`, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Trash
                    className={'text-shop-danger hover:cursor-pointer hover: text-shop-danger/70 duration-400'}
                    size={16}
                />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Êtes vous vraiment sûr?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Cette action est irrévocable. Ca va supprimer définitivement la catégorie de la base de donnée.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Annuler</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} >Confirmer</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
