import Navbar from "@/components/navbar";
import NgoCard from "@/components/ui/card_n";

const NGOPage = () => {
 // Example array of NGOs
 const ngos = [
    { name: "NGO 1", imageUrl: "./assets/images/ngo1.png" },
    { name: "NGO 2", imageUrl: "./assets/images/ngo2.png" },
    { name: "NGO 3", imageUrl: "./assets/images/ngo3.png" },
    { name: "NGO 4", imageUrl: "./assets/images/ngo4.png" },
    { name: "NGO 5", imageUrl: "./assets/images/ngo5.png" },
    { name: "NGO 6", imageUrl: "./assets/images/ngo6.png" },
    { name: "NGO 7", imageUrl: "./assets/images/ngo6.png" },
    { name: "NGO 8", imageUrl: "./assets/images/ngo6.png" },
    { name: "NGO 9", imageUrl: "./assets/images/ngo6.png" },
    { name: "NGO 10", imageUrl: "./assets/images/ngo6.png" },
    { name: "NGO 11", imageUrl: "./assets/images/ngo6.png" },
    { name: "NGO 12", imageUrl: "./assets/images/ngo6.png" },
 ];

 return (
    <div className="card-container">
      <Navbar />
      <div className="grid grid-cols-3 gap-8 mt-10">
        {ngos.map((ngo, index) => (
            <NgoCard key={index} ngo={ngo} />
        ))}
      </div>
    </div>
 );
};

export default NGOPage;
