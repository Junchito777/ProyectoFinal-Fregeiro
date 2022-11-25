import React from 'react';

const Test = ({condicion}) => {

       return(
        <>
            {condicion ? <h2>hola</h2> : <h3>buenasss</h3>}
        </>
       )

}

export default Test;


// return(
//     <>
//     {condicion && <h2>Hola</h2>}
//     {!condicion && <h2>buenas tardes</h2>}
//     </>