import React, { Component } from 'react'

import './assets/nutrition.css'

class Nutrition extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            this.setState({posts: json})
            console.log(json)
        })
    }

    render() {
        return(
            <div className='container'>
                <header>Power Nutrition</header>
                {this.state.posts.map((item)=> {
                    return(
                        <article key={item.id} className='post'>
                            <strong className='title'> {item.titulo}</strong>
                            <img src={item.capa} className='picture' alt={item.titulo}/>
                            <p className='subtitle'> {item.subtitulo}</p>
                            <a className='action' href='#'>Access</a>
                        </article>
                    )
                })}
            </div>
        )
    }
}

export default Nutrition;