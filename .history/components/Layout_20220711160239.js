
import Link from "next/link";
import Head from "next/head"
const contentContainer = {
   border: "1px solid #2a2a2a",
   boxShadow: "0 0 5px #b1b1b1",
   marginTop: "20px",
   padding: "0 0px 90px",
   backgroundColor: "#ffffff",
   width: "720px",
   margin: "auto",
   height: "80vh",
   margin: "20px",
   overflow: "hidden"
}

export default(props) => {
   return (
      <div style={contentContainer}>
            <Head>
             <title>My NEXT Portfolio</title>
            </Head>
         <header class="navigation">
         <Link href="/">
                  <a>About Me</a>
         </Link>
   
         <Link href="/projects">
            <a>Projects</a>
         </Link>

         <Link href="/contact">
            <a>Contact</a>
         </Link>
        
         <style>{

         `

         
         `
         }</style>
         </header>

         <div className="children" >
         {props.children}
         </div>



      </div>
   );
}
