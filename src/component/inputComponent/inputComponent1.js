import "./inputComponent.css"

function InputComponent({ input1, input2 }) {
    return (
        <div className="input-body">
            <div className="input__item">
                <label htmlFor={input1.idSelect}>{input1.title}</label>
                {
                    input1.textarea ? 
                            <textarea name="" placeholder={input1.placeholder} id={input1.idSelect} cols={input1.cols} rows={input1.rows}></textarea>
                            :
                            <input type={input1.type} placeholder={input1.placeholder} id={input1.idSelect}></input>
                }
            </div>
            <div className="input__item">
                <label htmlFor={input2.idSelect}>{input2.title}</label>
                {
                    input2.textarea? 
                            <textarea name="" placeholder={input2.placeholder} id={input2.idSelect} cols={input2.cols} rows={input1.rows}></textarea>
                            :
                            <input type={input2.type} placeholder={input2.placeholder} id={input2.idSelect}></input>
                }
            </div>
        </div>
    )
}

export default InputComponent