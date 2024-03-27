import { quizzes } from "@/lib/quiz";

export async function GET() {
    return Response.json({ quizzes })
}