import socketIO from 'socket.io-client';

const baseURL = "http://localhost:4000";



export default function startSocketConnection(){
    const socket = socketIO.connect(baseURL);
    
    socket.on('connect',()=>{
        console.log("socket connected");
    })
    
    socket.on('newdashcard',(data)=>{
        console.log("response socket", data);
        //update redux state
    })
}

