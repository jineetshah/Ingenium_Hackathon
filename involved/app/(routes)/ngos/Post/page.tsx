import React from 'react';
import Post from '@/components/ngopost';
import image from '@/public/images/images_1.jpeg'

function App() {
 return (
    <div className="App">
      <Post
        username="John Doe"
        content="This is a sample post. Check out my latest project!"
        timestamp="2 minutes ago"
        profilePicUrl="/images/images_1.jpeg"
        media="/images/images_1.jpeg"
      />
    </div>
 );
}

export default App;