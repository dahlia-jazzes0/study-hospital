import styles from './join-page.module.css';
import { useValidation } from './hooks/use-validation';

import { useState } from 'react';

import { TermsStep } from './components/terms-step';
import { UserInfoStep } from './components/user-info-step';
import { JoinSuccessStep } from './components/join-success-step';

export function JoinPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const requiredFields = [
    'userId',
    'userPw',
    'pwCheck',
    'userName',
    'userNumber',
    'userBirth',
    'emailId',
    'emailDomain',
    'userAddress',
  ];

  const initialFormData = {
    userId: '',
    userPw: '',
    pwCheck: '',
    userName: '',
    userNumber: '',
    emailId: '',
    emailDomain: '',
    userBirth: '',
    userAddress: '',
  };

  const { formData, formErrors, handleChange, validate } = useValidation(
    requiredFields,
    initialFormData
  );

  const handleNext = () => {
    if (currentStep === 2) {
      if (!validate()) return;
    }
    window.scrollTo(0, 0);
    setCurrentStep((prev) => (prev < 3 ? prev + 1 : prev));
  };

  return (
    <div className={styles.joinMain}>
      <section>
        <h2 className={styles.srOnly}>회원가입 단계</h2>
        <ul id="joinStepNav" className={styles.joinStepNav}>
          <li className={currentStep === 1 ? styles.joinActive : ''}>
            <span>STEP1</span>
            약관동의
          </li>
          <li className={currentStep === 2 ? styles.joinActive : ''}>
            <span>STEP2</span>
            회원정보입력
          </li>
          <li className={currentStep === 3 ? styles.joinActive : ''}>
            <span>STEP3</span>
            회원가입완료
          </li>
        </ul>
      </section>

      <section>
        <h2 className={styles.srOnly}>단계별 페이지 내용</h2>
        {currentStep === 1 && <TermsStep />}
        {currentStep === 2 && (
          <UserInfoStep
            formData={formData}
            formErrors={formErrors}
            handleChange={handleChange}
          />
        )}
        {currentStep === 3 && <JoinSuccessStep />}
      </section>

      {currentStep !== 3 && (
        <button className={styles.joinStepNext} onClick={handleNext}>
          확인
        </button>
      )}
    </div>
  );
}
