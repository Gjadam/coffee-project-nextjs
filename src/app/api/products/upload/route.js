import { put } from '@vercel/blob';

export async function POST(req) {

    try {
        const { searchParams } = new URL(req.url);
        const filename = searchParams.get('filename');
      
        // ⚠️ The below code is for App Router Route Handlers only
        const blob = await put(filename, req.body, {
          access: 'public',
        });
      
        // Here's the code for Pages API Routes:
        // const blob = await put(filename, request, {
        //   access: 'public',
        // });
      
        return Response.json(
            {message: "Image uploaded successfully.", blob},
            {status: 201}
        )
    } catch(err) {
        return Response.json(
            {message: err},
            {status: 500}
        )
    }

}

// The next lines are required for Pages API Routes only
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };