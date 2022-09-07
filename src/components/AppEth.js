import React, { useState, useEffect } from 'react'

export const AppEth = () =>{

    const [haveMetamask, sethaveMetamask] = useState(true);
    useEffect(() => {

    const {ethereum} = window;
    const checkMetamaskAvailability = async () => {
        if (!ethereum) {
            sethaveMetamask(false);
        }
        sethaveMetamask(true);
    };
    checkMetamaskAvailability();
}, []);

    const isInstalled = () =>{
        if(haveMetamask === false) {
            return ("Tienes que instalar la extension de metamask")
        } else {
            return ("Tienes Metamask Instalado")
        }
    }



    return (
      <div>
        <p>{isInstalled()}</p>
      </div>
    )
  }

export default AppEth;