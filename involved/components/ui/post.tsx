// Import necessary dependencies
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define the type for the Post component props
interface PostProps {
 id: number;
 title: string;
 category: string;
 img: string;
 published: string;
}

// Define the Post component with TypeScript props
const Post: React.FC<PostProps> = ({ id, title, category, img, published }) => {
 return (
    <div className="item">
      <div className="images">
        <Link href={`/posts/${id}`}><a><Image src={img || "/default-image.png"} alt={title || "Post"} className="rounded" width={500} height={350} /></a></Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={`/posts/${id}`}><a className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</a></Link>
          <Link href={`/posts/${id}`}><a className="text-gray-800 hover:text-gray-600">- {published || "Unknown"}</a></Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "Title"}</a></Link>
        </div>
        <p className="text-gray-500 py-3">
          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
        </p>
      </div>
    </div>
 );
};

export default Post;
