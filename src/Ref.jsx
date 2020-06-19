import React from 'react'

const Ref = React.forwardRef((props,ref) => {
    return (
        <div>
         <input text="" ref={ref}/>   
        </div>
    )
})

export default Ref
