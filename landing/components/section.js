import image from '../utils/image'

const Section = ({ name, cover, children }) =>
    <article id={name}>
        <h2 className="major">{name}</h2>
        <span className="image main"><img src={image(cover)} alt={name} /></span>
        {children}
    </article>

export default Section
