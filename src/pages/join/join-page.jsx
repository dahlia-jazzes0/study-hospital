import styles from './join-page.module.css';
import { useForm } from './hooks/use-form';

import { useState } from 'react';

import { TermsStep } from './components/terms-step';
import { UserInfoStep } from './components/user-info-step';
import { JoinSuccessStep } from './components/join-success-step';

export function JoinPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isIdChecked, setIsIdChecked] = useState(false);
  const [agreeAll, setAgreeAll] = useState(false);

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
    'receiveEmail',
    'receiveSMS',
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
    receiveEmail: '',
    receiveSMS: '',
  };

  const { formData, formErrors, handleChange, validate, submitRegistration } =
    useForm(requiredFields, initialFormData);
  const [agreeError, setAgreeError] = useState(false);

  const handleNext = async () => {
    if (currentStep === 1) {
      if (!agreeAll) {
        setAgreeError(true);
        return;
      }
      setAgreeError(false);
      window.scrollTo(0, 0);
      setCurrentStep(2);
      return;
    }

    if (currentStep === 2) {
      const isValid = validate({ isIdChecked });
      if (!isValid) return;

      const result = await submitRegistration();

      if (result.success) {
        window.scrollTo(0, 0);
        setCurrentStep(3);
      }
    }
  };

  return (
    <div className={styles.joinMain}>
      <section>
        <h2 className="sr-only">회원가입 단계</h2>
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
        <h2 className="sr-only">단계별 페이지 내용</h2>
        {currentStep === 1 && (
          <TermsStep
            agreeAll={agreeAll}
            setAgreeAll={setAgreeAll}
            agreeError={agreeError}
          />
        )}
        {currentStep === 2 && (
          <UserInfoStep
            formData={formData}
            formErrors={formErrors}
            handleChange={handleChange}
            setIsIdChecked={setIsIdChecked}
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
