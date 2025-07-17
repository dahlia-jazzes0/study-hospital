import styles from '../join-page.module.css';
import { InputField } from './fields/input-field';
import { EmailField } from './fields/email-field';
import { AddressField } from './fields/address-field';
import { RadioField } from './fields/radio-field';
import { CheckBoxField } from './fields/checkbox-field';

import {
  DomainOptions,
  JoinRouteOptions,
  InterestDiseaseOptions,
  CommonOptions,
} from '../constants/options';

export const UserInfoStep = ({ formData, formErrors, handleChange }) => {
  return (
    <div>
      <form className={styles.joinForm}>
        <InputField
          id="joinUserId"
          type="text"
          label="아이디"
          placeholder="영문, 숫자만 입력가능, 최소 4자이상 입력"
          ariaLabel="아이디 입력 필수입력란"
          value={formData.userId}
          onChange={handleChange('userId')}
          hasError={formErrors.userId}
        />

        <InputField
          id="joinUserPw"
          type="password"
          label="비밀번호"
          placeholder="영문, 숫자 포험 6~20자리 구성, 특수기호 제외"
          ariaLabel="비밀번호 입력 필수입력란"
          value={formData.userPw}
          onChange={handleChange('userPw')}
          hasError={formErrors.userPw}
        />

        <InputField
          id="joinPwCheck"
          type="password"
          label="비밀번호확인"
          ariaLabel="비밀번호 확인 입력 필수입력란"
          value={formData.pwCheck}
          onChange={handleChange('pwCheck')}
          hasError={formErrors.pwCheck}
        />

        <InputField
          id="joinUserName"
          type="text"
          label="성명"
          ariaLabel="성명 입력 필수입력란"
          value={formData.userName}
          onChange={handleChange('userName')}
          hasError={formErrors.userName}
        />

        <InputField
          id="joinUserNumber"
          type="number"
          label="연락처"
          placeholder="'-' 제외 숫자만 입력하세요."
          ariaLabel="연락처 입력 필수입력란"
          value={formData.userNumber}
          onChange={handleChange('userNumber')}
          hasError={formErrors.userNumber}
        />

        <EmailField
          id="joinUserEmailId"
          type="text"
          label="이메일"
          placeholder="이메일 아이디 입력"
          domainOptions={DomainOptions}
          ariaLabel="이메일 아이디 입력 필수입력란"
          emailIdValue={formData.emailId}
          emailDomainValue={formData.emailDomain}
          onEmailIdChange={handleChange}
          onEmailDomainChange={handleChange}
          hasError={formErrors.emailId || formErrors.emailDomain}
          emailIdError={formErrors.emailId}
          emailDomainError={formErrors.emailDomain}
        />

        <AddressField
          id="searchAddressInput"
          type="text"
          label="주소"
          ariaLabel="주소 입력"
          value={formData.userAddress}
          onChange={handleChange('userAddress')}
          hasError={formErrors.userAddress}
        />

        <InputField
          id="joinBirth"
          type="number"
          label="생년월일"
          placeholder="YYYYMMDD"
          ariaLabel="생년월일 입력 필수입력란"
          value={formData.userBirth}
          onChange={handleChange('userBirth')}
          hasError={formErrors.userBirth}
        />

        <RadioField
          id="joinRoute"
          className={styles.joinRoute}
          name="joinRoute"
          label="가입경로"
          options={JoinRouteOptions}
          ariaLabel="가입경로 선택"
        />

        <CheckBoxField
          id="interestDisease"
          className={styles.interestDisease}
          label="관심질환"
          options={InterestDiseaseOptions}
          ariaLabel="관심질환 선택 (복수선택 가능)"
        />

        <RadioField
          id="receiveEmail"
          className={styles.receiveEmail}
          name="receiveEmail"
          label="이메일 수신여부"
          options={CommonOptions.YES_NO}
          ariaLabel="이메일 수신 여부 선택 필수입력란"
        />

        <RadioField
          id="receiveSMS"
          className={styles.receiveSMS}
          name="receiveSMS"
          label="SMS 수신여부"
          options={CommonOptions.YES_NO}
          ariaLabel="SMS 수신 여부 선택 필수입력란"
        />
      </form>
    </div>
  );
};
