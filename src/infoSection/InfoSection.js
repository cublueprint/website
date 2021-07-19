
function InfoSection(props){
    //img, paragraph text, title, button

    return(
        <div>
            {/* title */}
            <p>
                {Props.paragraphText}
            </p>
            <Button
                buttonText='Learn More'
                bgColor='blue'
            />
            {/* maybe get entire button as prop */}
        </div>

    )

}
export default InfoSection