import "./info.css"
const Info = ({name, bio}) => {

    return <>
    <div className="container">
        <div className="card">
        <h2 className="name">{name}</h2>
        <span className="bio">{bio}</span>
        </div>
    </div>
    </>
}
export default Info;