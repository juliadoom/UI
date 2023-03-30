import "./styles.sass";

export default function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Navbar2 />
      <div>
        <Summit />
        <Setup />
        <Attendee />
        <Step1 />
        <Step2 />
        <Step3 />
      </div>
    </div>
  );
}

function Navbar1() {
  return (
    <nav>
      <div className="nav1">
        <img src="rf.png" alt="image" />
        <br />
        <br />
        <img src="Icon.png" alt="icon" />
      </div>
      <div className="img-bottom">
        <img classNAme="img-bottom" src="fl.png" alt="initials" />
      </div>
    </nav>
  );
}

function Navbar2() {
  return (
    <nav>
      <div className="nav2">
        <h4>RainFocus Summit</h4>
        <div className="row">
          <p className="navp">Lehi, Ut &nbsp; · &nbsp; </p>
          <p className="navp">December 15th</p>
        </div>
        <div className="search">
          <img className="imgsearch" src="search.png" alt="search" />
          <p>&nbsp; Search</p>
        </div>
        <br />
        <div className="row">
          <img className="imgselector" src="circle.png" alt="other" />
          <p className="selector">&nbsp; Guide</p>
        </div>
        <div className="active-select">
          <div className="row">
            <img className="imgselector" src="acolor.png" alt="active" />
            <p className="active-selector">&nbsp; Attendees</p>
          </div>
        </div>
        <div className="row">
          <p className="dropdown">Attendees</p>
        </div>
        <div className="row">
          <p className="dropdown">Attendee types</p>
        </div>
        <div className="row">
          <p className="dropdown">Packages</p>
        </div>
        <div className="row">
          <p className="dropdown">Reg codes</p>
        </div>
        <div className="row">
          <p className="dropdown">Discounts</p>
        </div>
        <div className="row">
          <img className="imgselector" src="circle.png" alt="other" />
          <p className="selector">&nbsp; Content</p>
        </div>
        <div className="row">
          <img className="imgselector" src="circle.png" alt="other" />
          <p className="selector">&nbsp; Exhibitors</p>
        </div>
      </div>
    </nav>
  );
}

function Summit() {
  return (
    <section>
      <div class="row">
        <div>
          <img src="icon-big.png" alt="icon large" />
        </div>
        <div>
          <h1>Summit</h1>
          <p className="summit">December 15th</p>
          <p className="summit">Lehi, Utah</p>
        </div>
        <div>
          <button>Edit event</button>
        </div>
      </div>
    </section>
  );
}

function Setup() {
  return (
    <section>
      <div>
        <div>
          <h2>Event setup guide</h2>
          <p>
            See the available list of modules below. We suggest that you start
            with the attendee module.
          </p>
          <br />
          <hr />
        </div>
      </div>
    </section>
  );
}

function Attendee() {
  return (
    <section>
      <div>
        <div className="row">
          <img src="person-portal.png" alt="person icon" />
          <h3>&emsp; Attendee</h3>
        </div>
      </div>
    </section>
  );
}

function Step1() {
  return (
    <section>
      <div className="row">
        <div>
          <p>
            <strong>Step 1: </strong> Base Settings.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="col">
          <p>
            <strong>General</strong>
          </p>
          <p>Define Attendee types & attributes</p>
        </div>
        <div className="col">
          <p>
            <strong>Title</strong>
          </p>
          <p>
            Description that explains the value goes here. Description that
            explains the value goes here.
          </p>
        </div>
        <div className="col">
          <p>
            <strong>Title</strong>
          </p>
          <p>
            Description that explains the value goes here. Description that
            explains the value goes here.
          </p>
        </div>
        <div className="col-hidden"></div>
      </div>
    </section>
  );
}

function Step2() {
  return (
    <section>
      <div className="row">
        <div>
          <p>
            <strong>Step 2: </strong> Build registration workflows.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="containersm">
          <div className="col">
            <div className="row-icon">
              <img src="Shape.png" alt="arrow" />
              <p>
                <strong>&emsp; Attendee Registration</strong>
              </p>
            </div>
            <p>Start by creating a general registration workflow</p>
          </div>
        </div>
        <div className="containersm">
          <div className="col">
            <div className="row-icon">
              <img src="Shape.png" alt="arrow" />
              <p>
                <strong>&emsp; Attendee Registration</strong>
              </p>
            </div>
            <p>Start by creating a general registration workflow</p>
          </div>
        </div>
        <div className="containersm">
          <div className="col">
            <div className="row-icon">
              <img src="Shape.png" alt="arrow" />
              <p>
                <strong>&emsp; Attendee Registration</strong>
              </p>
            </div>
            <p>Start by creating a general registration workflow</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="containersm">
          <div className="col">
            <div className="add">
              <img src="add-circle-outline.png" alt="add icon" />
            </div>
            <p>Add Registration Workflow</p>
          </div>
        </div>
        <div className="containerh">
          <div className="col">
            <div className="row-icon">
              <img src="Shape.png" alt="arrow" />
            </div>
            <p>Add Registration Workflow</p>
          </div>
        </div>
        <div className="containerh">
          <div className="col-hidden">
            <div className="row-icon">
              <img src="Shape.png" alt="arrow" />
            </div>
            <p>Add Registration Workflow</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step3() {
  return (
    <section>
      <div className="row">
        <div>
          <p>
            <strong>Step 3: </strong> Design post-registration experiences.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="containersm">
          <div className="col">
            <div className="row">
              <img src="desktop.png" alt="desktop" />
              <p>
                <strong>&emsp; Attendee Registration</strong>
              </p>
            </div>
            <p>
              Manage the portal that attendees will see after they’ve register
              for your event.
            </p>
          </div>
        </div>
        <div className="containerh">
          <div className="col">
            <div className="row">
              <img src="desktop.png" alt="desktop" />
              <p>
                <strong>&emsp; Attendee Registration</strong>
              </p>
            </div>
            <p>
              Manage the portal that attendees will see after they’ve register
              for your event.
            </p>
          </div>
        </div>
        <div className="containerh">
          <div className="col">
            <div className="row">
              <img src="desktop.png" alt="desktop" />
              <p>
                <strong>&emsp; Attendee Registration</strong>
              </p>
            </div>
            <p>
              Manage the portal that attendees will see after they’ve register
              for your event.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
