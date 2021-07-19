import './Banner.css'
import Button from "../ButtonComponent/Button"

function Banner(props){
    //background img, button text, button number

    return(
        <div>
            <container className='container'>
            <h1>{props.title}</h1>
            <p>{props.paragraphText}</p>
            <Button
                buttonText={props.buttonText}
            />
            </container>
            
        </div>
        )
}


export default Banner