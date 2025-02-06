"use client"
import {MoreHorizontal} from "lucide-react"
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
import {Product} from "@/lib/product/models/product.model";
import {Switch} from "@/components/ui/switch";
import {SwitchProduct} from "@/components/ui/switch-product";
import dayjs from "dayjs";
import 'dayjs/locale/fr'

export const productsColumns: ColumnDef<Product>[] = [
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
        accessorKey: "name",
        header: ({ column }) => (
            <OrdersDataTableColumnHeader column={column} title="Produit" />
        ),
    },
    {
        accessorKey: "description",
        header: "Description",
        cell: ({ row }) => {
            const description = row.getValue("description")?.toString() || "Aucune description";
            return (
                <div className="truncate max-w-[200px]" title={description}>
                    {description.length > 10 ? `${description.substring(0, 10)}...` : description}
                </div>
            );
        },
    },
    {
        accessorKey: "detail",
        header: "Detail",
        cell: ({ row }) => {
            const detail = row.getValue("detail")?.toString() || "Aucune detail";
            return (
                <div className="truncate max-w-[200px]" title={detail}>
                    {detail.length > 15 ? `${detail.substring(0, 15)}...` : detail}
                </div>
            );
        },
    },
    {
        accessorKey: "is_new",
        header: "Nouveau",
        cell: ({ row }) => {
            const isNew = row.getValue("is_new")
            return (
                <div className="flex items-center gap-x-2 max-w-[200px]">
                    <SwitchProduct defaultChecked={!!isNew} className={'bg-shop-secondary'}/>
                    {isNew? <span className={'text-shop-secondary'}> nouveau </span>: <span className={'text-shop-muted line-through'}> nouveau</span>}
                </div>
            )
        },
    },
    {
        accessorKey: "in_stock",
        header: "Stock",
        cell: ({ row }) => {
            const inStock = row.getValue("in_stock")
            return (
                <div className="flex items-center gap-x-2 max-w-[200px]">
                    <Switch defaultChecked={!!inStock}/>
                    {inStock? <span className={'text-shop-secondary'}> en stock </span>: <span className={'text-shop-danger line-through'}> en rupture de stock</span>}
                </div>
            )
        },
    },
    {
        accessorKey: "color",
        header: "Couleur",
        cell: ({ row }) => {
            const color = row.getValue("color") as string
            return <div className={`center font-medium text-${color}-700`}> {color} </div>
        },
    },
    {
        accessorKey: "quantity",
        header: "Quantité",
    },
    {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("price"))
            const formatted = new Intl.NumberFormat("fr-FR", {
                style: "currency",
                currency: "EUR",
            }).format(amount)

            return <div className="center font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "createdAt",
        header: ({ column }) => (
            <OrdersDataTableColumnHeader column={column} title="Date création" />
        ),
        cell: ({ row }) => {
            const date = row.getValue("createdAt") as Date
            const formattedDate = dayjs(date).locale("fr").format("DD MMMM YYYY HH:mm");
            return <div className="center font-medium">{formattedDate}</div>
        },
    },
    {
        accessorKey: "updatedAt",
        header: ({ column }) => (
            <OrdersDataTableColumnHeader column={column} title="Date modification" />
        ),
        cell: ({ row }) => {
            const date = row.getValue("updatedAt") as Date
            const formattedDate = dayjs(date).locale("fr").format("DD MMMM YYYY HH:mm");
            return <div className="center font-medium">{formattedDate}</div>
        },
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const product = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(product.id.toString())}
                        >
                            consulter
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>modifier</DropdownMenuItem>
                        <DropdownMenuItem>supprimer</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
