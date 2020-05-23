import React from 'react'
import Block from './Block'

function MasoryBlock({posts, columns}) {
    return (
        <div className="masonryblock overlay" style={{gridTemplateColumns: `repeat(${columns}, minmax(275px,1fr))`}}>
            {posts.map((post,index) => 
                <Block post={post} key={index} /> )}
        </div>
    )
}

export default MasoryBlock
