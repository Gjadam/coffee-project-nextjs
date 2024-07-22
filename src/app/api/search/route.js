import connectToDB from "@/configs/db"
import ProductModel from "@/models/Product"

export async function GET(req) {
    try {
        connectToDB()
        const url = new URL(req.url);
        const queryParams = Object.fromEntries(url.searchParams).q;

        if (!queryParams) {
            return Response.json(
                {message: "Search word not found !"},
                {status: 400}
            )  
        }  
        const products = await ProductModel.find({ name: {$regex:queryParams} })
 
        return Response.json(products)
    
    } catch(err) {
        return Response.json(
            {message: err},
            {status: 500}
        )
    }
}