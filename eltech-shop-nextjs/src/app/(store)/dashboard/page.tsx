import {TypographyHeading} from "@/components/ui/typography-heading";
import {TypographyShopUi} from "@/components/ui/typograpy-shop-ui";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ChartCircle} from "@/components/chart/chart-circle";
import {ChartBarGraphic} from "@/components/chart/chart-bar";
import {DataTable} from "@/components/table/data-table";
import {Order, ordersColumns} from "@/components/table/columns";

export type CardProps = {
    title: string;
    amount: string;
    description: string;
}
const dataCards : CardProps[] = [
    {
        title: 'Revenue total',
        amount: '50.150.2k €',
        description: 'Nouveau revenue depuis 360 jours'
    },
    {
        title: 'Produits vendues',
        amount: '2,40,120',
        description: 'Nouveau revenue depuis 360 jours'
    },
    {
        title: 'Commande terminé',
        amount: '1,40,530',
        description: 'Nouveau revenue depuis 360 jours'
    },
    {
        title: 'Commande annulé',
        amount: '50.349',
        description: 'Nouveau revenue depuis 360 jours'
    },
]

async function getData(): Promise<Order[]> {
    // Fetch data from your API here.
    return [
        {
            id: "1",
            productName: "T-shirt en coton",
            customerName: "Ali Mohamed",
            orderId: 2001,
            amount: 19.99,
            status: "pending",
            action: "View",
        },
        {
            id: "2",
            productName: "Jean slim bleu",
            customerName: "Sarah Abdou",
            orderId: 2002,
            amount: 49.99,
            status: "processing",
            action: "View",
        },
        {
            id: "3",
            productName: "Veste en cuir",
            customerName: "Youssouf Ahmed",
            orderId: 2003,
            amount: 129.99,
            status: "success",
            action: "View",
        },
        {
            id: "4",
            productName: "Robe d'été fleurie",
            customerName: "Amina Said",
            orderId: 2004,
            amount: 39.99,
            status: "failed",
            action: "View",
        },
        {
            id: "5",
            productName: "Chaussures de sport",
            customerName: "Hassan Madi",
            orderId: 2005,
            amount: 79.99,
            status: "pending",
            action: "View",
        },
    ];
}
export default async function Page() {
   const data = await getData()

    return (
    <div className={"flex flex-col gap-4"}>
       <TypographyHeading size={ "md"} fontWeight={"bold"}> Bienvenu !</TypographyHeading>
        <TypographyShopUi>Une vue detaillé sur le tableau de bord.</TypographyShopUi>
        <div className={"flex w-full items-center gap-3"}>
            {dataCards.map((subItem,index) => (
                <Card key={index} className={"flex p-5 flex-col gap-4"}>
                    <CardHeader>
                        <CardDescription>
                            {subItem.title}
                        </CardDescription>
                        <CardTitle>
                            {subItem.amount}
                        </CardTitle>
                    </CardHeader>
                    <CardDescription>
                        {subItem.description}
                    </CardDescription>
                </Card>
            ))}
        </div>
        <div className={"flex w-full justify-around items-center gap-3"}>
            <ChartBarGraphic/>
            <ChartCircle/>
        </div>
        <div className={"container mx-auto py-10"}>
            <DataTable columns={ordersColumns} data={data} />
        </div>
    </div>
  )
}
