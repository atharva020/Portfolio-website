import { NextResponse } from "next/server";

/** Yearly + lifetime contribution counts (same metric as GitHub heatmap). */
export async function GET() {
  try {
    const res = await fetch(
      "https://github-contributions.vercel.app/api/v1/atharva020",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
      return NextResponse.json({
        totalAllTime: null,
        thisYear: null,
      });
    }
    const data = (await res.json()) as {
      years: { year: string; total: number }[];
    };
    const years = data.years ?? [];
    const totalAllTime = years.reduce((acc, y) => acc + y.total, 0);
    const cy = String(new Date().getFullYear());
    const thisYear = years.find((y) => y.year === cy)?.total ?? null;

    return NextResponse.json({
      totalAllTime,
      thisYear,
    });
  } catch {
    return NextResponse.json({
      totalAllTime: null,
      thisYear: null,
    });
  }
}
