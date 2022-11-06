import Link from "next/link";

const Policy = () => {
    return (
        <div className="bg-slate-900 p-4 h-screen">
            <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-4">
                <div className="flex">
                    <div
                        className="text-[#ff0558] hover:text-[#ff0558]/60 transition-all cursor-pointer"
                        onClick={() => (window.location.href = "/")}
                    >
                        Back
                    </div>
                    <Link href="./service"><div className="text-[#ff0558] hover:text-[#ff0558]/60 transition-all text-left ml-auto cursor-pointer">이용약관</div></Link>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    개인정보 처리 방침
                </div>

                <div
                    className="bg-slate-700 w-full overflow-y-scroll p-3 flex flex-col gap-6 h-[60vh]"
                    style={{ wordBreak: "keep-all" }}
                >
                    <p>
                        모아보다(이하”회사”)는 이용자의 개인정보를 소중히
                        생각하며, 수집한 개인정보를 가장 적극적이고 효과적으로
                        처리하기 위하여 항상 최선을 다해 노력하고 있습니다.
                        개인정보 처리방침은 관련 법률 및 지침의 변경과
                        모아보다 내부 운영방침에 따라 변경 될 수 있습니다.
                    </p>

                    <p>
                        회사의 개인정보처리방침은 다음과 같은 내용으로 구성되어
                        있습니다.
                    </p>

                    <p>
                        1. 수집하는 개인정보의 항목 및 수집방법 2. 개인정보의
                        수집 및 이용목적 3. 개인정보의 공유 및 제공 4.
                        개인정보의 위탁 5. 개인정보의 보유 및 이용기간 6.
                        개인정보의 파기절차 및 방법 7. 이용자 및 법정대리인의
                        권리와 그 행사방법 8. 개인정보 자동수집 장치의 설치/운영
                        및 거부에 관한 사항 9. 개인정보의 기술적/관리적 보호
                        대책 10. 개인정보관리책임자 및 담당자
                    </p>

                    <p>
                        1. 수집하는 개인정보의 항목 및 수집방법 가. 수집하는
                        개인정보의 항목
                    </p>

                    <p>
                        첫째, 회사는 회원가입, 원활한 고객상담, 각종 서비스
                        제공을 위해 아래와 같은 항목의 개인정보를 수집하고
                        있습니다. 일반 회원가입 - 아이디, 이메일, 닉네임,
                        휴대폰번호 판매자 회원가입 : 본인명의 휴대폰 인증/아이핀
                        인증 - 성명, 실명인증값, 생년월일, 아이디, 주소,
                        휴대폰번호, 이메일, 가입인증 정보, 닉네임. 아이핀 회원은
                        성명, 아이핀 번호, 생년월일, 성별, 아이디, 비밀번호,
                        이메일, 휴대폰 번호, 닉네임
                    </p>

                    <p>
                        둘째, 서비스 이용과정에서 아래와 같은 정보들이 생성되어
                        수집될 수 있습니다. 아이피, 방문 일시, 서비스 이용 기록,
                        불량 이용 기록
                    </p>

                    <p>
                        셋째, 유료 서비스 이용 과정에서 아래와 같은 결제
                        정보들이 수집될 수 있습니다. 신용카드 결제시 : 카드사명
                        휴대전화 결제시 : 이동전화번호, 통신사, 결제승인번호 등
                        계좌이체 시 : 은행명
                    </p>

                    <p>
                        나. 개인정보 수집방법 회사는 다음과 같은 방법으로
                        개인정보를 수집합니다. 홈페이지, 서면양식, 전화, 팩스,
                        이메일, 이벤트 응모, 배송요청
                    </p>

                    <p>
                        2. 개인정보의 수집 및 이용목적 가. 서비스 제공에 관한
                        계약 이행 및 서비스 제공에 따른 요금정산 콘텐츠 제공,
                        특정 맞춤 서비스 제공, 물품배송 또는 영수증, 본인인증,
                        구매 및 요금 결제
                    </p>

                    <p>
                        나. 회원관리 회원제 서비스 이용에 따른 본인여부 확인,
                        개인 식별, 불량회원의 부정 이용 방지와 비인가 사용 방지,
                        연령확인, 가입의사확인, 가입 및 가입횟수 제한,
                        법적대리인 본인확인, 분쟁 조정을 위한 기록보존,
                        민원처리, 고지사항 전달
                    </p>

                    <p>
                        3. 개인정보의 공유 및 제공 회사는 이용자들의 개인정보를
                        "2. 개인정보의 수집목적 및 이용목적"에서 고지한
                        범위내에서 사용하며, 이용자의 사전 동의 없이는 동 범위를
                        초과하여 이용하거나 원칙적으로 이용자의 개인정보를
                        외부에 공개하지 않습니다. 다만, 아래의 경우에는 예외로
                        합니다.
                    </p>

                    <p>
                        법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진
                        절차와 방법에 따라 수사기관의 요구가 있는 경우
                    </p>

                    <p>
                        4. 개인정보의 위탁 서비스 제공을 위해 아래와 같은 업무를
                        위탁하고 있습니다. 필요한 업무 중 일부를 외부 업체로
                        하여금 수행하도록 개인정보를 위탁하고 있습니다. 그리고
                        위탁 받은 업체가 관계 법령을 준수하도록 관리·감독하고
                        있습니다.
                    </p>

                    <p>
                        수탁업체 위탁업무 내용 개인정보의 보유 및 이용기간
                        코리아크레딧뷰로㈜ 본인확인 해당 업체에서 이미 보유하고
                        있는 개인정보이기 때문에 별도로 저장하지 않음
                        토스페이먼츠 주식회사, ㈜이니시스 결제처리(휴대폰,
                        무통장 입금, 계좌이체, 신용카드, 지류상품권 및 기타
                        결제수단, 환불계좌 인증) 회원탈퇴 시 혹은 위탁 계약 종료
                        시까지
                    </p>

                    <p>
                        5. 개인정보의 보유 및 이용기간 회사는 개인정보 수집 및
                        이용목적이 달성된 후에는 해당 정보를 지체 없이
                        파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로
                        명시한 기간 동안 보존합니다.
                    </p>

                    <p>
                        가. 회사 내부 방침에 의한 정보보유 사유 부정이용기록
                        보존 이유 : 부정 이용 방지 보존 기간 : 해당
                        제한기간(3년)
                    </p>

                    <p>
                        나. 관련법령에 의한 정보보유 사유 상법, 전자상거래
                        등에서의 소비자보호에 관한 법률 등 관계법령의 규정에
                        의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한
                        일정한 기간 동안 회원정보를 보관합니다. 이 경우 회사는
                        보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은
                        아래와 같습니다.
                    </p>

                    <p>
                        계약 또는 청약철회 등에 관한 기록 보존 이유 : 전자상거래
                        등에서의 소비자보호에 관한 법률 보존 기간 : 5년 대금결제
                        및 재화 등의 공급에 관한 기록 보존 이유 : 전자상거래
                        등에서의 소비자보호에 관한 법률 보존 기간 : 5년 소비자의
                        불만 또는 분쟁처리에 관한 기록 보존 이유 : 전자상거래
                        등에서의 소비자보호에 관한 법률 보존 기간 : 3년 방문에
                        관한 기록 보존 이유 : 통신비밀보호법 보존 기간 : 3개월
                    </p>

                    <p>
                        6. 개인정보의 파기절차 및 방법 이용자의 개인정보에 대해
                        개인정보의 수집·이용 목적이 달성된 후에는 해당 정보를
                        지체 없이 파기합니다.
                    </p>

                    <p>
                        가. 파기절차 이용자가 회원가입 등을 위해 입력한 정보는
                        목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의
                        서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호
                        사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후
                        파기됩니다. 별도 DB로 옮겨진 개인정보는 법률에 의한
                        경우가 아니고는 보유되는 이외의 다른 목적으로 이용되지
                        않습니다.
                    </p>

                    <p>
                        나. 파기방법 전자적 파일 형태로 저장된 개인정보는 재생할
                        수 없는 기술적 방법을 사용하여 삭제합니다. 기록물,
                        인쇄물, 서면 등의 경우 분쇄하여 파기합니다.
                    </p>

                    <p>
                        7. 이용자 및 법정대리인의 권리와 그 행사방법 이용자 및
                        법정 대리인은 언제든지 등록되어 있는 자신의 개인정보를
                        조회하거나 수정할 수 있으며 가입해지를 요청할 수도
                        있습니다. 이용자의 개인정보 조회, 수정을 위해서는
                        ‘개인정보변경’(또는 ‘회원정보수정’ 등)을,
                        가입해지(동의철회)를 위해서는 “회원탈퇴”를 클릭하여 본인
                        확인 후 직접 열람, 정정 또는 탈퇴가 가능합니다. 혹은
                        개인정보관리책임자에게 서면, 전화 또는 이메일로
                        연락하시면 지체 없이 조치하겠습니다. 이용자가 개인정보의
                        오류에 대한 정정을 요청하신 경우에는 정정을 완료하기
                        전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한
                        잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정
                        처리결과를 제3자에게 지체 없이 통지하여 정정이
                        이루어지도록 하겠습니다. 회사는 이용자 혹은 법정
                        대리인의 요청에 의해 해지 또는 삭제된 개인정보는 “5.
                        개인정보의 보유 및 이용기간”에 명시된 바에 따라 처리하고
                        그 외의 용도로 열람 또는 이용할 수 없도록 처리하고
                        있습니다.
                    </p>

                    <p>
                        8. 개인정보 자동수집 장치의 설치/운영 및 거부에 관한
                        사항 쿠키는 웹사이트를 운영하는데 이용되는 서버가
                        이용자의 브라우저에 보내는 아주 작은 텍스트 파일로서
                        이용자의 컴퓨터에 저장됩니다. 보다 빠르고 편리한
                        웹사이트 사용을 지원하고 맞춤형 서비스를 제공하기 위해
                        사용됩니다.
                    </p>
                    <p>
                        가. 쿠키 등 사용 목적 이용자가 선호하는 설정 등을
                        저장하여 보다 빠른 웹 환경을 지원하며, 편리한 이용을
                        위해 서비스 개선에 활용합니다.
                    </p>
                    <p>
                        나. 쿠키 설정 거부 방법 이용자는 쿠키 설치에 대한
                        선택권을 가지고 있습니다. 따라서, 이용자는 웹
                        브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나,
                        쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을
                        거부할 수도 있습니다. 다만, 쿠키의 저장을 거부할
                        경우에는 로그인이 필요한 일부 서비스는 이용에 어려움이
                        있을 수 있습니다.
                    </p>

                    <p>
                        9. 개인정보의 기술적/관리적 보호 대책 이용자의
                        개인정보를 가장 소중한 가치로 여기고 개인정보를 처리함에
                        있어서 다음과 같은 노력을 다하고 있습니다.
                    </p>
                    <p>
                        가. 비밀번호 암호화 이용자의 개인정보를 암호화된
                        통신구간을 이용하여 전송하고, 비밀번호 등 중요정보는
                        암호화하여 보관하고 있습니다.
                    </p>

                    <p>
                        나. 해킹 등에 대비한 대책 해킹이나 컴퓨터 바이러스 등에
                        의해 이용자의 개인정보가 유출되거나 훼손되는 것을 막기
                        위해 외부로부터 접근이 통제된 구역에 시스템을 설치하고
                        있습니다. 해커 등의 침입을 탐지하고 차단할 수 있는
                        시스템을 설치하여 24시간 감시하고 있으며, 백신
                        프로그램을 설치하여 시스템이 최신 악성코드나 바이러스에
                        감염되지 않도록 노력하고 있습니다.
                    </p>
                    <p>
                        다. 처리직원의 최소화 및 교육 개인정보를 처리하는 직원을
                        최소한으로 한정시키고 담당자들을 대상으로 개인정보보호
                        의무와 보안에 대한 정기적인 교육과 캠페인을 실시하고
                        있습니다.
                    </p>

                    <p>
                        10. 개인정보관리책임자 및 담당자 이용자의 정보주체가
                        열람 등 요구를 고객센터나 전화, 이메일 또는 서면으로
                        연락하시면 지체 없이 조치하겠습니다. 서비스를 이용하면서
                        발생하는 모든 개인정보보호 관련 문의, 불만, 조언이나
                        기타 사항은 개인정보 보호책임자 및 담당부서로 연락해
                        주시기 바랍니다. 신속하고 충분한 답변을 드릴 수 있도록
                        최선을 다하겠습니다.
                    </p>

                    <p>
                        개인정보 관리책임자 성 명 : 김종훈 소 속 : 경영팀 직 책
                        : 대표 전화 : 02-2039-1690 팩 스 : 070-7547-1889 이메일
                        : videogllo@videogllo.com 기타 개인정보침해에 대한
                        신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기
                        바랍니다.
                    </p>

                    <p>
                        개인정보침해신고센터 (privacy.kisa.or.kr / 국번없이 118)
                        대검찰청 사이버수사과 (www.spo.go.kr / 국번없이 1301)
                        경찰청 사이버안전국 (www.ctrc.go.kr / 국번없이 182)
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Policy;
