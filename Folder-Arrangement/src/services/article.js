import axios  from "axios";



export const getArticles = async() =>{

    try{
    const  res = await axios.get('https://miniblogskillup.herokuapp.com/api/posts');
       console.log(res.data)
    return res.data ;
    }catch(err){
    throw err ;
    }
}


 

