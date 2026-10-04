// http://localhost:3000/api/products or localhost:3000/api/products
//--------------------------------------------------------------
/*
export async function GET(){
    const products = [
        {
            id:1,
            name:"Iphone"
        },
        {
            id:2,
            name:'Laptop'
        }
    ]
    return Response.json({
        message:'Products API is working !',
        products:products
    })
}
*/
/*
export async function POST(request){
    console.log(request);
    const data = await request.json();
    console.log(data);
    return Response.json({
        data:data
    })

}
*/

export async function GET(request){
    console.log(request);
    console.log(request.url);
    return Response.json({
        message:
    })
}
