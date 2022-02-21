import ReactDOM from "react-dom"
import logo from "./react-logo.png"

import './index.css'

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={logo}  width="40px"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 20xx Seesahaye development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons i'm excited to learn React</h1>
            <ul>
                <li>Need to learn frond-end</li>            
                <li>Career opportunities</li>            
                <li>Its awesome!!!</li>
            </ul>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>    
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"))
