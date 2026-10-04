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
/*
export async function GET(request){
    console.log(request);
    console.log(request.url);
    const data = {
        id:1,
        name:'ViVo',
        stock:25,
        price:25000
    }
    return Response.json({
        message:'All products successfully fetched !',
        data:data
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
