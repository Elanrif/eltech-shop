"use client"
import {ArrowUpDown} from "lucide-react"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {OrdersDataTableColumnHeader} from "@/components/table/data-table-column-header";
import {Category} from "@/lib/category/models/category.model";
import dayjs from "dayjs";
import {DialogFormCategory} from "@/components/dialog/forms/dialog-form-category";

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
        cell: ({ row }) => {
            const detail = row.getValue("description")?.toString() || "Aucune description";
            return (
                <div className="truncate" title={detail}>
                    {detail.length > 50 ? `${detail.substring(0, 50)}...` : detail}
                </div>
            );
        },
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
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const category = row.original
            return (
                    <DialogFormCategory category={category}/>
            )
        },
    },
]
