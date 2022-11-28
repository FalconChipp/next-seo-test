import React from "react";
// import "./css/typewriter.css"
import '../styles/type-new.css'


export default function Typewriter() {
    return (
        // <div className="container">
        //     <h3>Client</h3>
        //     <p class="line-1 anim-typewriter">So how much money are you going to make me?</p>

        //     <h3>SeekSocial</h3>
        //     <p class="line-2 anim-typewriter-line2">Everyone's different... But we've made our</p> 
        //     <p class="line-3 anim-typewriter-line3">clients over £92 million so far...</p>
        // </div>

        <section>
            <div>
                <h3>Client:</h3>
                <p className="line-1">So how much money are you going to make me?</p>
            </div>

            <div className="seek">
                <h3>SeekSocial:</h3>
                <p className="line-2">Everyone's different, But we've made our clients over £92 million so far...</p>
            </div>

            <div>
                <h3>Client:</h3>
                <p className="line-3">Holy S#*t...</p>
            </div>
            
        </section>

    )
}