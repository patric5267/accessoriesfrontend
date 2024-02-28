export const getalldata = async () => {
  try {
    const arr = ["smartphones", "laptops", "fragrances", "skincare", "furniture"]
    let arr2 = []
    arr.forEach(async (item) => {
      const data = await fetch(`https://dummyjson.com/products/category/${item}?limit=4&skip=1`)
      const res = await data.json()
      res.products.forEach((i) => {
        arr2.push(i)
      })
    })
    let p = new Promise((resolve) => {
      setTimeout(() => {
        resolve(arr2)
      }, 1000);
    })
    return p
  } catch (error) {
    console.log(error);
  }
}


export const getproductbyid = async (id) => {
  try {
    const data = await fetch(`https://dummyjson.com/products/${id}`)
    if (data.ok) {
      const res = await data.json()
      return res
    }
  } catch (error) {
    console.log(error);
  }
}

export const getallproducts = async () => {
  try {
    const data = await fetch("https://dummyjson.com/products/")
    if (data.ok) {
      const res = await data.json()
      return res
    }
  } catch (error) {
    console.log(error);
  }
}

export const getallproductsbycategory = async (categoryname) => {
  try {
    const data = await fetch(`https://dummyjson.com/products/category/${categoryname}`)
    if (data.ok) {
      const res = await data.json()
      return res
    }
  } catch (error) {
    console.log(error);
  }
}

export const getlocationofuser = () => {
  let location = null
  navigator.geolocation.getCurrentPosition(async (data) => {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${data.coords.latitude}%2C%20${data.coords.longitude}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b27e18fb5bmsh653948a61eaedcap122759jsncc5aa8dcbbd9',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      location= result.location
    } catch (error) {
      console.error(error);
    }
  })
  let p = new Promise((resolve)=>{
    setTimeout(() => {
        resolve(location)
    }, 1000);
  })
  return p
}

