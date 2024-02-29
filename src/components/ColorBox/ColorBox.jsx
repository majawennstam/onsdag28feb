import './ColorBox.css'

function ColorBox({colorArray}) {

    return (
    <>
    <div className="div-contaioner">
{colorArray.map((color, index) => (

    <div key={index} className="cBox" style={{backgroundColor: color}}></div>
))}

    </div>
    </>
    )
};
    

export default ColorBox;