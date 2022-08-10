import React from 'react';

const FirstCalculator = () => {
    return ( <
        div >
        <
        div className = "container" >
        <
        div className = "calculator" >
        <
        div className = "c-wrapper" >
        <
        div className = "ctc c-type" >
        <
        h2 className = "display-5 fw-bolder text-center text-white p-3" >
        Calculator <
        /h2> <
        div className = "ctc c-screen" >
        Calculation Screen <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>
    );
}

export default FirstCalculator;














































































































































// import { useState } from "react";
// import "./firstCalculator.css";

// export default function FirstCalculator() {
//   const [val, setVal] = useState("");

//   const backspace = () => {
//     try {
//       setVal(val.slice(0, -1));
//     } catch (error) {
//       setVal("");
//     }
//   };

//   const calculate = (e) => {
//     try {
//       setVal(eval(val));
//     } catch {
//       e.preventDefault();
//       setVal("");
//     }
//   };

//   const percentage = () => {
//     try {
//       setVal(val / 100);
//     } catch (error) {
//       setVal("");
//     }
//   };
//   return (
//     <div>
//       <div className="container my-2">
//         <div className="row d-flex justify-content-center">
//           <div className="col-12">
//             <h1 className="display-5 fw-bolder text-center text-white ">
//               Calculator{" "}
//             </h1>{" "}
//           </div>{" "}
//         </div>{" "}
//         <div className=" container-calculator ">
//           <div className="d-flex justify-content-center row row p-2 m-2 text-default card">
//             <input
//               name="value"
//               className="form-control-lg mb-2 mt-2 text-right fs-4 text-default"
//               value={val}
//               onChange={(e) => setVal(e.target.value)}
//             ></input>{" "}
//             <div className="d-flex justify-content-around row row-col-4 mb-2 mt-0 flex-nowrap flex-sm-row">
//               <div className="operators col-6 border border-5 btn btn-light text-default shadow fs-4">
//                 <button
//                   className="border-0"
//                   value="AE"
//                   onClick={() => backspace()}
//                 >
//                   AC{" "}
//                 </button>{" "}
//               </div>{" "}
//               <div className=" operators col border border-5 btn btn-light text-default shadow fs-4">
//                 <button
//                   className="border-0"
//                   value="%"
//                   onClick={() => percentage()}
//                 >
//                   %
//                 </button>{" "}
//               </div>{" "}
//               <div className="operators col border border-5 btn btn-light text-default shadow fs-4">
//                 <button
//                   className="border-0"
//                   value="/"
//                   onClick={(e) => setVal(val + e.target.value)}
//                 >
//                   {" "}
//                   ÷{" "}
//                 </button>{" "}
//               </div>{" "}
//             </div>{" "}
//             <div className="d-flex justify-content-around row row-col-4 mb-2 mt-0 flex-nowrap flex-sm-row">
//               <div className="digits col border border-5 btn btn-light text-default shadow fs-4">
//                 <button
//                   value="7"
//                   className="border-0"
//                   onClick={(e) => setVal(val + e.target.value)}
//                 >
//                   7{" "}
//                 </button>{" "}
//               </div>{" "}
//               <div className="digits col border border-5 btn btn-light text-default shadow fs-4">
//                 <button
//                   className="border-0"
//                   value="8"
//                   onClick={(e) => setVal(val + e.target.value)}
//                 >
//                   8{" "}
//                 </button>{" "}
//               </div>{" "}
//               <div className="digits col border border-5 btn btn-light text-default shadow fs-4">
//                 <button
//                   className="border-0"
//                   value="9"
//                   onClick={(e) => setVal(val + e.target.value)}
//                 >
//                   9{" "}
//                 </button>{" "}
//               </div>{" "}
//               <div className="operators col border border-5 btn btn-light text-default shadow fs-4">
//                 <button
//                   className="border-0"
//                   value="*"
//                   onClick={(e) => setVal(val + e.target.value)}
//                 >
//                   X{" "}
//                 </button>{" "}
//               </div>{" "}
//             </div>{" "}
//             <div className="d-flex justify-content-around row row-col-4 mb-2 mt-0 flex-nowrap flex-sm-row">
//               <div className="digits col border border-5 btn btn-light text-default shadow fs-4">
//                 <button
//                   className="border-0"
//                   value="4"
//                   onClick={(e) => setVal(val + e.target.value)}
//                 >
//                   4{" "}
//                 </button>{" "}
//               </div>{" "}
//               <div className="digits col border border-5 btn btn-light text-default shadow fs-4">
//                 <button
//                   className="border-0"
//                   value="5"
//                   onClick={(e) => setVal(val + e.target.value)}
//                 >
//                   5{" "}
//                 </button>{" "}
//               </div>{" "}
//               <div className="digits col border border-5 btn btn-light text-default shadow fs-4">
//                 <button
//                   className="border-0"
//                   value="6"
//                   onClick={(e) => setVal(val + e.target.value)}
//                 >
//                   6{" "}
//                 </button>{" "}
//               </div>{" "}
//               <div className="operators col border border-5 btn btn-light text-default shadow fs-4">
//                 <button
//                   className="border-0"
//                   value="+"
//                   onClick={(e) => setVal(val + e.target.value)}
//                 >
//                   +
//                 </button>{" "}
//               </div>{" "}
//             </div>{" "}
//             <div className="d-flex justify-content-around row row-col-4 mb-2 mt-0 flex-nowrap flex-sm-row">
//               <div className="digits col border border-5 btn btn-light text-default shadow fs-4">
//                 <button
//                   className="border-0"
//                   value="1"
//                   onClick={(e) => setVal(val + e.target.value)}
//                 >
//                   1{" "}
//                 </button>{" "}
//               </div>{" "}
//               <div className="digits col border border-5 btn btn-light text-default shadow fs-4">
//                 <button
//                   className="border-0"
//                   value="2"
//                   onClick={(e) => setVal(val + e.target.value)}
//                 >
//                   2{" "}
//                 </button>{" "}
//               </div>{" "}
//               <div className="digits col border border-5 btn btn-light text-default shadow fs-4">
//                 <button
//                   className="border-0"
//                   value="3"
//                   onClick={(e) => setVal(val + e.target.value)}
//                 >
//                   3{" "}
//                 </button>{" "}
//               </div>{" "}
//               <div className="operators col border border-5 btn btn-light text-default shadow fs-4">
//                 <button
//                   className="border-0"
//                   value="-"
//                   onClick={(e) => setVal(val + e.target.value)}
//                 >
//                   -
//                 </button>{" "}
//               </div>{" "}
//             </div>{" "}
//             <div className="d-flex justify-content-around row row-col-4 mb-2 mt-0 flex-nowrap flex-sm-row">
//               <div className="digits col border border-5 btn btn-light text-default shadow fs-4">
//                 <button
//                   className="border-0"
//                   value="."
//                   onClick={(e) => setVal(val + e.target.value)}
//                 >
//                   .{" "}
//                 </button>{" "}
//               </div>{" "}
//               <div className="digits col-6 border border-5 btn btn-light text-default shadow fs-4">
//                 <button
//                   className="border-0"
//                   value="0"
//                   onClick={(e) => setVal(val + e.target.value)}
//                 >
//                   0{" "}
//                 </button>{" "}
//               </div>{" "}
//               <div className="digits col border border-5 btn btn-light text-default shadow fs-4">
//                 <button
//                   className="border-0"
//                   value="="
//                   onClick={() => calculate()}
//                 >
//                   {" "}
//                   ={" "}
//                 </button>{" "}
//               </div>{" "}
//             </div>{" "}
//           </div>{" "}
//         </div>{" "}
//       </div>{" "}
//     </div>
//   );
// }