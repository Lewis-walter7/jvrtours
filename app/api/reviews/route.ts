import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

// Sample images for reviews
const sampleImages = [
  '/wolf.png',
  'anime.png',
  'car.png',
  'car2.png',
  'phone.png',
];

function getRandomImage() {
  return sampleImages[Math.floor(Math.random() * sampleImages.length)];
}

// GET
export async function GET() {
  try {
    const allReviews = await prisma.review.findMany({
      orderBy: { createdAt: 'desc' },
    });


    const shuffled = allReviews.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 7)

    const enhancedReviews = selected.map(review => ({
      ...review,
      image: getRandomImage()
    }));;
    return NextResponse.json(enhancedReviews);
  } catch (error) {
    console.error('GET /api/reviews error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// POST 
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { reviewText, name, country } = body;

    if (
      !reviewText || typeof reviewText !== 'string' ||
      !name || typeof name !== 'string' ||
      typeof country !== 'string'
    ) {
      return new NextResponse('Invalid input', { status: 400 });
    }

    const newReview = await prisma.review.create({
      data: {
        reviewText,
        name,
        country,
      },
    });

    return NextResponse.json(newReview, { status: 201 });
  } catch (error) {
    console.error('POST /api/reviews error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
