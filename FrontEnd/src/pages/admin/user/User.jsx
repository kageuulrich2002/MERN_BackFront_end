import { useNavigate } from "react-router-dom";
export default  function User (){

    let naviger = useNavigate()
    const kud = (userId) => {
            console.log()
            naviger("../edit/"+userId)
    }
    return (

        <div className="">
          user liste <br/>
          <button onClick={() =>kud(204)}
           className=" border-indigo-600">
            Param</button> 
            
        </div>
    );
}
