import React, {useState} from 'react';
import "../resources/style/css/mypage.css";
// import Http from '../api';
import axios from 'axios';

const Mypage = () => {
    const daniList = ["七級", "六級", "五級", "四級", "三級", "二級", "一級",
                    "初段", "二段", "三段", "四段", "五段", "六段", "七段", "八段", "九段", "十段",
                    "中伝", "皆伝"];
    const [id, setId] = useState();
    const [iidx_name, setName] = useState();
    const [email, setEmail] = useState();

    axios.get(`/api/user`).then(function(res) {
        console.log(res);
        console.log("res",res.data[0].id);
        setId(res.data[0].id);
        setName(res.data[0].iidx_name);
        setEmail(res.data[0].email);
        })
    .catch(function(error) {
        console.log(error);
    })
    .then(function() {

    });
    

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
            <div>test<br/>
                id: {id}<br/>
                name: {iidx_name}<br/>
                email: {email}
            </div>
        </div>
    )
}

export default Mypage;