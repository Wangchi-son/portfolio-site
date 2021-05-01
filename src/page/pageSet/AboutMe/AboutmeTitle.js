import React from 'react';
import './css/AboutmeTitle.css';

function AboutmeTitle() {
  return (
    <div id="introBox" className="lightOut1">
      <h3 className="introduce" id="name">
        이름:<span> 손원재</span>
      </h3>
      <h3 className="introduce" id="age">
        나이:<span> 26세</span>
      </h3>
      <h3 className="introduce" id="academicBg">
        학력:<span> 계명대학교 졸업</span>
      </h3>
      <h3 className="introduce" id="major">
        전공:<span> 산업디자인 학과</span>
      </h3>
      <h3 className="introduce" id="major">
        수상 경력:<span> 희망이음 경진대회 (동상) 수상</span>
      </h3>
      <h3 className="introduce" id="major">
        코딩 경험:
        <span>
          &nbsp;교내 IT융합교육센터 주관 코딩집중캠프 참여
          <br />
          &ensp;&ensp;&ensp;&ensp;&ensp;&emsp;&emsp;패스트캠퍼스 온라인강의 수강
        </span>
      </h3>
      <h3 className="introduce" id="major">
        자격증:
        <span> MOS MASTER</span>
      </h3>
    </div>
  );
}

export default AboutmeTitle;
