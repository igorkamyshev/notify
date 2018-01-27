const Header = ({ title, children, links }) =>
    <header id="header">
        <div className="logo">
            <span className="icon fa-spinner"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>{title}</h1>
                {children}
            </div>
        </div>
        <nav>
            <ul>
                {links.map((link, index) => <li key={index}><a href={`#${link}`}>{link}</a></li>)}
            </ul>
        </nav>
    </header>

export default Header
