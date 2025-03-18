import React, { useState } from 'react';

export default function Signup() {
    const [ checkedItems, setCheckedItems ] = useState([]);
    const dataList =[
        {id:0, text:'이용약관에 동의하십니까? (필수)'},
        {id:1, text:'개인정보 수집 및 이용에 동의하십니까?'},
        {id:2, text:'이메일 수신을 동의하십니까?'}
    ];

    const handleCheckedItem = (checked, id) => {
        if(checked){
            setCheckedItems(prev => [...prev,id]);
        }else{
            setCheckedItems(checkedItems.filter(item => item !==id));
        }
    };

    const handleAllClick = (checked) => {
        if(checked){
            const idArray = [];
            dataList.forEach((item)=>idArray.push(item.id));
            setCheckedItems(idArray);
        }else{
            setCheckedItems([]);
        }
    };

    return (
        <form>
            <div className='signup-box signup-content'>
                <h5>New Account</h5>
                <ul>
                    <li>
                        <label>아이디 <span>·</span></label>
                        <input type="text" name='id'/>
                        <p>6자 이상으로 입력해주세요</p>
                    </li>
                    <li>
                        <label>비밀번호 <span>·</span></label>
                        <input type="password" name='pwd'/>
                        <p>8~15자 사이로 입력해주세요.</p>
                    </li>
                    <li>
                        <label>비밀번호 확인 <span>·</span></label>
                        <input type="password" name='cpwd' />
                    </li>
                    <li>
                        <label>이름 <span>·</span></label>
                        <input type="text" name='name' />
                    </li>
                    <li className='phone-info'>
                        <label>휴대전화 <span>·</span></label>
                        <div>
                            <select name="" id="" className='phone'>
                                <option value="010">010</option>
                                <option value="011">011</option>
                            </select>
                            <span class="dash"> - </span>
                            <input type="tel" className='phone' maxLength={4}/>
                            <span class="dash"> - </span>
                            <input type="tel" className='phone' maxLength={4}/>
                        </div>
                    </li>
                    <li className='signup-email-line'>
                        <label>이메일 <span>·</span></label>
                        <div>
                            <input type="text" name='email' />
                            <span>@</span>
                            <select name="emailDomain" id="">
                                <option value="default">선택</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="daum.net">daum.net</option>
                            </select>
                        </div>
                    </li>
                </ul>
                
                <div className='signup-check-box'>
                    <ul>
                        <li className='checkbox-change'>
                            <input type="checkbox" 
                                   onChange={(e)=>handleAllClick(e.target.checked)}
                                   checked={checkedItems.length === dataList.length? true: false}
                                />
                            <span>모두동의</span>
                        </li>
                        {dataList && dataList.map((dataItem, idx)=>(
                             <li key={idx} className='checkbox-change'>
                                <input type="checkbox" 
                                       name={`select-${dataItem.id}`}
                                       onChange={(e)=>handleCheckedItem(e.target.checked, dataItem.id)}
                                       checked={checkedItems.includes(dataItem.id) ? true: false }/>
                                <span>{dataItem.text}</span>
                            </li>
                            ))
                        }
                        <li>· 할인쿠폰 및 혜택, 이벤트, 신상품 소식 등 쇼핑몰에서 제공하는 유익한 쇼핑정보를 SMS나 이메일로 받아보실 수 있습니다.</li>
                        <li>· 단, 주문/거래 정보 및 주요 정책과 관련된 내용은 수신동의 여부와 관계없이 발송됩니다.</li>
                        <li>· 선택 약관에 동의하지 않으셔도 회원가입은 가능하며, 회원가입 후 회원정보수정 페이지에서 언제든지 수신여부를 변경하실 수 있습니다.</li>
                    </ul>
                </div>
                <button className='signup-btn'>Sign up</button>
            </div>
        </form>
    );
}

