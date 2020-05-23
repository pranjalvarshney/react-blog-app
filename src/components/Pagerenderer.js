import React from 'react'
import { useRouteMatch } from 'react-router-dom'

const generatePage = page =>{
    const component = () => require(`./pages/${page}.js`).default

    try {
        return React.createElement(component())
    } catch (error) {
        console.warn(error)
        return React.createElement(()=> 404)
    }
}

function Pagerenderer() {
    const {
        params: { page }
    } = useRouteMatch()

    return generatePage(page)

}

export default Pagerenderer
