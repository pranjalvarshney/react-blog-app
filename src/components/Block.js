import React from 'react'

function Block({post}) {
    
    const imagebg = {
        background: `url("${require(`./images/${post.image}`)}")`
    }

    const width = window.innerWidth

    const style = width > 900 ? {...imagebg , ...post.style} : imagebg
    
    return (
        <a href={post.link} style={style} className="block">
            <div className="content">
                <h5>{post.title}</h5>
                <p> {post.desc}</p>   
                <span> {post.date}</span>
            </div>
            
        </a>
    )
}

export default Block
