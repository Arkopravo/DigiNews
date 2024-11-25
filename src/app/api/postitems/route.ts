import dbCConnect from "../../../../config/db";
import PostItem from "../../../../models/PostItem";


dbCConnect();

export async function GET() {
    const postItems = await PostItem.find().select('-__v');
    return Response.json(postItems);
}

export async function POST(request: Request) {
    const postItem = await request.json();

    try{
        const savedItem = await new PostItem({...postItem}).save();
        return new Response(JSON.stringify(savedItem), {
            headers: {
                'Content-type' : 'application/json',
            },
            status: 201,
        })
    } catch(error) {
        console.error(error);
        return new Response(JSON.stringify({
            message: "Server Error"
        }),
        {status: 500})
    }
} 