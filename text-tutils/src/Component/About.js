import React from 'react'

export const About = (props) => {


    // const [btntext,setBtnText]=useState("Enable Dark Mode");
    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor: "white",
    //     color: "black"
    // })
    // document.title = "TextUtil - About";
    // const toggleMode = () => {
    //       if(myStyle.color==="black")
    //       {
    //          setMyStyle({
    //             backgroundColor: "black",
    //             color: "white",
    //             border:"1px solid white"
    //          })
    //          setBtnText("Enable Light Mode")
    //       }
    //       else{
    //         setMyStyle({
    //             backgroundColor: "white",
    //             color: "black"
    //          })
    //          setBtnText("Enable Dark Mode")
    //       }
    // }
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
        // border:'2px solid',
        // borderColor:props.mode==='dark'?'white':'#042743'
    }
    return (
        <>
            <div className="container" >
                <h1 className='my-4' style={{ color: props.mode === 'dark' ? 'white' : '#042743', }}>About Us</h1>
                <div className="accordion" id="accordionExample" >
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                               <strong> Analyze Your text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
                            <div className="accordion-body" style={myStyle}>
                                This is the first item's accordion body It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                                 These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our 
                                default variables. It's also worth noting that just  though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" >
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                               <strong>Free to use</strong> 
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" >
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                               <strong> Browser compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                            Browser Compatibility refers to the ability of a certain website or app to appear fully functional on different browsers that are available in the market. This means that your website's HTML coding, as well as the scripts on that website, should be compatible to run on all browsers your users might use
                               </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default About;