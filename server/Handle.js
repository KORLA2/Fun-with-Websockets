let users=[];
let adduser=({id,name,room})=>{

let user={id,name,room}
users.push(user)
    return user ;
}

let removeuser=(id)=>{

let idx=users.findIndex(user=>user.id===id)
return users.splice(idx,1)[0];


}
let  roommembers=(room)=>{

  return (  users.filter((user)=>{
        if(user.room===room)return user.name;
    })
  )
}
function  getuser(id){
 return  users.find(user=>user.id===id)
}

module.exports={adduser,getuser,removeuser,roommembers};