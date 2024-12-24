import { useContext, createContext, useState, useEffect } from "react";
import api from '../api/bluebus';
import { data, useNavigate } from "react-router-dom";
import Createbus from "../routes/admin/Createbus";

const BusList = createContext()


export default function BusProvider({ children }) {
  const [userDetail, setuserDetail] = useState({})
  const [userLogin, setuserLogin] = useState(false)
  const Navigate = useNavigate()
  const [userList, setuserList] = useState([])
  const [searchresult, setsearchresult] = useState([])
  const [ticket, setTicket] = useState([])
  const [newbus, setnewbus] = useState({})
  const [editbus, seteditbus] = useState({})
  const [admin, setadmin] = useState(false)
  const [searchdet,setsearchdet]=useState({})
  const [selected,setselected]=useState([])
  const [bus, setBus] = useState('');

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
      const user = localStorage.getItem('userdetail')
      if (user) {
        setuserDetail(user)
        setuserLogin(true)
      }
      else {
        setuserLogin(false)
      }
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

  const CreateBus = async (data) => {
    try {
      const token = JSON.parse(localStorage.getItem('usertoken'))
      const newtoken = await refereshtoken(token)
      if (token === null) {
        alert("token not found")
      } else {
        const response = await api.post('/auth/admin/bus/create-bus', data, {
          headers: {
            'Authorization': `Bearer ${newtoken ? newtoken : null}`
          }
        })
        alert('created bus')
        Navigate('/adminhome/bus')
      }
    } catch (err) {
      console.log(err)
    }
  }

  const login = async (userData) => {
    try {
      const response = await api.post('/auth/user/login', userData)
      // console.log(response.data)
      savetoken(response.data.token)
      saveuser(userData)
      if (response?.data.role === 'admin') {
        Navigate('/adminhome')
        setadmin(true)
      }
      else {
        setadmin(false)
        Navigate(-1)
      }
      console.log(userDetail)
      finduser()
      console.log(userLogin)

    } catch (err) {
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
      const response = await api.post('/auth/user/view/search-bus', busData)
      console.log(response.data)
      if (response.data && response.data.length > 0) {
        setsearchresult(response.data)
        setsearchdet(busData)
        Navigate('/search')
      }
      else {
        alert("No buses found")
      }

    } catch (err) {
      console.log(err)
      alert("Not found")
    }
  }

  const handlebuslist = (id) => {
    console.log(id)
    const filter = searchresult.filter((par) => {
      console.log(par)
      if (par._id === id) return par
    })
    if (!filter.length) {
      alert('page error')
      Navigate('/home')
    }
    else {
      return filter
    }
  }
  const BookTicket = async (data) => {
    try {
      const token = JSON.parse(localStorage.getItem('usertoken'))
      if (token === null) {
        alert("login")
      } else {
        const newtoken = await refereshtoken(token)
        const response = await api.post('/auth/user/bus/book-ticket', data, {
          headers: {
            'Authorization': `Bearer ${newtoken ? newtoken : null}`
          }
        })
        if (response.data.ticket) {
           getTickets()
           Navigate('/ticket')
        }
        else{
          console.log(response)
          alert('ticket is not book')
          Navigate(-1)
        }
      }

    } catch (err) {
      console.log(err)
    }

  }

  const getuser = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('usertoken'))
      const newtoken = await refereshtoken(token)
      console.log(newtoken)
      const response = await api.get('/auth/admin/view/user', {
        headers: {
          'Authorization': `Bearer ${newtoken ? newtoken : null}`
        }
      })
      setuserList(response.data)
    } catch (err) {
      if (err.response) {
        console.log(err.response.message)
      }

      console.log(err)
    }
  }

  const getTickets = async () => {
    try {
      const user = localStorage.getItem('userdetail')
      const token = JSON.parse(localStorage.getItem('usertoken'))
      const newtoken = await refereshtoken(token)
      const response = await api.get('/auth/user/view/bus-ticket', {
        headers: {
          "Authorization": `Bearer ${newtoken ? newtoken : null}`
        }
      }, user)
      setTicket(response.data)
    } catch (err) {
      if (err.response) {
        console.log(err.response.message)
      }

      console.log(err)
    }
  }

  const logout = () => {
    try {
      localStorage.clear()
      setuserDetail()
      setadmin(false)
      alert('logout')
      setuserLogin(false)
      Navigate('/home')
    } catch (err) {
      console.log(err)
    }
  }

  const deletebus = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem('usertoken'))
      const newtoken = await refereshtoken(token)
      const response = await api.delete(`/auth/admin/bus/delete-bus/${id}`, {
        headers: {
          Authorization: `Bearer ${newtoken ? newtoken : null}`
        }
      })
      if (response) {
        alert('bus deleted')
        console.log(response.data)
        getBus()
      }
    } catch (err) {
      console.log(err)
    }
  }


  const getBus = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('usertoken'))
      const newtoken = await refereshtoken(token)
      const response = await api.get('/auth/admin/view/bus-details', {
        headers: {
          Authorization: `Bearer ${newtoken ? newtoken : null}`
        }
      })
      setBus(response.data)
      console.log(response.data)
    } catch (err) {
      if (err.response) {
        console.log(err.response.message)
      }
    }
  }

  const Editbus = async (data) => {
    try {
      const token = JSON.parse(localStorage.getItem('usertoken'))
      const newtoken = await refereshtoken(token)
      if (token === null) {
        alert("token not found")
        return
      }
      const response = await api.put('/auth/admin/bus/update-bus', data, {
        headers: {
          'Authorization': `Bearer ${newtoken ? newtoken : null}`
        }
      })
      console.log(response.data)
      if (!response.data) {
        alert("failed to update bus data")
        return
      }
      getBus()
      Navigate('/Adminhome/bus')

    } catch (err) {
      console.log(err)
      alert("Not found")
    }
  }

  const refereshtoken = async (oldtoken) => {
    try {
      const data = { 'token': oldtoken }
      const response = await api.post('/auth/refresh-token', data)
      if (response.data.token) {
        savetoken(response.data.token)
        return response.data.token
      }
      else {
        alert('auth failde')
      }
    } catch (err) {
      if (err.response) {
        console.log(err.response)
      }
      throw new Error(err)
    }
  }

  const Cancleticket = async (data) => {
    try {
      const token = JSON.parse(localStorage.getItem('usertoken'))
      const newtoken = await refereshtoken(token)
      if (token === null) {
        alert("undefined")
      } else {
        const response = await api.post('/auth/user/bus/cancel/ticket', data, {
          headers: {
            'Authorization': `Bearer ${newtoken ? newtoken : null}`
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

  const refresh = async () => {
    const token = JSON.parse(localStorage.getItem('usertoken'))
    if (token !== null) {
      await refereshtoken(token)
    }
  }

  const searchbus = async (num) => {
    try {
      const token = JSON.parse(localStorage.getItem('usertoken'))
      const newtoken = await refereshtoken(token)
      const response = await api.post('/auth/admin/bus/search-bus', num, {
        headers: {
          "Authorization": `Bearer ${newtoken ? newtoken : null}`
        }
      })
      setBus(response.data)
    } catch (err) {
      if (err.response) {
        console.log(err.response.message)
      }

      console.log(err)
    }
  }

  const [row, setrow] = useState([])

  const addrow = () => {
    const newrow = { name: '', age: '', gender: '' }
    setrow([...row, newrow])
}

const romoverow = () => {
    const arr = row
    arr.pop()
    setrow(arr)
}

  useEffect(() => {
    finduser()
  }, [])
  return (
    <BusList.Provider value={{ signup, login, userDetail, userLogin, BusSearch, searchresult, handlebuslist, getuser, userList, logout, getTickets, ticket, bus, getBus, setnewbus, newbus, CreateBus, deletebus, editbus, seteditbus, Editbus, Cancleticket, BookTicket, admin, searchbus,searchdet,selected,setselected,row,setrow,addrow,romoverow}}>
      {children}
    </BusList.Provider>
  )
}
export const UseBusList = () => useContext(BusList)