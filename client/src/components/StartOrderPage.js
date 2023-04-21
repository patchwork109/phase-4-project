import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import getfryin from './letsgetfryin.png'

export default function StartOrderPage({onClickStartNew}) {

return (
    <div className="startOrder">
        <div id="startButton">
        <Button  variant="warning" size="lg" onClick={onClickStartNew} >Start New Order</Button> 
        </div>
        <img className="getfryinImage" src={getfryin}alt="start your order!"/>
     </div>

)
}