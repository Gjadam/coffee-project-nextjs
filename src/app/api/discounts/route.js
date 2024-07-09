import connectToDB from "@/configs/db";
import DiscountModel from "@/models/Discount";

export async function POST(req) {
    try {
        connectToDB();
        const body = await req.json();
        const { code, percent, maxUse } = body;

        if(!code || !percent || !maxUse) {
            return Response.json(
                {message: "Code or percent or maxUse not found !"},
                {status: 404}
            )
        }

        await DiscountModel.create({
            code,
            percent,
            maxUse,
        });

        return Response.json(
            { message: "Discount code created successfully :))" },
            { status: 201 }
        );
    } catch (err) {
        return Response.json({ message: err }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        connectToDB();
        const body = await req.json();
        const { id } = body;

        await DiscountModel.findOneAndDelete({ _id: id })

        return Response.json({ message: "Discount deleted successfully :))" },);
    } catch (err) {
        return Response.json({ message: err }, { status: 500 });
    }
}