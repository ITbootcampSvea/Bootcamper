import axios from 'axios';

const baseURL = "http://localhost:4000";

const path = {
    users:"/users",
    dashboard:"/dashboard",
    homeworkmaster:"/homeworkmaster",
    homeworkstudent: "/homeworkstudent",
    testmaster:"/testmaster",
    teststudent:"/teststudent",
}

export function createCard(data){
    return axios.post(baseURL+path.dashboard,data);
}