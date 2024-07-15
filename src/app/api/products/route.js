import connectToDB from "@/configs/db";
import ProductModel from '@/models/Product'
import CommentModel from '@/models/Comment'
import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(req) {
    try {
      connectToDB();
      const formData = await req.formData();
      const name = formData.get("name");
      const price = formData.get("price");
      const shortDescription = formData.get("shortDescription");
      const longDescription = formData.get("longDescription");
      const weight = formData.get("weight");
      const suitableFor = formData.get("suitableFor");
      const smell = formData.get("smell");
      const tags = formData.get("tags");
      const img = formData.get("img");
  
      if(!name || !price || !shortDescription || !longDescription || !weight || !suitableFor || !smell || !tags || !img) {
        return Response.json(
            {message: "Name or price or shortDescription or longDescription or weight or suitableFor or smell or tags or img not found !"},
            {status: 404}
        )
    }

      const buffer = Buffer.from(await img.arrayBuffer());
      const filename = Date.now() + img.name;
      const imgPath = path.join(process.cwd(), "public/uploads/" + filename);
  
      await writeFile(imgPath, buffer);
  
      const product = await ProductModel.create({
        name,
        price,
        shortDescription,
        longDescription,
        weight,
        suitableFor,
        smell,
        tags,
        img: `http://localhost:3000/uploads/${filename}`,
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

// Image Uploader
export async function PUT(req) {
    const formData = await req.formData()
    const img = formData.get("img")

    if (!img) {
        return Response.json(
            { message: "Product has not image !" },
            { status: 400 }
        )
    }

    try {
        const buffer = Buffer.from(await img.arrayBuffer())
        const filename = Date.now() + img.name

        await writeFile(path.join(process.cwd(), "public/uploads/" + filename), buffer)

        return Response.json(
            { message: "File uploaded successfully." },
            { status: 201 }
        )

    } catch (err) {
        return Response.json(
            { message: err.message },
            { status: 500 }
        )
    }
}