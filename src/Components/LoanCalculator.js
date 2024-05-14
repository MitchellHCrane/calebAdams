import "../css/loanCalculator.css";
import MortgageCalculator from "mortgage-calculator-react";

function LoanCalculator() {
  return (
    <div className="loanCalculator-div">
      <div className="loanCalcText">
        <h2>Loan Calculator</h2>
        <p>Get an estimate of your monthly mortgage payments.</p>

        <p className="small">
          * For a more accurate estimate, get in touch with me and I will help
          you find the best solution for your needs.
        </p>
      </div>
      <div className="mortgageCalculator">
        <MortgageCalculator
          price={500000}
          downPayment={100000}
          interestRate={0.035}
          months={360}
          additionalPrincipalPayment={0}
          insuranceRate={0}
          taxRate={0}
          mortgageInsuranceEnabled={false}
        />
      </div>
    </div>
  );
}

export default LoanCalculator;
