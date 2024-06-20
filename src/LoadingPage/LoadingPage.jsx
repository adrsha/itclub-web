import "./LoadingPage.css";
function LoadingPage(){
    return(
        <div className="body">
            <div className="loadingContainer">
                <div className="box" style={{'--i': 1}}></div>
                <div className="box" style={{'--i': 4}}></div>
                <div className="box" style={{'--i': 7}}></div>
                <div className="box" style={{'--i': 10}}></div>
            </div>
        </div>
    )
}
export default LoadingPage;