import React from 'react';
import "../resources/style/css/mypage.css";

const Mypage = () => {
    const daniList = ["七級", "六級", "五級", "四級", "三級", "二級", "一級",
                    "初段", "二段", "三段", "四段", "五段", "六段", "七段", "八段", "九段", "十段",
                    "中伝", "皆伝"]
    return (
        <div className="mypage">
            <h2>회원정보 수정</h2>
            <form className="iidx-profile">
                <input placeholder="IIDX 닉네임"></input>
                <input placeholder="IIDX ID ('-' 제외 숫자 8자리)"></input>
                <select>
                    <option value="">SP 단위인정</option>
                    {daniList.map(dani => <option value={`SP${dani}`}>SP {dani}</option>)}
                </select>
                <select>
                    <option value="">DP 단위인정</option>
                    {daniList.map(dani => <option value={`DP${dani}`}>DP {dani}</option>)}
                </select>
                <button className="update-btn">변경하기</button>
            </form>
        </div>
    )
}

export default Mypage;