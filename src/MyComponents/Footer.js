import React from 'react'

export const Footer = () => {
    let footerStyle = {
        width: "100%",
        position: "absolute",
        top: "90vh",
        border: "2px sollid red"
    }
    return (
        <div className="bg-dark text-light py-3" style={footerStyle}>
      
            <p className="text-center">
            Copyright &copy; ToDO.com
            </p>
        </div>
    )
}
