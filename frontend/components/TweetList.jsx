import axios from "axios";


function TweetList ({ tweets, onLike, onDelete}) {
    
    
    const handleLike = async (id) => {
        
        const response = await axios.post(`http://localhost:3001/api/tweets/${id}/like`)
        onLike(response.data)
       
    }

    const handleDelete = async (id) => {
       try{
        await axios.delete(`http://localhost:3001/api/tweets/${id}`)
        onDelete(id)
        console.log(onDelete(id))
       } catch (error) {
        console.error('Fallo al borrar un tweet:', error)
       }
    }


    return (

        <div className="border border-gray-300 w-full ">
           
            <ul>
                {tweets.map((tweet) => (
                    <li key={tweet.id} className="border-2 p-4 border-gray-300 cursor-pointer hover:bg-gray-400">
                        <h1 className="text-gray-300 text-xl pb-3 font-semibold ">{tweet.username}</h1>
                        <p className="text-gray-900 p-4"> {tweet.content}</p>
                        <p className="text-white py-2">Like: {tweet.likes}</p>
                        <button 
                            onClick={() => handleLike(tweet.id)}
                            className=" border rounded-lg m-3 bg-blue-700 hover:bg-blue-500 px-5 py-1 font-bold text-white">
                            Like
                        </button>
                        <button 
                            onClick={() => handleDelete(tweet.id)}
                            className="border m-3 rounded-lg bg-rose-900 hover:bg-rose-800 px-5 py-1 font-bold text-white">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TweetList;