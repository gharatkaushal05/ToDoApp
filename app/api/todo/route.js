import connectMongoDB from "@/libs/mongodb";
import Todo from "@/models/todo"
import { NextResponse } from "next/server";

export async function POST(request){
    const {title, description} = await request.json();
    await connectMongoDB();
    await Todo.create({title, description});
    return NextResponse.json({message: "Topic Created"}, {status: 201})


}