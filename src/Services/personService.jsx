import axios from "axios";

const GetAll = () =>
{
    const request = axios.get("http://localhost:3001/phonebook")
    return request.then(response=>response.data)
}

const Create = (newObject) =>
{
    const request = axios.post("http://localhost:3001/phonebook", newObject)
    return request.then(response=>response.data)
}

const Update = (id, newObject) =>
{
    debugger
    const request = axios.put(`http://localhost:3001/phonebook/${id}`, newObject)
    return request.then(response=>response.data)
}

const Delete = (id) =>
{
    const request = axios.delete(`http://localhost:3001/phonebook/${id}`)
    return request.then(response=>response.data)
}

export default{GetAll, Create, Update, Delete}