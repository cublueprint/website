
import Banner from "../banner/Banner"
import './HomePage.css'

export default function HomePage(){
    /* 
                navbar
                banner: tech for social good
                infoSection: about us (title)
                title: get involved
                infoSection:students
                infoSection: nonprofit orgs
                banner: contact us
                footer
             */
    return(
        <div>
            <Banner
                title='Tech for Social Good'
                paragraphText = "We're a team of students at Carleton University that develops pro-bono apps for nonprofits and promotes tech for social good."
                buttonText= "Learn More"
            />
            
        </div>
    )

}