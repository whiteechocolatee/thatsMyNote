import env from '../../env.json'

export const notes = async (obj) =>{
    try{
        let response = await fetch(`${env.urlBackend}`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded'
                },
                body:JSON.stringify(obj)
            })

        let data = await response.json();

        return data
    }catch(err){
        console.log(err);
    }
}