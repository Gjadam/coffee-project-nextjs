import connectToDB from "@/configs/db";
import ProductModel from '@/models/Product'
import CommentModel from '@/models/Comment'

export async function POST(req) {
    try {
        connectToDB();
        const body = await req.json()
        const { name, price, shortDescription, longDescription, weight, suitableFor, smell, tags, img } = body

        if (!name || !price || !shortDescription || !longDescription || !weight || !suitableFor || !smell || !tags || !img) {
            return Response.json(
                { message: "Name or price or shortDescription or longDescription or weight or suitableFor or smell or tags or img not found !" },
                { status: 404 }
            )
        }

        const product = await ProductModel.create({
            name,
            price,
            shortDescription,
            longDescription,
            weight,
            suitableFor,
            smell,
            tags,
            img
        });

        return Response.json(
            { message: "Product created successfully :))", data: product },
            { status: 201 }
        );
    } catch (err) {
        return Response.json({ message: err }, { status: 500 });
    }
}


export async function GET() {
    connectToDB()
    const products = await ProductModel.find({}, '-__v').populate('comments')
    return Response.json(products)
}

export async function DELETE(req) {
    try {
        connectToDB()
        const body = await req.json()
        const { id } = body

        await ProductModel.findOneAndDelete({ _id: id })
        await CommentModel.findOneAndDelete({ productID: id })

        return Response.json({ message: "Product deleted successfully." })

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}
