import { useState } from "react";
import axios from "axios";


function TweetForm ({onTweetPosted}) {
    const [ username,setUsername ] = useState('');
    const [ content, setContent ] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post('http://localhost:3001/api/tweets', { username, content});
        onTweetPosted(response.data);
        setUsername('');
        setContent('')
    };

    return (
     <div className="w-full">
        <div className="flex flex-wrap my-1">
             <button className="w-2/4 p-3 m-0 text-center hover:bg-gray-600">For you</button>
             <button className="w-2/4 p-3 text-center hover:bg-gray-600">Followind</button>
             <hr className=" w-full" />   
        </div>
        <div className="flex flex-wrap ">
        <form className=" w-full border border-gray-300" onSubmit={handleSubmit}>
            <textarea
                className=" w-3/4 resize-none py-5 text-xl outline-none text-white m-5 bg-transparent shadow-white shadow-sm  border rounded border-gray-100" 
                type="text" 
                placeholder="What is happening?!"
                value={content}
                onChange={(e) =>setContent(e.target.value)}
                required
                />
            <input 
                className="text-xl w-3/4 outline-none text-white m-5 bg-transparent shadow-white shadow-sm font-bold border rounded border-gray-100"
                type="text" 
                placeholder="Nome"
                value={username}
                onChange={(e) =>setUsername(e.target.value)}
                required
                />
            
            <button type="submit" className="border w-1/4  border-white ml-5 shadow-white shadow-sm bg-blue-400 bg-opacity-80 hover:bg-blue-600 hover:shadow-md hover:shadow-white p-1 px-6 m-2 rounded text-xl text-white">Post</button>
        </form>
        </div>
     </div>
    )
}

export default TweetForm;