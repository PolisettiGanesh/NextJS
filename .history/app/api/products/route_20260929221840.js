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


//
## 🚀 Day 52 | 90-Day Full Stack Development Journey

Today was another **deep understanding + practical revision day**! ⚛️🔥

### ⚡ Next.js API — Deeper Understanding

Today I went deeper into Next.js API routes and finally got a clear understanding of the **two parameters available in the route handler**:

* `request`
* `context`

I understood what each one is used for and how they help while handling API requests.

### 🧠 What I Practiced

* 🌐 GET request
* 📤 Understanding the `request` parameter
* 🧩 Understanding the `context` parameter
* 📄 Working with API route logic
* 📝 Made proper notes in my own style
* 💻 Practiced GET-request-related tasks practically

Making my own notes while practicing helped me connect the concepts much better instead of just memorizing the syntax.

### 🔄 React Router DOM — Practical Revision

Alongside Next.js, I also revised **React Router DOM** from a practical perspective.

Instead of only revising definitions, I focused on:

**How do I actually implement routing inside a project?**

Revised how routing can be structured and used while building a real application.

### 🎯 Tomorrow's Goal

I still have a few API-related tasks remaining, so tomorrow I want to dedicate another day to **completing and practicing all of them properly**.

The goal is not just to finish the examples, but to make sure I can implement the concepts myself. 💪

**Understand → Take Notes → Implement → Debug → Practice → Revise** 🔄

Another productive day in the journey! 🚀

#100DaysOfCode #Day52 #NextJS #ReactJS #APIs #ReactRouter #JavaScript #WebDevelopment #Postman #FrontendDevelopment #BackendDevelopment #FullStackDevelopment #LearningInPublic #DeveloperJourney

