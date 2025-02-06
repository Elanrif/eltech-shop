"use client"
import {ArrowUpDown, FilePenLine, MoreHorizontal, Trash} from "lucide-react"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import {OrdersDataTableColumnHeader} from "@/components/table/data-table-column-header";
import {Category} from "@/lib/category/models/category.model";
import dayjs from "dayjs";
import {deleteCategory} from "@/lib/category/services/category.client.service";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";
import {DialogFormCategory} from "@/components/dialog/forms/category/dialog-form-category";

export const categoriesColumns: ColumnDef<Category>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'id',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    ID
                    <ArrowUpDown className="h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {

            return (
                <div className={'text-shop-muted ml-3'}>
                    {row.getValue("id")}
                </div>
            )
        },
        enableSorting: true,
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <OrdersDataTableColumnHeader column={column} title="Nom" />
        ),
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "createdAt",
        header: ({ column }) => (
            <OrdersDataTableColumnHeader column={column} title="Crée le" />
        ),
        cell: ({ row }) => {
            const date = row.getValue("createdAt") as Date
            const formattedDate = dayjs(date).locale("fr").format("DD MMMM YYYY HH:mm");
            return <div className="center font-medium">{formattedDate}</div>
        },
    },
    {
        accessorKey: "updatedAt",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Modifié le
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({row}) => {
            const date = row.getValue("updatedAt") as Date
            const formattedDate = dayjs(date).locale("fr").format("DD MMMM YYYY HH:mm");
            return <div className="center font-medium">{formattedDate}</div>
        },
    },
        {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            //const router = useRouter()
            const category = row.original
            const handleDelete = (id: number) => {
                const response = deleteCategory(id);
                console.log(response);
                //router.refresh();
                /*toast.success('successfully deleted!', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });*/
            }

            const handleUpdate = (category: Category) => {
                console.log(category);
            }
            return (
                <>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem className={'text-shop-muted'}>
                                ID : {category.id}
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={()=> handleUpdate(category)}
                            >
                                <FilePenLine/>
                                <span>Modifier</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className={'text-shop-danger'}
                                onClick={()=> handleDelete(category.id as number)}
                            ><Trash/> <span>Supprimer</span></DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className={'text-shop-muted'}>View category details</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DialogFormCategory category={category}/>
                </>
            )
        },
    },
]
