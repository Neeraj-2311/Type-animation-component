import { useState, useEffect } from "react";

export const Example = () => {
    
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Hi ✋", "I'm Neeraj", "a MERN stack Developer", "Connect me on my socials" ];
  // you can set your own period accordingly
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        
        return () => { clearInterval(ticker) };
        // eslint-disable-next-line
    }, [text])

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta/2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(250);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }

    return (
        <div>
            <h1 style={{ textAlign: "center", margin: "50px auto", textDecoration: "underline" }}>Type animation using React</h1>
            <h2 style={{ display: "flex", justifyContent: "center", margin: "auto", textAlign: "center", color: "gray"}}>
                {text}
                <div style={{
                        position: 'relative',
                        left: 0, 
                        width: "2px",
                        backgroundColor: 'gray'
                }}></div>
            </h2>
            <h3 style={{ textAlign: "center", margin: "50px 0"}}>Give a start to this repo: <a href="https://github.com/Neeraj-2311/Type-animation-component" rel="noreferrer" target="_blank" style={{ color: "lightblue", marginLeft: "10px"}}>Here</a></h3>
        </div>
    )
}
