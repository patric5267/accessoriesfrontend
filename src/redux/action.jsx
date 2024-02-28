export const addcartitem = (cartitem) => async (dispatch) => {
    try {
        // console.log(cartitem);
        const data = await fetch("https://thoughtful-hem-fox.cyclic.app/createcart", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(cartitem)
        })
        if (data.ok) {
            const res = await data.json()
            dispatch({
                type: "addcartitemsuccess",
                payload: res
            })
        }

    } catch (error) {
        console.log(error);
    }
}


export const getcartitembyemailid = (email) => async (dispatch) => {
    try {
        dispatch({
            type: "getcartitembyemailidpending"
        })
        const data = await fetch(`https://thoughtful-hem-fox.cyclic.app/getcartitembyemailid/${email}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            }
        })
        if (data.ok) {
            const res = await data.json()
            dispatch({
                type: "getcartitembyemailidsuccess",
                payload: res
            })
        }

    } catch (error) {
        console.log(error);
    }
}

export const deletecart = (id) => async () => {
    try {
        await fetch(`https://thoughtful-hem-fox.cyclic.app/deletecart/${id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            }
        })


    } catch (error) {
        console.log(error);
    }
}

export const updatecart = (cartdata) => async () => {
    try {
        await fetch(`https://thoughtful-hem-fox.cyclic.app/updatecart/${cartdata.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify(cartdata)
        })


    } catch (error) {
        console.log(error);
    }
}
