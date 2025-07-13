import styles from './join-page.module.css';

import { useState } from 'react';
import { Link } from 'react-router';

const TermsStep = () => {
  return (
    <div className={styles.joinForm}>
      <h2 className={styles.srOnly}>회원가입 폼</h2>

      <section>
        <h3>회원가입약관</h3>

        <div className={styles.termsBox}>
          <div className={styles.joinTextBox}>
            <h4>제 1 장 - 총 칙</h4>

            <h5>제1조 목 적</h5>
            <p>
              이 약관은 모두한의원(이하 '병원')이 제공하는 서비스 이용조건 및
              절차에 관한 사항과 기타 필요한 사항을 전기통신사업법 및 동법
              시행령이 정하는 대로 준수하고 규정함을 목적으로 합니다.
            </p>

            <h5>제2조 약관의 효력과 변경</h5>
            <ul>
              <li>(1)약관은 이용자에게 공시함으로서 효력을 발생합니다.</li>

              <li>
                (2)병원이 사정 변경의 경우와 영업상 중요 사유가 있을 때 약관을
                변경할 수 있으며, 변경된 약관은 전항과 같은 방법으로 효력을
                발생합니다.
              </li>
            </ul>

            <h5>제3조 약관 외 준칙</h5>
            <p>
              이 약관에 명시되지 않은 사항이 관계법령에 규정되어 있을 경우에는
              그 규정에 따릅니다.
            </p>

            <h4>제 2 장 - 회원 가입과 서비스 이용</h4>

            <h5>제1조 이용 계약의 성립</h5>
            <ul>
              <li>
                (1)이용 계약은 이용자의 이용 신청에 대한 병원의 이용 응낙과
                이용자의 약관 내용에 대한 동의로 성립됩니다.
              </li>

              <li>
                (2)회원에 가입하여 서비스를 이용하고자 하는 희망자는 병원에서
                요청하는 개인신상정보를 제공해야 합니다.
              </li>

              <li>
                (3)병원이 이용 신청을 응낙하는 때에는 다음 사항을 이용자에게
                통지합니다.
                <p>① 이용자 ID</p>
                <p>② 서비스 이용 개시일</p>
                <p>③ 기타 병원이 필요하다고 인정하는 사항</p>
              </li>

              <li>
                (4)병원은 다음 각 호에 해당하는 이용계약신청에 대하여는 이를
                응낙하지 않습니다.
                <p>① 다른 사람의 명의를 사용하여 신청하였을 때</p>
                <p>
                  ② 이용 계약 신청서의 내용을 허위로 기재하였거나 허위서류를
                  첨부하여 신청하였을 때
                </p>
                <p>
                  ③ 사회의 안녕 질서 혹은 미풍양속을 저해할 목적으로 신청하였을
                  때
                </p>
              </li>
            </ul>

            <h5>제2조 서비스 이용</h5>
            <ul>
              <li>
                (1)서비스 이용은 병원의 업무상 또는 기술상 특별한 지장이 없는 한
                연중무휴, 1일 24시간을 원칙으로 합니다.
              </li>

              <li>
                (2)제1항의 이용시간은 정기점검 등의 필요로 인하여 병원이 정한 날
                또는 시간은 그러하지 아니합니다.
              </li>

              <li>
                (3)회원에 가입한 후라도 일부 서비스 이용 시 이용자의 연령에 따른
                서비스 이용을 제한할 수 있습니다.
              </li>
            </ul>

            <h4>제 3 장 - 책 임</h4>

            <h5>제1조 병원의 의무</h5>
            <ul>
              <li>
                (1)병원이 특별한 사정이 없는 한 이용자가 신청한 서비스 제공
                개시일에 서비스를 이용 할 수 있도록 합니다.
              </li>

              <li>
                (2)병원은 이 약관에서 정한 바에 따라 계속적, 안정적으로 서비스를
                제공할 의무가 있습니다.
              </li>

              <li>
                (3)병원은 이용자의 개인 신상 정보를 본인의 승낙 없이 타인에게
                누설 또는 배포하여서는 아니 됩니다. 다만, 전기통신관련법령 등
                관계법령에 의하여 관계 국가기관 등의 요구가 있는 경우에는
                그러하지 아니합니다.
              </li>

              <li>
                (4)병원은 이용자로부터 제기되는 의견이나 불만이 정당하다고
                인정할 경우에는 즉시 처리하여야 합니다. 다만, 즉시 처리가 곤란한
                경우에는 이용자에게 그 사유와 처리 일정을 통보하여야 합니다.
              </li>
            </ul>

            <h5>제2조 이용자의 의무</h5>
            <ul>
              <li>
                (1)아이디와 비밀 번호에 관한 모든 관리의 책임은 이용자에게
                있습니다.
              </li>

              <li>
                (2)자신의 아이디가 부정하게 사용된 경우, 이용자은 반드시 병원에
                그 사실을 통보해야 합니다.
              </li>

              <li>
                (3)이용자는 이 약관 및 관계법령에서 규정한 사항을 준수하여야
                합니다.
              </li>
            </ul>

            <h4>제 4 장 - 계약 해지 및 서비스 이용제한</h4>

            <h5>제1조 계약 해지 및 이용제한</h5>
            <p>
              이용자가 이용 계약을 해지 하고자 하는 때에는 이용자 본인이 직접
              온라인을 통해 개인정보변경/탈퇴 메뉴를 선택하셔서 해지 신청을
              하여야 합니다. 병원은 이용자가 다음 사항에 해당하는 행위를 하였을
              경우 사전 통지 없이 이용 계약을 해지 하거나 또는 기간을 정하여
              서비스 이용을 중지할 수 있습니다.
            </p>

            <ul>
              <li>(1)공공 질서 및 미풍 양속에 반하는 경우</li>
              <li>(2)범죄적 행위에 관련되는 경우</li>
              <li>
                (3)이용자가 국익 또는 사회적 공익을 저해할 목적으로 서비스
                이용을 계획 또는 실행 할 경우
              </li>
              <li>(4)타인의 서비스 아이디 및 비밀 번호를 도용한 경우</li>
              <li>(5)타인의 명예를 손상시키거나 불이익을 주는 경우</li>
              <li>(6)같은 사용자가 다른 아이디로 이중 등록을 한 경우</li>
              <li>
                (7)서비스에 위해를 가하는 등 서비스의 건전한 이용을 저해하는
                경우
              </li>
              <li>(8)기타 관련법령이나 병원가 정한 이용조건에 위배되는 경우</li>
            </ul>

            <h5>제2조 이용 제한의 해제 절차</h5>
            <ul>
              <li>
                (1)병원은 제23조의 규정에 의하여 이용제한을 하고자 하는 경우에는
                그 사유, 일시 및 기간을 정하여 서면 또는 전화 등의 방법에 의하여
                해당 이용자 또는 대리인에게 통지합니다. 다만, 병원가 긴급하게
                이용을 정지할 필요가 있다고 인정하는 경우에는 그러하지
                아니합니다.
              </li>

              <li>
                (2)제1항의 규정에 의하여 이용정지의 통지를 받은 이용자 또는 그
                대리인은 그 이용정지의 통지에 대하여 이의가 있을 때에는
                이의신청을 할 수 있습니다.
              </li>

              <li>
                (3)병원은 제2항의 규정에 의한 이의신청에 대하여 그 확인을 위한
                기간까지 이용정지를 일시 연기할 수 있으며, 그 결과를 이용자 또는
                그 대리인에게 통지합니다.
              </li>

              <li>
                (4)병원은 이용정지 기간 중에 그 이용정지 사유가 해소된 것이
                확인된 경우에는 이용 정지 조치를 즉시 해제합니다.
              </li>
            </ul>

            <h5>제3조 이용자의 게시물</h5>
            <p>
              병원은 이용자가 게시하거나 등록하는 서비스 내의 내용물이 다음 각
              사항에 해당된다고 판단되는 경우에 사전 통지 없이 삭제할 수
              있습니다.
            </p>

            <ul>
              <li>
                (1)다른 이용자 또는 제 3자를 비방하거나 중상 모략으로 명예를
                손상시키는 내용인 경우
              </li>
              <li>(2)공공질서 및 미풍 양속에 위반되는 내용인 경우</li>
              <li>(3)범죄적 행위에 결부된다고 인정되는 내용일 경우</li>
              <li>(4)제 3자의 저작권 등 기타 권리를 침해하는 내용인 경우</li>
              <li>(5)기타 관계 법령이나 병원에서 정한 규정에 위배되는 경우</li>
            </ul>

            <h4>제 5 장 - 계약변경 등</h4>

            <h5>제1조 계약사항의 변경</h5>
            <ul>
              <li>
                (1)이용자는 내용을 변경하거나, 서비스를 해지할 경우에는 전화나
                서비스/ 브라우저를 통해서 이용계약을 변경/ 해지하여야 합니다.
              </li>
            </ul>

            <h4>제 6 장 - 정보의 제공</h4>

            <h5>제1조 정보의 제공</h5>
            <ul>
              <li>
                (1)병원은 이용자가 서비스 이용 중 필요가 있다고 인정되는 다양한
                정보에 대해서는 전자우편이나 서신우편 등의 방법으로 이용자에게
                제공할 수 있습니다.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3>개인정보처리취급방침</h3>
        <div className={styles.privacyBox}>
          <div className={styles.joinTextBox}>
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

      <label htmlFor="agreeAllTerms" className={styles.agreeAllTerms}>
        <input type="checkbox" id="agreeAllTerms" />위 약관에 모두 동의합니다
      </label>
    </div>
  );
};

const UserInfoStep = () => {
  return (
    <div>
      <table className={styles.joinTable}>
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
        </tbody>
      </table>
    </div>
  );
};

const JoinSuccessStep = () => {
  return (
    <div>
      <section className={styles.joinSuccess}>
        <h2 className={styles.srOnly}>회원가입 성공</h2>
        <p>회원가입을 진심으로 환영합니다</p>
        <p>
          모두한의원은 언제나 환자의 건강과 함께 하겠습니다.
          <span>문의사항은 언제든지 고객센터로 연락주세요</span>
        </p>
      </section>

      <section className={styles.goLinkBtn}>
        <h2 className={styles.srOnly}>로그인,메인 페이지 이동</h2>
        <Link to="/login" className={styles.goLoginBtn}>
          로그인
        </Link>

        <Link to="/" className={styles.goMainBtn}>
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
        <select
          id="joinEmailDomain"
          className={styles.joinEmailDomain}
          name="emailDomain"
        >
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

        <button
          id="searchAddressBtn"
          className={styles.searchAddressBtn}
          onClick={findAddress}
        >
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

const RadioField = ({ label, name, options, ariaLabel, className }) => {
  return (
    <tr className={className}>
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

const CheckBoxField = ({ label, options, ariaLabel, className }) => {
  return (
    <tr className={className}>
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
        {currentStep === 2 && <UserInfoStep />}
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
