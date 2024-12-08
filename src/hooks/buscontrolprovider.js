import { useContext, createContext, useState, useEffect } from "react";
import api from '../api/bluebus';
import { data, useNavigate } from "react-router-dom";
import Createbus from "../routes/admin/Createbus";

const BusList = createContext()


export default function BusProvider({ children }) {
  let [userDetail, setuserDetail] = useState({})
  let [userLogin, setuserLogin] = useState(false)
  const Navigate = useNavigate()
  const [userList,setuserList]=useState([])
  const [searchresult, setsearchresult] = useState([])
  const [ticket, setTicket]=useState([])
  const [newbus,setnewbus]=useState({})
  const [editbus,seteditbus]=useState({})
  const [bus, setBus]=useState('');

const signup = async (user) => {
  try {
    console.log(user)
    const response = await api.post('/register', user)
    console.log(response.data.message)
    if (response.data.permisson !== true) {
      alert(response.data.message)
    }
    else {
      alert(response.data.message)
      Navigate('/login')

    }
  } catch (err) {
    if (err.response) {
      console.log(err.response.data)
      console.log(err.response.status)
      console.log(err.response.headers)
    } else {
      console.log(`ERROR:${err.message}`)
    }
  }
}

const finduser = async () => {
  try {
    localStorage.getItem('userdetail')
    setuserLogin(true)
  } catch (err) {
    console.log(err)
  }
}
const saveuser = async (user) => {
  try {
    localStorage.setItem('userdetail', JSON.stringify(user))
    console.log(user)
    console.log("save user")
    setuserDetail(user)
  } catch (err) {
    console.log(err)
  }
}
const savetoken = async (token) => {
  try {
    localStorage.setItem('usertoken', JSON.stringify(token))
    console.log("save token ")
  } catch (err) {
    console.log(err)
  }
}

const CreateBus=async(data)=>{
    try {
      const token = localStorage.getItem('usertoken')
      if (token === null) {
        alert("undefined")
      } else {
        const response = await api.post('/auth/admin/bus/create-bus', data, {
          headers: {
            Authorization: `Bearer  ${token}`
          }
        })
      alert('created bus')
      }
    } catch (err){
      console.log(err)
    }
}

const login = async (userData) => {
  try {
    const response = await api.post('/auth/user/login', userData)
    // console.log(response.data)
    savetoken(response.data.token)
    saveuser(userData)
    alert("successfully login")
    console.log(userDetail)
    finduser()
    console.log(userLogin)
    Navigate('/home')
  } catch (err) {
    console.log("hjmgjmgmj")
    setuserLogin(false)
    if (err.response) {
      console.log(err.response.data)
      console.log(err.response.status)
      console.log(err.response.headers)
    } else {
      console.log(`ERROR:${err.message}`)
    }

  }
}


const BusSearch = async (busData) => {
  try {
    const token = localStorage.getItem('usertoken')
    if (token === null) {
      alert("undefined")
    } else {
      const response = await api.post('/api/busdetails', busData, {
        headers: {
          Authorization: `Bearer  ${token}`
        }
      })
      setsearchresult(response.data)
      console.log(response.data)
      Navigate('/search')
    }

  } catch (err) {
    console.log(err)
    alert("Not found")
  }
}

const handlebuslist = (id) => {
  try {
    const filter = searchresult.filter((par) => {
      if (par._id === id) return par
    })
    return filter
  } catch (error) {
    console.log(error)
  }
}
const BookTicket=async(data)=>{
  try {
    const token = localStorage.getItem('usertoken')
    if (token === null) {
      alert("undefined")
    } else {
      const response = await api.post('/auth/user/bus/book-ticket', data, {
        headers: {
          Authorization: `Bearer  ${token}`
        }
      })
    }
  } catch (err) {
    console.log(err)
  }
}

const getuser=async()=>{
    try {
      const token = localStorage.getItem('usertoken')
      const response= await api.get('/auth/admin/view/user',{
        headers: {
          Authorization: `Bearer  ${token}`
        }
      })
      setuserList(response.data)
    } catch (err) {
      if(err.response){
        console.log(err.response.message)
      }
      
      console.log(err)
    }
}

const getTickets=async()=>{
  try {
    const token = localStorage.getItem('usertoken')
    const user=localStorage.getItem('userdetails')
    const response= await api.get('/user/bus/book-ticket',user,{
      headers: {
        Authorization: `Bearer  ${token}`
      }
    })
    setTicket(response.data)
  } catch (err) {
    if(err.response){
      console.log(err.response.message)
    }
    
    console.log(err)
  }
}
const logout=()=>{
  try {
    localStorage.removeItem("userdetail")
    localStorage.removeItem("usertoken")
    finduser()
    alert('logout')
    setuserLogin(false)
    Navigate('')
  } catch (err) {
    console.log(err)
  }
}

const deletebus=(id)=>{
  try {
    const response=api.delete(`/admin/bus/delete/${id}`)
  } catch (err) {
    console.log(err)
  }
}


const getBus=async()=>{
  try {
    const token=localStorage.getItem('usertoken')
    const response= await api.get('/auth/admin/view/bus-details',{
      headers: {
        Authorization: `Bearer  ${token}`
      }
    })
    setBus(response.data)
    console.log(response.data)
  } catch (err) {
    if(err.response){
      console.log(err.response.message)
    }
  }
}

const Editbus=async(data)=>{
  try {
    const token = localStorage.getItem('usertoken')
    if (token === null) {
      alert("undefined")
    } else {
      const response = await api.put('/auth/admin/bus/update-bus', data, {
        headers: {
          Authorization: `Bearer  ${token}`
        }
      })
      console.log(response.data)
      getBus()
      Navigate('/dashboard/bus')
    }

  } catch (err) {
    console.log(err)
    alert("Not found")
  }
}

const Cancleticket=async(data)=>{
  try {
    const token = localStorage.getItem('usertoken')
    if (token === null) {
      alert("undefined")
    } else {
      const response = await api.post('/auth/user/bus/cancel/ticket', data, {
        headers: {
          Authorization: `Bearer  ${token}`
        }
      })
      console.log(response.data)
      getTickets()
      Navigate('/ticket')
    }

  } catch (err) {
    console.log(err)
    alert("Not found")
  }
}
useEffect(() => {
  finduser()
}, [])
return (
  <BusList.Provider value={{ signup, login, userDetail, userLogin, BusSearch, searchresult, handlebuslist,getuser,userList,logout,getTickets,ticket,bus, getBus,setnewbus,newbus,CreateBus,deletebus,editbus,seteditbus,Editbus,Cancleticket}}>
    {children}
  </BusList.Provider>
)
}
export const UseBusList = () => useContext(BusList)