import {
  generateAccessToken,
  generateRefreshToken,
  validateEmail,
  validatePassword,
  verifyPassword,
} from "@/utils/auth";
import UserModel from "@/models/User";
import connectToDB from "@/configs/db";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return Response.json(
        { message: "Email or password not found !" },
        { status: 404 }
      )
    }

    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);

    if (!isValidEmail || !isValidPassword) {
      return Response.json(
        { message: "email or password is invalid" },
        { status: 419 }
      );
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return Response.json({ message: "User not found" }, { status: 422 });
    }

    const isCorrectPasswordWithHash = verifyPassword(password, user.password);

    if (!isCorrectPasswordWithHash) {
      return Response.json(
        { message: "Email or password is not correct" },
        { status: 401 }
      );
    }

    const accessToken = generateAccessToken({ email });
    const refreshToken = generateRefreshToken({ email });

    await UserModel.findOneAndUpdate(
      { email },
      {
        $set: {
          refreshToken,
        },
      }
    );

    const headers = new Headers()
    headers.append("Set-Cookie", `token=${accessToken};path=/;httpOnly=true;`,)
    headers.append("refresh-token", `token=${refreshToken};path=/;httpOnly=true;`,)

    return Response.json(
      { message: "User logged in successfully :))" },
      {
        status: 200,
        headers,
      }
    );
  } catch (err) {
    return Response.json(
      { message: err },
      {
        status: 500,
      }
    );
  }
}
