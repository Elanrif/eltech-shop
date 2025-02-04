import {TypographyHeading} from "@/components/ui/typography-heading";
import {TypographyShopUi} from "@/components/ui/typograpy-shop-ui";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ChartCircle} from "@/components/chart/chart-circle";
import {ChartBarGraphic} from "@/components/chart/chart-bar";
import {OrdersDataTable} from "@/components/table/orders/data-table-orders";
import {Order, ordersColumns} from "@/components/table/orders/columns-orders";

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
            action: "View"
        },
        {
            id: "2",
            productName: "Jean slim bleu",
            customerName: "Sarah Abdou",
            orderId: 2002,
            amount: 49.99,
            status: "processing",
            action: "View"
        },
        {
            id: "3",
            productName: "Veste en cuir",
            customerName: "Youssouf Ahmed",
            orderId: 2003,
            amount: 129.99,
            status: "completed",
            action: "View"
        },
        {
            id: "4",
            productName: "Robe d'été fleurie",
            customerName: "Amina Said",
            orderId: 2004,
            amount: 39.99,
            status: "failed",
            action: "View"
        },
        {
            id: "5",
            productName: "Chaussures de sport",
            customerName: "Hassan Madi",
            orderId: 2005,
            amount: 79.99,
            status: "pending",
            action: "View"
        },
        {
            id: "6",
            productName: "Pull en laine",
            customerName: "Fatima Kassim",
            orderId: 2006,
            amount: 59.99,
            status: "completed",
            action: "View"
        },
        {
            id: "7",
            productName: "Short en denim",
            customerName: "Omar Youssouf",
            orderId: 2007,
            amount: 34.99,
            status: "processing",
            action: "View"
        },
        {
            id: "8",
            productName: "Chemise en lin",
            customerName: "Julie Morel",
            orderId: 2008,
            amount: 45.99,
            status: "pending",
            action: "View"
        },
        {
            id: "9",
            productName: "Pantalon chino",
            customerName: "Nicolas Bernard",
            orderId: 2009,
            amount: 54.99,
            status: "completed",
            action: "View"
        },
        {
            id: "10",
            productName: "Sweat à capuche",
            customerName: "Sophie Lambert",
            orderId: 2010,
            amount: 44.99,
            status: "pending",
            action: "View"
        },
        {
            id: "11",
            productName: "Manteau en laine",
            customerName: "Alexandre Petit",
            orderId: 2011,
            amount: 149.99,
            status: "failed",
            action: "View"
        },
        {
            id: "12",
            productName: "Polo classique",
            customerName: "Julie Moreau",
            orderId: 2012,
            amount: 29.99,
            status: "completed",
            action: "View"
        },
        {
            id: "13",
            productName: "Doudoune légère",
            customerName: "Mehdi Khan",
            orderId: 2013,
            amount: 99.99,
            status: "pending",
            action: "View"
        },
        {
            id: "14",
            productName: "Jogging en coton",
            customerName: "Laura Dubois",
            orderId: 2014,
            amount: 39.99,
            status: "failed",
            action: "View"
        },
        {
            id: "15",
            productName: "Pyjama en satin",
            customerName: "Pierre Girard",
            orderId: 2015,
            amount: 49.99,
            status: "completed",
            action: "View"
        },
        {
            id: "16",
            productName: "Tunique légère",
            customerName: "Sarah Benoit",
            orderId: 2016,
            amount: 34.99,
            status: "pending",
            action: "View"
        },
        {
            id: "17",
            productName: "Gilet sans manches",
            customerName: "Karim El Amrani",
            orderId: 2017,
            amount: 59.99,
            status: "failed",
            action: "View"
        },
        {
            id: "18",
            productName: "Blazer élégant",
            customerName: "Camille Martin",
            orderId: 2018,
            amount: 79.99,
            status: "processing",
            action: "View"
        },
        {
            id: "19",
            productName: "Débardeur en coton",
            customerName: "Thomas Leroy",
            orderId: 2019,
            amount: 19.99,
            status: "pending",
            action: "View"
        },
        {
            id: "20",
            productName: "Robe de soirée",
            customerName: "Amina Said",
            orderId: 2020,
            amount: 89.99,
            status: "completed",
            action: "View"
        }
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
            <OrdersDataTable columns={ordersColumns} data={data} />
        </div>
    </div>
  )
}
