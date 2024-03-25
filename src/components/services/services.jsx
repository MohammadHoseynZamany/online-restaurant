import axios from "axios"
import { useCookies } from 'react-cookie'




export async function getCatData(access_token, setAouth){
    try{
        const res = await axios.get(
            "http://127.0.0.1:8000/categories/list/?size=6",
            { headers:
              { "Authorization": `Bearer ${ access_token }`}
             }
        )
        return res.data
    } catch(err){
        setAouth(false)
        console.log(err)
    }
  }


  export async function getResData(access_token, setAouth) {
    try {
        const res = await axios.get(
            "http://127.0.0.1:8000/restaurants/list/?size=6",
            {
                headers:
                    { "Authorization": `Bearer ${access_token}` }
            }
        )
        return (res.data.results)
    } catch (err) {
        setAouth(false)
        console.log(err)
    }
}


export  async function getFoodData(access_token, setAouth) {
    try {
        const res = await axios.get(
            "http://127.0.0.1:8000/foods/list/?size=3",
            {
                headers:
                { "Authorization": `Bearer ${access_token}` }
            }
            )
        return (res.data.results)
    } catch (err) {
        setAouth(false)
        console.log(err)
    }
}


export async function getResDetail(access_token, id) {
  try {
      const res = await axios.get(
          `http://127.0.0.1:8000/restaurant/detail/${id}`,
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