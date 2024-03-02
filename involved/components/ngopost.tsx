'use client'
import React, { useState } from 'react';

interface PostProps {
 username: string;
 content: string;
 timestamp: string;
 profilePicUrl: string;
 media?: string;
}

const Post: React.FC<PostProps> = ({ username, content, timestamp, profilePicUrl, media }) => {
 const [likes, setLikes] = useState(0);
 const [comments, setComments] = useState([]);
 const [newComment, setNewComment] = useState('');

 const handleLike = () => {
    setLikes(likes + 1);
 };

 const handleComment = () => {
    if (newComment.trim() !== '') {
        setComments([...comments, newComment]);
        setNewComment('');
    }
 };

 const handleDeleteComment = (index) => {
    setComments(comments.filter((_, i) => i !== index));
 };

 return (
    <div className="bg-gray-100 shadow-lg rounded-lg p-2 my-2 w-full md:w-3/4 lg:w-1/2 mx-auto">
      <div className="flex items-center">
        <img className="w-6 h-6 rounded-full" src={profilePicUrl} alt="Profile" />
        <div className="ml-1">
          <h3 className="text-xs font-medium text-gray-900">{username}</h3>
          <p className="text-xxs text-gray-500">{timestamp}</p>
        </div>
      </div>
      {media && (
        <div className="mt-1">
          {media.endsWith('.mp4') ? (
            <video className="w-full h-auto" controls>
              <source src={media} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img className="w-full h-auto" src={media} alt="Post media" />
          )}
        </div>
      )}
      <div className="mt-1 overflow-y-auto max-h-32"> {/* Further reduced maximum height */}
        <p className="text-gray-700">{content}</p>
      </div>
      <div className="mt-1 flex justify-between items-center">
        <button onClick={handleLike} className="text-blue-500 hover:text-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          {likes}
        </button>
        <button onClick={handleComment} className="text-blue-500 hover:text-blue-700">Comment</button>
        <button className="text-blue-500 hover:text-blue-700">Share</button>
      </div>
      <div className="mt-1">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-1 border border-gray-300 rounded-md"
        />
        <button onClick={handleComment} className="mt-1 text-white bg-blue-5-500 hover:bg-blue-700 p-1 rounded-md">Post Comment</button>
      </div>
      {comments.length > 0 && (
        <div className="mt-1">
          <h4 className="text-xs font-medium text-gray-900">Comments:</h4>
          {comments.map((comment, index) => (
            <div key={index} className="flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <p className="text-xs text-gray-500 ml-1">{comment}</p>
              <button onClick={() => handleDeleteComment(index)} className="text-red-500 hover:text-red-700 ml-auto">Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
 );
};

export default Post;
