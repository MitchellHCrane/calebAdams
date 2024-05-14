import "../css/getStarted.css";
import GetStartedItem from "../Components/GetStartedItem";

function GetStarted() {
  return (
    <div className="getStarted-div" id="getStarted">
      <div className="getStartedBackground">
        <h2 className="getStartedH2">Resources</h2>
        <p className="getStartedP">
          Here are some helpful links to get you started with the purchase of
          your next home.
        </p>
      </div>
      <div className="grid-container">
        <GetStartedItem
          title="Loan Application"
          description="Create your account to apply with
          First Class Home Mortgage."
          url="https://firstclasshomemortgage.my1003app.com/2281316/register"
          iconName="applicationIcon"
          btnText="Start Application"
        />
        {/* <GetStartedItem
          title="Framework Loan Education"
          description="Educate yourself for smart homeownership with Framework, you’ll navigate every step of the process with confidence."
          url="https://uwm.frameworkhomeownership.org/"
          iconName="loanEducationIcon"
          btnText="Start Learning"
        /> */}
        <GetStartedItem
          title="CreditSmart Loan Education"
          description="Be confident about your finances. Our lessons will empower you to make educated decisions throughout the homebuying process."
          url="https://creditsmart.freddiemac.com/paths/homebuyer-u/"
          iconName="loanEducationIcon"
          btnText="Start Learning"
        />
        {/* Does not have a guardian link yet  */}
        {/* <GetStartedItem
          title="Upload Documents"
          description="Safely and securely send documents through DocumentGuardian."
          url="https://documentguardian.com/filedrop/"
          iconName="uploadDocumentIcon"
          btnText="Upload Documents"
        /> */}
        {/* <GetStartedItem
          title="Schedule Strategy Appointment"
          description="Click to schedule a strategy appointment."
          url=""
          iconName="strategyBoard"
          btnText="Schedule"
        /> */}
        <GetStartedItem
          title="Leave a Review"
          description="Thank you for choosing First Class Home Mortgage. It’s my priority to continue providing quality service to my customers. Tell me about your experience."
          url="https://g.page/r/CStPPIWpW1rHEAg/review"
          iconName="reviewIcon"
          btnText="Write Review"
        />
      </div>
    </div>
  );
}

export default GetStarted;
