import NgoCard from "@/components/ui/card_n";
import bgImage from "@/public/images/ngo_card_bg.png"

const NGOPage = () => {
 const ngos = [
    { name: "NGO 1", imageUrl: "/images/ngo_card_bg.png" },
    { name: "NGO 2", imageUrl: "/assets/images/ngo2.png" },
    { name: "NGO 3", imageUrl: "/assets/images/ngo3.png" },
    { name: "NGO 4", imageUrl: "/assets/images/ngo4.png" },
    { name: "NGO 5", imageUrl: "/assets/images/ngo5.png" },
    { name: "NGO 6", imageUrl: "/assets/images/ngo6.png" },
    { name: "NGO 7", imageUrl: "/assets/images/ngo7.png" },
    { name: "NGO 8", imageUrl: "/assets/images/ngo8.png" },
    { name: "NGO 9", imageUrl: "/assets/images/ngo9.png" },
    { name: "NGO 10", imageUrl: "/assets/images/ngo10.png" },
    { name: "NGO 11", imageUrl: "/assets/images/ngo11.png" },
    { name: "NGO 12", imageUrl: "/assets/images/ngo12.png" },
 ];

 return (
    <div>
      <div className="grid grid-cols-3 gap-8 mt-10">
        {ngos.map((ngo, index) => (
            <NgoCard key={index} ngo={ngo} />
        ))}
      </div>
    </div>
 );
};

export default NGOPage;
