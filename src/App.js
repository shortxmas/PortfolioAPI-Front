import Logo from "./assets/logoletters4.png"

function App() {
  
  
  

  return (

    <>
        <>
      <div className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <div className="navbar-brand">
              
              
              <div className="nav-link">
                  <img src={Logo} width="85" className="d-inline-block align-top" alt=""></img>
              </div>
              
              

          </div>
          
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav navbar-right">
              
            </ul>
          </div>
          <span className="navbar-text">Leighton's Porfolio API</span>
        </div>
      </div>
      <div className="container" style={{ padding: 50 }}>
        <div className="jumbotron">
          <h1>Documentation</h1>
        </div>
        <div className="card" style={{ marginTop: 50 }}>
          <div className="card-body">
            <h2 className="card-title">Overview</h2>
            <h5 style={{ fontWeight: 400 }}>
              <p>
                This API is divided into four major sections. About me, Resume, Projects
                and Contacts, respectively. Documentation to send HTTP requests for your respective langauge
                is recommended as different langauges have different ways 
                to do so. The root of this API is hosted at <code>https://portfolio-api-server-rxzz.vercel.app/</code>
              </p>
            </h5>
          </div>
        </div>
        <div className="card" style={{ marginTop: 50 }}>
          <div className="card-body">
            <h2 className="card-title">About me</h2>
            <h5 style={{ fontWeight: 400 }}>
              <p>
                Fecthing the about me will return my "about me" in a string format.
              </p>
            </h5>
            <div className="card">
              <div className="card-body">
                <code>https://portfolio-api-server-rxzz.vercel.app/aboutme/</code>
                
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: 50 }}>
          <div className="card-body">
            <h2 className="card-title">Resume</h2>
            <h5 style={{ fontWeight: 400 }}>
              <p>
                The resume is split into 6 sections. About, Summary, Experience, Personal Projects,
                Education and Skills, respectively. Fetching the resume with the following
                link will return an object consisting of all of the resume sections and 
                their respective information.
              </p>
            </h5>
            <div className="card">
              <div className="card-body">
                <code>https://portfolio-api-server-rxzz.vercel.app/resume/</code>
                
              </div>
            </div>
            <br></br>
            <h5 style={{ fontWeight: 400 }}>
              <p>
                To fetch only a certain section within the resume, you would add the 
                name of the section to the end of the fetch resume URL.
              </p>
            </h5>
            <div className="card">
              <div className="card-body">
                <code>https://portfolio-api-server-rxzz.vercel.app/resume/about</code>
                <br></br>
                <code>https://portfolio-api-server-rxzz.vercel.app/resume/summary</code>
                <br></br>
                <code>https://portfolio-api-server-rxzz.vercel.app/resume/experience</code>
                <br></br>
                <code>https://portfolio-api-server-rxzz.vercel.app/resume/projects</code>
                <br></br>
                <code>https://portfolio-api-server-rxzz.vercel.app/resume/education</code>
                <br></br>
                <code>https://portfolio-api-server-rxzz.vercel.app/resume/skills</code>
                
              </div>
            </div>

          </div>
        </div>

        <div className="card" style={{ marginTop: 50 }}>
          <div className="card-body">
            <h2 className="card-title">Projects</h2>
            <h5 style={{ fontWeight: 400 }}>
              <p>
                Fecthing the projects will return all of my 
                personal projects in a the form of project objects.
              </p>
            </h5>
            <div className="card">
              <div className="card-body">
                <code>https://portfolio-api-server-rxzz.vercel.app/projects/</code>
                
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: 50 }}>
          <div className="card-body">
            <h2 className="card-title">Contact</h2>
            <h5 style={{ fontWeight: 400 }}>
              <p>
                Fecthing the contacts will return all of my 
                contact information in a the form of an object
                with its respective attributes.
              </p>
            </h5>
            <div className="card">
              <div className="card-body">
                <code>https://portfolio-api-server-rxzz.vercel.app/contact/</code>
                
              </div>
            </div>
          </div>
        </div>
        
        
        
        <div className="card" style={{ marginTop: 50 }}>
          <div className="card-body">
            <h2 className="card-title">Help</h2>
            <h5 style={{ fontWeight: 400 }}>
              <p>
                If the API isn't working how it is supposed to, please send
                me a message about the issue.
                <br></br>
                <br></br>
                <form
                action="https://backendform.com/sendform.php/leightonmiguelweb@gmail.com"
                method="get"
                >
                  <input name ="name" placeholder="Name" required></input>
                  <input name = "message" placeholder="Message"required></input>
                  <input type="hidden" name="fromwebsite" defaultValue="portfolio api" />
                  <br></br>
                  <br></br>
                  <button type="submit" className="btn btn-success " style={{backgroundColor:'#137a63'}}>Submit</button>
                        
                </form>
                
              </p>
            </h5>
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>

    </>

    </>
    
  );
}

export default App;
