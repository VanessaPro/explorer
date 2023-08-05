import {useState, FormEvent, useEffect} from 'react'
import {Header} from "../../components/header";
import { Input } from "../../components/inputs";

import {db} from '../../services/faribaseConnection';
import {
    setDoc,
    doc,
    getDoc
} from 'firebase/firestore';

export function Networks(){

    const [linkedin,setLinkedim] = useState("")
    const  [github,setGithub] = useState("")
    const  [facebook,setFacebook] = useState("")
    const  [instagran, setInstagran] = useState("")

    useEffect (() => {
        function loadLinks(){
            const docRef =doc(db, "social", "link")
            getDoc(docRef)
            .then((snapshot)=>{
                if(snapshot.data() !== undefined){
                    setLinkedim(snapshot.data()?.linkedin)
                    setGithub(snapshot.data()?.github)
                    setFacebook(snapshot.data()?.facebook)
                    setInstagran(snapshot.data()?.instagran)
                    
                }

            })
        }

        loadLinks();

    }, [])
   

    function handleRegister(e:FormEvent){
        e.preventDefault();

        setDoc(doc(db, "social", "link"), {
           
            linkedin: linkedin,
            github:github
        })
        .then(() =>{
            console.log("Cdastrados com sucesso")
        })
        .catch((error) =>{
            console.log("Erro ao cadastrar" + error)
        })

    }

    return(
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header/>
            <h1  className="text-white text-2xl font-medium mt-8 mb-4">Minhas redes sociais</h1>
            <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
                <label className="text-white font-medium mt-2 mb-2">Link do Linkedin</label>
                <Input
                   type="url" 
                   placeholder="Digite a url do Linkedin"
                   value={linkedin}
                   onChange={(e) => setLinkedim(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mb-2">Link do Github</label>
                <Input
                   type="url" 
                   placeholder="Digite a url do Github"
                   value={github}
                   onChange={(e) => setGithub(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mb-2">Link do Facebook</label>
                                <Input
                                type="url" 
                                placeholder="Digite a url do Facebook"
                                value={facebook}
                                onChange={(e) => setGithub(e.target.value)}
                                />

                <label className="text-white font-medium mt-2 mb-2">Link do Instagran</label>
                                <Input
                                type="url" 
                                placeholder="Digite a url do Instagran"
                                value={instagran}
                                onChange={(e) => setGithub(e.target.value)}
                                />                

                <button 
                    type='submit' 
                   className='text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium'>
                    Salvar links
                    
                </button>                               

            </form>

        </div>
    )
}