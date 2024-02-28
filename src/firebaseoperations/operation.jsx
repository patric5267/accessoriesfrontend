import { db } from "../firebase";
import {addDoc, getDocs, collection, doc, getDoc, deleteDoc} from 'firebase/firestore'
const cartcollection = collection(db , "cart")

// export const addcartitem = async(cartitem)=>{
//     try {
//     //  const cart = doc(db , "cart" , "zgDnhDOwYtuNSivkapmX")   
//     //  const cartitem = await deleteDoc(cart)
//     //  if(cartitem){
//     //     console.log("success");
//     //  }   
//     //  const data = await getDocs(cartcollection)
//     //  const newarr = data.docs.map(function(item){
//     //     return {
//     //         ...item.data(), id:item.id
//     //     }
//     //  })
//     //  console.log(newarr);

//     //  await addDoc(cartcollection, cartitem)


//     // const cart = doc(db , "cart" , "nVPZkmlTKlCpy72fE8Nx")   
//     //  const cartitem = await getDoc(cart)
//     //  console.log(cartitem.data());
//     } catch (error) {
//           console.log(error);
//     }
// }

// // const str = "hii i am learning react"
// // let finalarr = []
// // let arr = str.split(" ")

// // arr.forEach((word)=>{
// //    const wordarr = Array.from(word)
// //    if(wordarr.length===1){
// //       finalarr.push(wordarr[0].toUpperCase())
// //    }
// //    else{
// //      const[a,...b]= wordarr
// //      b.unshift(a.toUpperCase())
// //      finalarr.push(b.join(""))
// //    }
// // })

// // console.log(finalarr.join(" "));