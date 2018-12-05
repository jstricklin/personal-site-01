import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01(edit).jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import loading from '../images/loading.svg'
import menuScreen from '../images/menu-drawer-screen.png'
import movieScreen from '../images/movie-buddy-screen.png'

const baseURL = 'https://personal-site-mailer.herokuapp.com/contact'

class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
        }
        this.onNameChange = this.onNameChange.bind(this)
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onMessageChange = this.onMessageChange.bind(this)
        this.sendMessage = this.sendMessage.bind(this)
    }
    onNameChange(e){
        this.setState({ name: e.target.value })
        console.log('article func', this.props.onOpenArticle)
    }
    onEmailChange(e){
        this.setState({ email: e.target.value })
    }
    onMessageChange(e){
        this.setState({ message: e.target.value })
    }
    sendMessage(e) {
        e.preventDefault()
        this.props.onLoading()
        let contactData = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        return fetch(baseURL, {
            method: 'POST',
            mode: 'cors',
            headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
            body: JSON.stringify(contactData)
        }).then(res => {this.props.onThanks()})
    }
    render() {

        let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

        return (
            <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

                {/* loading bar below */}
                <article id='loading' className={`${this.props.article === 'loading' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display: 'none'}}>
                    <div style={{ display: 'flex', justifyContent:'center' }}>
                        <img src={loading} alt='Loading...' />
                    </div>
                    {close}
                </article>
                <article id='thanks' className={`${this.props.article === 'thanks' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display: 'none'}}>
                    <div style={{textAlign:'center'}}>
                        <p>Your message has been sent! Check your inbox for confirmation.</p>
                    </div>
                </article>
                <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                    <h2 className="major">About Me</h2>
                    <span className="image main"><img src={pic01} alt="" /></span>
                    <p>Having come from a digital media and design background, much of my work has involved an emphasis on artistic and illustrative endeavors. I seek to continue evolving these creative and technical skills in order to contribute productively to the creation of a variety of fresh and innovative digital interactive experiences.</p>

                    <p>With several years spent working for various Advertising, Digital Art, and Tech endeavors, my varied skillset serves useful in a variety of applications - from Concept Visualization and Motion Graphics to Front-End Web and Game Development. Integrating new and captivating ways for our users to interact with our interactive applications is a challenge and a passion</p>
                    {close}
                </article>

                <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                    <h2 className="major">Projects</h2>
                    {/*<span className="image main"><img src={pic02} alt="" /></span>*/}
                    <div className='card'>
                        <a target='_blank' rel='noopener noreferrer' href='https://github.com/jstricklin/menudrawer-front-end'>
                            <h3>Menu Drawer - Galvanize Capstone Project</h3>
                            <div className='cardBody'>
                                <div>
                                <img src={menuScreen} height='350' alt="menu-buddy" />
                            </div>
                                <div className='card-text'>
                                    <p>Menu Drawer is a restaurant and menu centric, open source platform that will allow users to access a database of menus added by registered users or restaurants in order to view and compare menu items and prices, in order to find local options and choose a best option.</p>
                                    <p>This prototype app was built as a final Capstone project for the Web Development Immersive program at Galvanize.</p>
                                    <p>To complete this project, it was required to incorporate unknown technologies to develop an MVP full-stack application - in this case, React Native with FireBase Realtime Database for a serverless, cloud based back-end; all built within the span of 10 days.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='card'>
                        <a target='_blank' rel='noopener noreferrer' href='https://github.com/Blackoxy/MovieBuddyFE'>
                            <h3>Movie Buddy - Galvanize Group Project</h3>
                            <div className='cardBody wide'>
                                <img src={movieScreen} width='90%' alt="menu-buddy" />
                                <div className="card-text">
                                    <p>Movie Buddy matches users with others to watch upcoming films in order to meet new people and help engage or even create a local film community.</p>
                                    <p>This project was built as a sprint-style, group project for the Web Dev Immersive Program at Galvanize and was built utilizing a mix of technologies, including NodeJS/Express, PostgreSQL, and React.</p>
                                    <p>As a stretch goal, we hope to make this 'boilerplate' social network concept something more viable by incorporating user profiles and a user-to-user messaging system with SocketIO, as well as incorporating a payment system to facilitate ticket purchases.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    {close}
                </article>

                <article id="resume" className={`${this.props.article === 'resume' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                    <h2 className="major">Resume</h2>
                    <embed src="https://drive.google.com/file/d/1cwJPjGZmoVe0c5Qu2137rDRzJztr8RtJ/preview" className="resume" width='100%' height='700px' />
                    {close}
                </article>

                <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                    <h2 className="major">Contact</h2>
                    <form method="post" onSubmit={this.sendMessage}>
                        <div className="field half first">
                            <label htmlFor="name">Name</label>
                            <input onChange={this.onNameChange} required type="text" name="name" id="name" />
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input onChange={this.onEmailChange} type="text" required type="email" name="email" id="email" />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea onChange={this.onMessageChange} required name="message" id="message" rows="4"></textarea>
                        </div>
                        <ul className="actions">
                            <li><input type="submit" value="Send Message" className="special" /></li>
                            <li><input type="reset" value="Reset" /></li>
                        </ul>
                    </form>
                    <ul className="icons">
                        <li><a href="https://twitter.com/lighterdark84" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://www.linkedin.com/in/stricklinj/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://github.com/jstricklin" className="icon fa-github"><span className="label">GitHub</span></a></li>
                    </ul>
                    {close}
                </article>

            </div>
            )
}
}

Main.propTypes = {
    route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout: PropTypes.bool,
    setWrapperRef: PropTypes.func.isRequired,
}

export default Main
