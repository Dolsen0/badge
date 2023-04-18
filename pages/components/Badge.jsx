import Avatar from "./Avatar";
import Handle from "./Handle";
import Name from "./Name";
import Quote from "./Quote";

function Badge({user}){
    return(
        <>
        <div className="badge">
            <Avatar img = {user.img} name = {user.name}/>
                <div className="userName">
                    <Handle handle = {user.handle} />
                    <Name name = {user.name}/>
                </div>
                <div className="quote">
                    <Quote quote = {user.quote} />
                </div>
        </div>
        </>
    )
}

export default Badge;