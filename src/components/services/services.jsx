import axios from "axios"


const domain = "http://127.0.0.1:8000"

export async function getCatData(access_token, setAuth, size) {
    try {
        const res = await axios.get(
            domain + `/categories/list/${size !== undefined ? `?size=${size}` : ""}`,
            {
                headers:
                    { "Authorization": `Bearer ${access_token}` }
            }
        )
        return res.data
    } catch (err) {
        console.log(err)
        if (setAuth !== undefined) {
            setAuth(false)
        }
    }
}


export async function getResData(access_token, setAuth, size) {
    try {
        const res = await axios.get(
            domain + `/restaurants/list/${size !== undefined ? `?size=${size}` : ""}`,
            {
                headers:
                    { "Authorization": `Bearer ${access_token}` }
            }
        )
        if (size){
            return (res.data.results)
        }
        return (res.data)
    } catch (err) {
        console.log(err)
        if (setAuth !== undefined) {
            setAuth(false)
        }
    }
}


export async function getFoodData(access_token, setAuth) {
    try {
        const res = await axios.get(
            domain + "/foods/list/?size=3",
            {
                headers:
                    { "Authorization": `Bearer ${access_token}` }
            }
        )
        return (res.data.results)
    } catch (err) {
        setAuth(false)
        console.log(err)
    }
}


export async function getResDetail(access_token, id) {
    try {
        const res = await axios.get(
            domain + `/restaurant/detail/${id}`,
            {
                headers:
                    { "Authorization": `Bearer ${access_token}` }
            }
        )
        return (res.data.results)
    } catch (err) {
        console.log(err)
    }
}


export async function getProfileData(access_token) {
    try {
        const res = await axios.get(
            domain + "/users/settings/personal-info/",
            {
                headers:
                    { "Authorization": `Bearer ${access_token}` }
            }
        )
        return (res.data)
    } catch (err) {
        console.log(err)
    }
}


export async function updateProfileData(access_token, data) {
    try {
        const res = await axios.put(
            domain + "/users/settings/personal-info/",
            data,
            {
                headers:
                    { "Authorization": `Bearer ${access_token}` }
            },
        )
        return (res.data)
    } catch (err) {
        console.log(err)
    }
}


export async function getAddress(access_token) {
    try {
        const res = await axios.get(
            domain + "/users/settings/address-list/",
            {
                headers:
                    { "Authorization": `Bearer ${access_token}` }
            }
        )
        return (res.data)
    } catch (err) {
        console.log(err)
    }
}


export async function saveAddress(access_token, data) {
    try {
        const res = await axios.post(
            domain + "/users/settings/address-list/",
            data,
            {
                headers:
                    { "Authorization": `Bearer ${access_token}` }
            },
        )
        console.log(res)
        return (res.data)
    } catch (err) {
        console.log(err)
    }
}