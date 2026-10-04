export async function GET(){
    return Response.json({
        message:'Products API is working !',
        products:[
            {
                id:1
            }
        ]
    })
}
