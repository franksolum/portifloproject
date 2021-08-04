import author from "../frank.png";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                      <img className="profile-img" src={author} alt="author..." />
                    </div>
                 
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="aboutme-heading"> About me</h1>
                     <p>
                   Hello I am Franklin. I have been developing websites for the past 3years. I am a fullstack web Developer
The technology i used include MERN(MongoDB, Express, React and Node.js).

I create a responsive website that are displayed on all devices desktops and smartphones.

I am ready to do this for You before we begin our design, we sit down together to discuss about the website features in details. I will conduct User Research to help to improve your service provision to your customer.
                 </p>
                </div>

            </div>
        </div>
    );
}

export default AboutMe;
