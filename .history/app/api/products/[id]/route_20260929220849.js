/*
export async function GET(request,context){
    console.log(context);
    console.log(context.params);
    const {id} = await context.params;

    return Response.json({
        id:id
    })
}
*/
export async function GET(request, { params }) {
  const { id } = await params;
  return Response.json({
    id: id,
  });
}

// GET all
export async function GET() {}

// GET with query params
export async function GET(request) {}

// GET one by dynamic ID
export async function GET(request, { params }) {}

// POST
export async function POST(request) {}

// POST under dynamic route
export async function POST(request, { params }) {}

// PUT
export async function PUT(request, { params }) {}

// PATCH
export async function PATCH(request, { params }) {}

// DELETE
export async function DELETE(request, { params }) {}
