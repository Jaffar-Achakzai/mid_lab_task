import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";





function CountDownLightSwitch() {
   
    const formik = useFormik({
      
      });

    return (
<>    <div className="MId LAb TASk ">
      <h2>CountDown And Light Switch</h2>
      <form onstarttimer={formik.handlestarttimer}>
      
      
        {/* starttimer Button */}
        <br/><br/><br/>
        <button onclick={"on"}>click</button><br/>Light mode<br/>
       
        {/* starttimer Button */}
        <br/>
        <button type="starttimer">Start Timer</button>
      </form>
    </div>
</>
   );
}
export default CountDownLightSwitch;