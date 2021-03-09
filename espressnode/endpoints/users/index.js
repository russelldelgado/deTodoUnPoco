import axios from 'axios';

const handler = {

    getAll :  async (req , resp) =>{
   
        try {
            //esto de {} se llama destructuring para quedarme solo con el json
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(data)
             resp.status(200).json(data);
            
        } catch (error) {
            resp.status(400).json({error : 'mala peticion'})

        }
    },

    getById :  async (req , resp) =>{

        //const id = req.params.id
        const {id} = req.params
   
        try {
            //esto de {} se llama destructuring para quedarme solo con el json
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            console.log(data)
             resp.status(200).json( data )
            
        } catch (error) {
            resp.status(404).json({error : 'RECURSO NO ENCONTRADO'})

        }
    },

    
    createUser :  async (req , resp) =>{

        //restructurin
        //const {body} = req

        const body = req.body;
   
        try {
            //esto de {} se llama destructuring para quedarme solo con el json
            const {data} = await axios.post(`https://jsonplaceholder.typicode.com/users/` , body)
            console.log(data)
             resp
                .status(201)
                .json( data)
            
        } catch (error) {
            resp.status(500).json({error : 'ERROR DE SERVIDOR'})
        }
    },


    
    deleteUserById :  async (req , resp) =>{

        const id = req.params.id
        //destructuring
        //const {id} = req.params
   
        try {
            //esto de {} se llama destructuring para quedarme solo con el json
            const {data} = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            console.log(data)
             resp
             .status(200)
             .json( data )
            
        } catch (error) {
            resp.status(404).json({error : 'RECURSO NO ENCONTRADO'})

        }
    },

    updateById :  async (req , resp) =>{

        const {id} = req.params;
        const {body} = req;
        //destructuring
        //const {id} = req.params
   
        try {
            //esto de {} se llama destructuring para quedarme solo con el json
            const {data} = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,body)
            console.log(data)
             resp
             .status(200)
             .json( data )
            
        } catch (error) {
            resp.status(404).json({error : 'RECURSO NO ENCONTRADO'})

        }
    },


}


export default handler;