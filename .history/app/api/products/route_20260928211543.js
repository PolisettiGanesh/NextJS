// http://loclahost:3000/api/products or  http://localhost:3000/api/products
export async function GET(){
    return Response.json({
        message:'Products API is working !',
        products:[
            {
                id:1,
                name:"Iphone"
            },
            {
                id:2,
                name:'Laptop'
            }
        ]
    })
}
