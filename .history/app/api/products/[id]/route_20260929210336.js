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
export async function GET(request,context){
    console.log(context);
    console.log(context.params);
    const {id} = await context.params;

    return Response.json({
        id:id
    })
}



