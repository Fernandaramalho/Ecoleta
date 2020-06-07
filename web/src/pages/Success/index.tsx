import React from 'react';
import './styles.css';
import { FcApproval } from "react-icons/fc";
import Delay  from 'react-delay-render';

const Success = () => {
  
  return (
   <div id="page-home" >
     <div className="content">
        <main>  
            <span >
              <FcApproval size={'50%'}/>
              <h1>Cadastro Concluído.</h1>
            </span>           
        </main>
     </div>
   </div>
  )
}
export default Delay({delay: 500, onRender: "/"})(Success);

