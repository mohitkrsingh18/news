import React from "react";
function Side(){
    return(
        <>
    <div className="leftsidebar">
        <div>
            <div>hello</div>
            <div>helo</div>
            <div>hello</div>
        </div>
     </div>
     </>
    )
}
function Card(props) {
    return (
        <>


            <div className="cards">
                
                <div className="card">

                    <div className="cardinfo">
                        <span className="cardid">{props.id}</span>
                        <h3 className="cardtitle">{props.title}</h3>
                        <p className="cardsummary">{props.summary}</p>
                        <p className="cardpub">{props.published}</p>


                        <a href={props.link} target="_blank"></a>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Card;
