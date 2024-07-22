

function Nav () {

    return (
            <div className="font-bold flex flex-wrap justify-center">
               <div className="w-full justify-center flex py-4  ">
                    <img className=" w-30 h-20 rounded-full"  src="/images/twitter.png" alt="twitter" />
               </div>
               <div className="w-full text-center"> 
               <button className="p-2  my-2 rounded-3xl border-gray-200 hover:bg-gray-300 text-xl px-5">Home</button>
               </div>
               <div className="w-full text-center"> 
               <button className="p-2 my-2 rounded-3xl border-gray-200 hover:bg-gray-300 px-5 text-xl ">Explore</button>
               </div>
               <div className="w-full text-center "> 
               <button className="p-2 my-2 rounded-3xl border-gray-200 hover:bg-gray-300 px-5 text-xl ">Notifications</button>
               </div>
               <div className="w-full text-center"> 
               <button className="p-2 my-2 rounded-3xl border-gray-200 hover:bg-gray-300 px-5 text-xl ">Messages</button>
               </div>
               <div className="w-full text-center"> 
               <button className="p-2 my-2 rounded-3xl border-gray-200 hover:bg-gray-300 px-5 text-xl ">Bookmarks</button>
               </div>
               <div className="w-full text-center"> 
               <button className="p-2 my-2 rounded-3xl border-gray-200 hover:bg-gray-300 px-5 text-xl ">Communities</button>
               </div>
               <div className="w-full text-center "> 
               <button className="p-2 my-2 rounded-3xl border-gray-200 hover:bg-gray-300 px-5 text-xl ">Premium</button>
               </div>
               <div className=" w-full text-center"> 
               <button className="p-2 my-2 rounded-3xl border-gray-200 hover:bg-gray-300 px-5 text-xl ">Verified Orgs</button>
               </div>
               <div className="w-full text-center"> 
               <button className="p-2 my-2 rounded-3xl border-gray-200 hover:bg-gray-300 px-5 text-xl ">Profile</button>
               </div>
               <div className="w-full text-center"> 
               <button className="p-2 my-2 rounded-3xl border-gray-200 hover:bg-gray-300 px-5 text-xl ">More</button>
               </div>
            </div>
    )
}


export default Nav;