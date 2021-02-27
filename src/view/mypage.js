import React, { useState, useEffect } from 'react';
import "../resources/style/css/mypage.css";
// import Http from '../api';
import * as userAPI from '../api/user';

const Mypage = () => {
    const daniList = ["七級", "六級", "五級", "四級", "三級", "二級", "一級",
                    "初段", "二段", "三段", "四段", "五段", "六段", "七段", "八段", "九段", "十段",
                    "中伝", "皆伝"];
    const [user, setUser] = useState({});

    useEffect(() => {
        userAPI.getUsers().then(function(res) {
            setUser(res.data[0]);
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {

        });
    }, []);
    

    return (
        <div className="mypage">
            <h2>회원정보 수정</h2>
            <form className="iidx-profile">
                <input value={user.id} placeholder="IIDX 닉네임"></input>
                <input value={user.iidx_id} placeholder="IIDX ID ('-' 제외 숫자 8자리)"></input>
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
            <div>test<br/>
                id: {user.id}<br/>
                name: {user.iidx_name}<br/>
                email: {user.email}
            </div>
        </div>
    )
}

export default Mypage;