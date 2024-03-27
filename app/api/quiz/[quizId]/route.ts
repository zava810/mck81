import { quizzes } from "@/lib/quiz";
import { notFound } from "next/navigation";

export async function GET(
    request: Request,
    { params }: { params: { quizId: string } }
) {
    const quiz = quizzes.find(q => q.id.toString() === params.quizId) || notFound()
    return Response.json({ quiz })
}

export async function POST(
    request: Request,
    { params }: { params: { quizId: string } }
) {
    const quiz = quizzes.find(q => q.id.toString() === params.quizId) || notFound();

    try {
        const data = await request.json();
        const answers = data.answers;

        if (!Object.entries(answers).every(([key, value]) => typeof key === 'string' && typeof value === 'string')) {
            throw new Error('Invalid answers structure. Expected keys to be strings and values to be strings.');
        }

        const correctedAnswers: Record<string, boolean> = {};

        quiz.questions.forEach((question) => {
            correctedAnswers[question.guid] = answers[question.guid] === question.validAnswer;
        });

        return Response.json(correctedAnswers);
    } catch (error) {
        return Response.json({ message: "Error" }, { status: 400 });
    }
}