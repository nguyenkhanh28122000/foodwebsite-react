import "./button.css"

function Button({ btnMove, btnStand, btnSubmit, children }) {
    return (
        <>
            {
                btnSubmit ?
                <input type="submit" value="order now" className={`btn ${ btnMove&&'btnMove' } ${ btnStand&&'btnStand' }`}></input>
                :
                <a href="#" className={`btn ${ btnMove&&'btnMove' } ${ btnStand&&'btnStand' }`}>{children}</a>
            }
        </>
    )
}

export default Button