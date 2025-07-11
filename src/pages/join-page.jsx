import './join-page.css';

import { useState } from 'react';
import { Link } from 'react-router';

const TermsStep = () => {
  return (
    <div className="joinForm">
      <h2 className="sr-only">회원가입 폼</h2>

      <section>
        <h3>회원가입약관</h3>
      </section>

      <section>
        <h3>개인정보처리취급방침</h3>
        <div className="privacyBox">
          <div className="joinTextBox">
            <p>
              모두한의원은 (이하 '병원') 환자 여러분들의 개인 정보를 소중히
              생각하며 [정보통신망 이용촉진 및 정보보호]에 관한 법률을 준수하고
              있습니다. 이에 본원은 개인정보처리방침에 따라 환자 여러분이
              제공하는 개인 정보가 어떠한 용도와 방식으로 이용되고 있으며, 이를
              위해 어떠한 조치가 취해지고 있는지 알려드립니다. 개인정보처리
              방침의 순서는 다음과 같습니다.
            </p>

            <ul>
              <li>❑수집하는 개인정보의 항목 및 수집방법</li>
              <li>❑개인정보의 수집 및 이용목적</li>
              <li>❑개인정보의 보유 및 이용기간</li>
              <li>❑개인정보의 파기절차 및 그 방법</li>
              <li>❑개인정보 제공 및 공유</li>
              <li>❑수집한 개인정보의 취급위탁</li>
              <li>❑이용자 및 법정대리인의 권리와 그 행사방법</li>
              <li>❑동의철회 / 회원탈퇴 방법</li>
              <li>
                ❑개인정보 자동 수집 장치의 설치/운영 및 그 거부에 관한 사항
              </li>
              <li>❑개인정보관리책임자</li>
              <li>❑개인정보의 안전성 확보조치</li>
              <li>❑정책 변경에 따른 공지의무</li>
              <li>
                ❑ 수집하는 개인정보의 항목 및 수집방법 병원은 회원가입 시 서비스
                이용을 위해 필요한 최소한의 개인정보만을 수집합니다. 병원의
                서비스를 이용하기 위해서는 회원가입 시 필수항목과 선택항목이
                있는데, 메일수신여부 등과 같은 선택항목은 입력하지 않더라도
                서비스 이용에는 제한이 없습니다.
              </li>
            </ul>

            <h4>[수집항목]</h4>
            <p>
              성명, 주민등록번호, 주소, 연락처, 진료기록 ※ 의료법에 의해
              고유식별정보 및 진료정보를 의무적으로 보유하여야 하여야 함(별도
              동의 불필요)
            </p>

            <h4>[개인정보 수집방법]</h4>
            <p>홈페이지 (회원가입, 상담게시판, 온라인예약 등)</p>

            <ul>
              <li>❑ 개인정보의 수집 및 이용목적</li>
            </ul>

            <p>
              병원은 수집한 개인정보를 다음의 목적을 위해 활용합니다. 이용자가
              제공한 모든 정보는 하기 목적에 필요한 용도 이외로는 사용되지
              않으며 이용 목적이 변경될 시에는 사전 동의를 구할 것입니다.
            </p>

            <h4>[진료정보]</h4>
            <p>
              진단 및 치료를 위한 진료서비스와 청구, 수납 및 환급 등의
              원무서비스 제공
            </p>

            <h4>[홈페이지 회원정보]</h4>
            <p>
              홈페이지를 통한 진료 예약, 예약조회 및 회원제 서비스를 제공하지
              않으며 인터넷상 무기명 상담만을 시행하고 있습니다. 이메일을 통한
              병원소식, 질병정보 등의 안내, 설문조사를 시행하지 않으므로
              회원정보가 사용되지 않습니다.
            </p>

            <ul>
              <li>
                ❑ 개인정보의 보유 및 이용기간
                <p>
                  병원은 개인정보의 수집목적 또는 제공받은 목적이 달성된 때에는
                  귀하의 개인정보를 지체 없이 파기합니다.
                </p>
              </li>
            </ul>

            <h4>[진료정보]</h4>
            <p>의료법에 명시된 진료기록 보관 기준에 준하여 보관</p>

            <h4>[홈페이지 회원정보]</h4>
            <p>
              회원가입이나 탈퇴가 필요하지 않는 방식의 홈페이지를 운영하고
              있습니다. 회원정보를 기입할 필요가 없습니다. 다만, 수집목적 또는
              제공받은 목적이 달성된 경우에도 상법 등 법령의 규정에 의하여
              보존할 필요성이 있는 경우에는 귀하의 개인정보를 보유할 수
              있습니다.
            </p>

            <ul>
              <li>
                - 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래
                등에서의 소비자보호에 관한 법률)
              </li>
              <li>
                - 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년 (신용정보의
                이용 및 보호에 관한 법률)
              </li>
              <li>
                - 본인 확인에 관한 기록 : 6개월 (정보통신망 이용촉진 및 정보보호
                등에 관한 법률)
              </li>
              <li>- 방문에 관한 기록 : 3개월 (통신비밀보호법)</li>
              <li>
                ❑ 개인정보의 파기절차 및 그 방법 병원은 [개인정보의 수집 및
                이용목적]이 달성된 후에는 즉시 파기합니다. 파기절차 및 방법은
                다음과 같습니다. [파기절차] 이용자가 회원가입 등을 위해 입력한
                정보는 목적이 달성된 후 파기방법에 의하여 즉시 파기합니다.
              </li>
            </ul>

            <h4>[파기방법]</h4>
            <p>
              전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적
              방법을 사용하여 삭제합니다. 종이에 출력된 개인정보는 분쇄기로
              분쇄하거나 소각하여 파기합니다.
            </p>

            <ul>
              <li>
                ❑ 개인정보 제공 및 공유
                <p>
                  병원은 귀하의 동의가 있거나 관련법령의 규정에 의한 경우를
                  제외하고는 어떠한 경우에도 [개인정보의 수집 및 이용목적]에서
                  고지한 범위를 넘어 귀하의 개인정보를 이용하거나 타인 또는
                  타기업·기관에 제공하지 않습니다
                </p>
              </li>

              <li>
                - 국민건강보험법에 의해 건강보험심사평가원에 요양급여비용 청구를
                위한 진료기록 제출
              </li>

              <li>
                - 통계작성ㆍ학술연구를 위하여 필요한 경우 특정 개인을 알아볼 수
                없는 형태로 가공하여 제공
              </li>

              <li>
                - 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
                제출 등
              </li>

              <li>
                ❑ 수집한 개인정보의 취급위탁
                <p>본 병원은 개인정보를 위탁하고 있지 않습니다.</p>
              </li>

              <li>
                ❑ 이용자 및 법정대리인의 권리와 그 행사방법
                <p>
                  만14세 미만 아동(이하 "아동"이라 함)의 회원가입은 아동이
                  이해하기 쉬운 평이한 표현으로 작성된 별도의 양식을 통해
                  이루어지고 있으며 개인정보 수집 시 반드시 법정대리인의 동의를
                  구하고 있습니다. 병원은 법정대리인의 동의를 받기 위하여
                  아동으로부터 법정대리인의 성명과 연락처 등 최소한의 정보를
                  수집하고 있으며, 개인정보취급방침에서 규정하고 있는 방법에
                  따라 법정대리인의 동의를 받고 있습니다. 아동의 법정대리인은
                  아동의 개인정보에 대한 열람, 정정 및 삭제를 요청할 수
                  있습니다. 아동의 개인정보를 열람•정정, 삭제하고자 할 경우에는
                  회원정보수정을 클릭하여 법정대리인 확인 절차를 거치신 후
                  아동의 개인정보를 법정대리인이 직접 열람•정정, 삭제하거나,
                  개인정보보호책임자로 서면, 전화, 또는 Fax등으로 연락하시면
                  필요한 조치를 취합니다. 병원은 아동에 관한 정보를 제3자에게
                  제공하거나 공유하지 않으며, 아동으로부터 수집한 개인정보에
                  대하여 법정대리인이 오류의 정정을 요구하는 경우 그 오류를
                  정정할 때까지 해당 개인정보의 이용 및 제공을 금지합니다. ※
                  법에 의해 보관이 의무화된 개인정보는 요청이 있더라도 보관기간
                  내에 수정•삭제할 수 없습니다.
                </p>
              </li>

              <li>
                ❑ 동의철회 / 회원탈퇴
                <p>
                  방법 홈페이지 회원가입이 없는 개방형 홈페이지 이므로 홈페이지
                  상 개인정보의 수집ㆍ이용 및 제공이 원천적으로 불가능합니다.
                  인터넷 문의사항의 삭제를 원하시면 개인정보관리책임자로 서면,
                  또는 이메일 등으로 연락하시면 귀하의 개인정보를 파기하는 등
                  필요한 조치를 하겠습니다.
                </p>
              </li>

              <li>
                ❑ 개인정보 자동 수집 장치의 설치/운영 및 그 거부에 관한 사항
                <p>
                  병원은 환자분들의 정보를 수시로 저장하고 찾아내는
                  '쿠키(cookie)'를 운용합니다. 쿠키란 병원의 웹사이트를
                  운영하는데 이용되는 서버가 환자분들의 브라우저에 보내는 아주
                  작은 텍스트 파일로 환자분들의 컴퓨터 하드디스크에 저장됩니다.
                  병원은 다음과 같은 목적을 위해 쿠키를 사용합니다. 환자분들은
                  쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 환자분들은
                  웹 브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나,
                  쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의
                  저장을 거부할 수도 있습니다. 만약 쿠키 설치를 거부하셨을 경우
                  일부 서비스 제공에 어려움이 있습니다.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <label htmlFor="agreeAllTerms" className="agreeAllTerms">
        <input type="checkbox" id="agreeAllTerms" />위 약관에 모두 동의합니다
      </label>
    </div>
  );
};

const UserInfoStep = () => {
  return (
    <div>
      <table className="joinTable">
        <tbody>
          <InputField
            id="joinUserId"
            type="text"
            label="아이디"
            placeholder="영문, 숫자만 입력가능, 최소 4자이상 입력"
            ariaLabel="아이디 입력 필수입력란"
          />

          <InputField
            id="joinUserPw"
            type="password"
            label="비밀번호"
            placeholder="영문, 숫자 포험 6~20자리 구성, 특수기호 제외"
            ariaLabel="비밀번호 입력 필수입력란"
          />

          <InputField
            id="joinPwCheck"
            type="password"
            label="비밀번호확인"
            ariaLabel="비밀번호 확인 입력 필수입력란"
          />

          <InputField
            id="joinUserName"
            type="text"
            label="성명"
            ariaLabel="성명 입력 필수입력란"
          />

          <InputField
            id="joinUserNumber"
            type="text"
            label="연락처"
            placeholder="'-' 제외 숫자만 입력하세요."
            ariaLabel="연락처 입력 필수입력란"
          />

          <EmailField
            id="joinUserEmail"
            type="email"
            label="이메일"
            placeholder="이메일 주소를 입력하세요."
            domainOptions={DomainOptions}
            ariaLabel="도메인을 제외한 이메일 입력 필수입력란"
          />

          <AddressField
            id="searchAddressInput"
            type="text"
            label="주소"
            ariaLabel="주소 입력"
          />

          <InputField
            id="joinBirth"
            type="text"
            label="생년월일"
            placeholder="YYYYMMDD"
            ariaLabel="생년월일 입력 필수입력란"
          />

          <RadioField
            id="joinRoute"
            name="joinRoute"
            label="가입경로"
            options={JoinRouteOptions}
            ariaLabel="가입경로 선택"
          />

          <CheckBoxField
            id="interestDisease"
            label="관심질환"
            options={InterestDiseaseOptions}
            ariaLabel="관심질환 선택 (복수선택 가능)"
          />

          <RadioField
            id="receiveEmail"
            name="receiveEmail"
            label="이메일 수신여부"
            options={CommonOptions.YES_NO}
            ariaLabel="이메일 수신 여부 선택 필수입력란"
          />

          <RadioField
            id="receiveSMS"
            name="receiveSMS"
            label="SMS 수신여부"
            options={CommonOptions.YES_NO}
            ariaLabel="SMS 수신 여부 선택 필수입력란"
          />
        </tbody>
      </table>
    </div>
  );
};

const JoinSuccessStep = () => {
  return (
    <div>
      <section className="joinSuccess">
        <h2 className="sr-only">회원가입 성공</h2>
        <p>회원가입을 진심으로 환영합니다</p>
        <p>
          모두한의원은 언제나 환자의 건강과 함께 하겠습니다.
          <span>문의사항은 언제든지 고객센터로 연락주세요</span>
        </p>
      </section>

      <section className="goLinkBtn">
        <h2 className="sr-only">로그인,메인 페이지 이동</h2>
        <Link to="/login" className="goLoginBtn">
          로그인
        </Link>

        <Link to="/" className="goMainBtn">
          메인으로
        </Link>
      </section>
    </div>
  );
};

const DomainOptions = ['gmail.com', 'naver.com', 'daum.net'];

const JoinRouteOptions = [
  { id: 'blog', label: '블로그', value: 'blog' },
  { id: 'snsAdvertis', label: 'SNS광고', value: 'snsAdvertis' },
  { id: 'busAdvertis', label: '버스광고', value: 'busAdvertis' },
  { id: 'nearHouse', label: '집근처', value: 'nearHouse' },
  { id: 'friendRecommend', label: '지인추천', value: 'friendRecommend' },
];

const InterestDiseaseOptions = [
  { id: 'internal', name: 'internal', label: '내과' },
  { id: 'carCrash', name: 'carCrash', label: '교통사고' },
  { id: 'bodyCorrection', name: 'bodyCorrection', label: '체형교정' },
  { id: 'obstetrics', name: 'obstetrics', label: '부인과' },
  { id: 'diet', name: 'diet', label: '다이어트' },
];

const CommonOptions = {
  YES_NO: [
    { id: 'yes', label: '예', value: 'yes' },
    { id: 'no', label: '아니오', value: 'no' },
  ],
  AGREE_DISAGREE: [
    { id: 'agree', label: '동의', value: 'agree' },
    { id: 'disagree', label: '비동의', value: 'disagree' },
  ],
};

const findAddress = () => {
  console.log('주소 검색');
};

const InputField = ({ label, id, type, placeholder, onChange, ariaLabel }) => {
  return (
    <tr>
      <td>
        <label htmlFor={id}>{label}</label>
      </td>

      <td>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          aria-label={ariaLabel}
        />
      </td>
    </tr>
  );
};

const EmailField = ({
  label,
  id,
  type,
  placeholder,
  domainOptions,
  ariaLabel,
}) => {
  return (
    <tr>
      <td>
        <label htmlFor={id}>{label}</label>
      </td>
      <td>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          aria-label={ariaLabel}
        />
        <select id="joinEmailDomain" name="emailDomain">
          <option value="">이메일 주소를 선택하세요.</option>
          {domainOptions.map((domain) => (
            <option
              key={domain}
              value={domain}
              aria-label={`이메일 도메인 ${domain}`}
            >
              {domain}
            </option>
          ))}
        </select>
      </td>
    </tr>
  );
};

const AddressField = ({ label, id, type, placeholder, ariaLabel }) => {
  return (
    <tr>
      <td>
        <label htmlFor={id}>{label}</label>
      </td>

      <td>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          aria-label={`${ariaLabel} 필수입력란`}
          readOnly
          onClick={findAddress}
        />

        <button id="searchAddressBtn" onClick={findAddress}>
          주소검색
        </button>

        <div>
          <input
            type={type}
            id={`${id}_main`}
            placeholder={label}
            onClick={findAddress}
            readOnly
          />

          <input
            type={type}
            id={`${id}_detail`}
            placeholder="상세주소"
            aria-label={`${ariaLabel} 상세주소 입력`}
          />
        </div>
      </td>
    </tr>
  );
};

const RadioField = ({ label, name, options, ariaLabel }) => {
  return (
    <tr className={name}>
      <td>
        <label>{label}</label>
      </td>
      <td>
        {options.map((option) => (
          <label key={option.id} htmlFor={`${name}_${option.id}`}>
            <input
              type="radio"
              id={`${name}_${option.id}`}
              name={name}
              value={option.value}
              aria-label={ariaLabel}
            />
            {option.label}
          </label>
        ))}
      </td>
    </tr>
  );
};

const CheckBoxField = ({ id, label, options, ariaLabel }) => {
  return (
    <tr className={id}>
      <td>
        <label>{label}</label>
      </td>
      <td>
        {options.map((option) => (
          <label key={option.id} htmlFor={option.id}>
            <input
              type="checkbox"
              id={option.id}
              name={option.name}
              aria-label={ariaLabel}
            />
            {option.label}
          </label>
        ))}
      </td>
    </tr>
  );
};

export function JoinPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prev) => (prev < 3 ? prev + 1 : prev));
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
        {currentStep === 1 && <TermsStep />}
        {currentStep === 2 && <UserInfoStep />}
        {currentStep === 3 && <JoinSuccessStep />}
      </section>

      {currentStep !== 3 && (
        <button className="joinStepNext" onClick={handleNext}>
          확인
        </button>
      )}
    </div>
  );
}
