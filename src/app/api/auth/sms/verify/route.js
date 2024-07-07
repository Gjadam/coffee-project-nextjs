import connectToDB from "@/configs/db";
import OtpModel from "@/models/Otp";
import UserModel from "@/models/User"
import { generateAccessToken } from "@/utils/auth";
import { roles } from "@/utils/constants";

export async function POST(req) {
  connectToDB();
  const body = await req.json();
  const { phone, code } = body;
  const email = `${phone}@gmail.com`

  const otp = await OtpModel.findOne({ phone, code });

  if (otp) {
    const date = new Date();
    const now = date.getTime();

    if (otp.expTime > now) {
      const accessToken = generateAccessToken({ email })

      const isUserExist = await UserModel.findOne({
        $or: [{ phone }]
      })


      if (isUserExist) {
        return Response.json(
          { message: "Code is correct :))" },
          {
            status: 200,
            headers: { 'Set-Cookie': `token=${accessToken};path=/;httpOnly=true` }
          }
        );
      }
      const users = await UserModel.find({})

      await UserModel.create({
        email,
        phone,
        role: users.length > 0 ? roles.USER : roles.ADMIN
      })


    } else {
      return Response.json({ message: "Code is expired :))" }, { status: 410 });
    }
  } else {
    return Response.json(
      { message: "Code is not correct !!" },
      { status: 409 }
    );
  }
}
