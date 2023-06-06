
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
   margin: "20px"
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
         body {
            font-size: 15px;
            font-family: Helvetica, sans-serif;
            line-height: 1.5;
            background: #D1D1D1;
            margin: 0px;
         }

         #__next {
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            height: 100vh;
         }

         .navigation {
               overflow: hidden;
               background-color: #333;
             }
             p {
               background-color: whitesmoke;
               padding: 10px;
             }
             
             .navigation a {
               float: left;
               color: #f2f2f2;
               text-align: center;
               padding: 14px 16px;
               text-decoration: none;
               font-size: 17px;
             }
             
             .navigation a:hover {
               background-color: #ddd;
               color: black;
             }
             
             .navigation a.active {
               background-color: #04AA6D;
               color: white;
            }
            
            .children {
               padding: 20px;
               max-height: 740px;
               overflow: auto;
            }
            .card {
               box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
               transition: 0.3s;
               width: 34%;
               margin: 10px;
               padding: 5px;
             }
             
             .card:hover {
               box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
             }
             
             .card-container {
               padding: 2px 16px;
             }
             .cards{
               display: flex;
               flex-direction: row;
               flex-wrap: wrap;
               justify-content: space-evenly;
             }

             .all-cards-container {

             }
         
         `
         }</style>
         </header>

         <div className="children" >
         {props.children}
         </div>



      </div>
   );
}
