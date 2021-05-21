import React, { useState, useEffect } from 'react';
import "../resources/style/css/mypage.css";
// import Http from '../api';
import { useDispatch, useSelector } from 'react-redux';

const Mypage = () => {
    const dani = ["七級", "六級", "五級", "四級", "三級", "二級", "一級",
                  "初段", "二段", "三段", "四段", "五段", "六段", "七段", "八段", "九段", "十段",
                  "中伝", "皆伝"];

    const { auth, user } = useSelector(({ auth, user }) => ({ auth, user: user.user }));

    const [ form, setForm ] = useState({
        iidx_name: user.iidx_name,
        iidx_id: user.iidx_id,
        id_error: ''
    });

    const dispatch = useDispatch();

    const UnauthPage = (
        <div>
            <p>로그인이 필요합니다.</p>
        </div>
    )

    const onChangeName = e => {
        e.preventDefault();
        const name = e.target.value;
        if(name.length <= 6) {
            setForm({...form, iidx_name: name});
        }
        console.log(form);
    }

    const onChangeId = e => {
        e.preventDefault();
        const id = e.target.value;
        if(id.length <= 8) {
            setForm({...form, iidx_id: id})
        }
        console.log(form);
    }

    const onSubmit = () => {
        
    }

    const AuthPage = (
        <div className="mypage">
        <h2>회원정보 수정</h2>
        <form className="iidx-profile">
            <input value={form.iidx_name} placeholder="IIDX 닉네임" onChange={onChangeName}></input>
            <input value={form.iidx_id} placeholder="IIDX ID ('-' 제외 숫자 8자리)" onChange={onChangeId}></input>
            {form.iidx_id.length !== 8 && <p color='red'>IIDX ID는 8자여야 합니다.</p>}
            <select name="단위인정">
                <option value="">단위인정 미취득</option>
                <optgroup label="급(級)">
                    {dani.filter((val, idx) => idx < 7).map((val, idx) => <option value={`${idx+1}`}>{val}</option>)}
                </optgroup>
                <optgroup label="단(段)">
                    {dani.filter((val, idx) => idx >= 7 && idx < 17).map((val, idx) => <option value={`${idx+1}`}>{val}</option>)}
                </optgroup>
                <optgroup label="전(伝)">
                    {dani.filter((val, idx) => idx >= 17).map((val, idx) => <option value={`${idx+1}`}>{val}</option>)}
                </optgroup>
            </select>
            <input type="submit" value="변경하기" onSubmit={onSubmit} />
        </form>
        </div>
    );

    return (
        <div>
            {auth.login ? (user && AuthPage): UnauthPage}    
        </div>
    )
}

export default Mypage;