import sql from "@/app/api/utils/sql";

export async function GET() {
  try {
    const result = await sql`SELECT 'Database connected!' as message, NOW() as time`;
    return Response.json({ 
      success: true, 
      data: result[0],
      tableExists: true 
    });
  } catch (error) {
    return Response.json({ 
      success: false, 
      error: error.message,
      hint: "Check if DATABASE_URL is set in your environment" 
    }, { status: 500 });
  }
}