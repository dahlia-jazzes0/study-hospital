import './join-page.css';

import { useState } from 'react';

export function JoinPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prev) => (prev < 3 ? prev + 1 : prev));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <div>step1</div>;
      case 2:
        return <div>step2</div>;
      case 3:
        return <div>step3</div>;
      default:
        return <div>step1</div>;
    }
  };

  return (
    <div className="joinMain">
      <section>
        <h2 className="sr-only">회원가입 단계</h2>

        <ul id="joinStepNav">
          <li className={currentStep === 1 ? 'joinActive' : ''}>
            <span>STEP1</span>
            약관동의
          </li>
          <li className={currentStep === 2 ? 'joinActive' : ''}>
            <span>STEP2</span>
            회원정보입력
          </li>
          <li className={currentStep === 3 ? 'joinActive' : ''}>
            <span>STEP3</span>
            회원가입완료
          </li>
        </ul>
      </section>

      <section>
        <h2 className="sr-only">단계별 페이지 내용</h2>
        {renderStepContent()}
      </section>

      {currentStep !== 3 && (
        <button className="joinStepNext" onClick={handleNext}>
          확인
        </button>
      )}
    </div>
  );
}
