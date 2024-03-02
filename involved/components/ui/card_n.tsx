const NgoCard = ({ ngo }) => {
    return (
       <div className="NgoCard">
           <div className="border rounded-xl bg-white overflow-hidden shadow-md hover:shadow-xl">
             <div className="p-5 pb-0">
               <img className="h-40 w-40 mx-auto" src={ngo.imageUrl} alt={ngo.name} />
               <div className="text-lg font-semibold text-center w-full mt-2">
                 {ngo.name}
               </div>
               <div className="flex items-center text-gray-700 justify-center gap-2 my-2">
                 <i className="ri-star-fill"></i>
                 <i className="ri-star-fill"></i>
                 <i className="ri-star-fill"></i>
                 <i className="ri-star-fill"></i>
                 <i className="ri-star-fill"></i>
               </div>
             </div>
             <div className="bg-pink-500 text-center py-3 text-white cursor-pointer">
               Know More
             </div>
           </div>
       </div>
    );
   };
   
   export default NgoCard;
   