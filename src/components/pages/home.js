import React from 'react'
import MasonryBlock from '../MasoryBlock'
import posts from '../sampledata'

const latestconfig = {
    1: {
        gridArea: '1 / 2 / 3 / 3'
    },
    4: {
        gridArea: '1 / 3 / 4 / 3'
    }
}
const mergeStyles = (posts,config)=>{
    posts.forEach((post,index) => {
        post.style = config[index]
    });
}

mergeStyles(posts,latestconfig)

function Home() { 
    return (
        <div className="container my-4 home">
            <div className="row">
                <h4 className="py-3 ">Recent Posts</h4>
                <MasonryBlock posts={posts} columns={3} />
            </div>
            

        </div>
    )
}

export default Home
