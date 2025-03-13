import React from 'react';
import { useState, useRef } from 'react';
import DaumPostcode from "react-daum-postcode";
import axios from 'axios';

export default function UpdateMypage({ myinfo, births }) {
    const [updateData, setUpdateData] = useState({});   // 회원정보 변경 되면 여기 저장됨
        /** 주소검색 버튼Toggle */
        const [isOpen, setIsOpen] = useState(false);
        /** 주소 검색 버튼 */
        const handleToggle = () => {
            setIsOpen(!isOpen);
        };
    const [btnChangeClick, setBtnChangeClick] = useState({
        // 수정을 누르면 true 가 되고 완료를 누르면 false 가 된다
        'pwd': false,
        'name': false,
        'zipcode': false,
        'address': false,
        'extra': false,
        'phone': false,
        'email': false,
        'male': false,
        'female': false,
        'year': false,
        'month': false,
        'date': false
    });
    const pwdMsgRef = useRef(null);
    const refs = {
        'pwdRef': useRef(null),
        'cpwdRef': useRef(null),
        'nameRef': useRef(null),
        'zipcodeRef': useRef(null),
        'addressRef': useRef(null),
        'extra_addressRef': useRef(null),
        'phoneRef': useRef(null),
        'emailRef': useRef(null),
        'maleRef': useRef(null),
        'femaleRef': useRef(null),
        'yearRef': useRef(null),
        'monthRef': useRef(null),
        'dateRef': useRef(null),
    }
    // 버튼 클릭 핸들러
    const handle = (type) => {
        setBtnChangeClick(prev => ({   // setBtnChangeClick 가 관리하는 값들이 prev 이다.
            ...prev,
            [type]: !prev[type]  // 클릭한 타입만 토글
        }));

    };
    const handleChangeInputData = (e) => {
        const { name, value } = e.target;
        setUpdateData({ ...updateData, [name]: value });
    }
    const pwdValidate = () =>{
        if(refs.pwdRef.current.value !== refs.cpwdRef.current.value){
            pwdMsgRef.current.style.setProperty('color', 'red');
            refs.cpwdRef.current.value='';
            return false;
        }else {
            refs.cpwdRef.current.value='';
            pwdMsgRef.current.style.setProperty('color', 'white');
            alert('good');
            return true;
        }
    }
    const handleUpdateInfo = (colName, value) => {
        console.log('colName', colName);
        console.log('value', value);
        const id = localStorage.getItem('user_id');
        if(colName === 'pwd'){
            // pwd일때는 비번체크 후에 디비로 전송해야하고 다른애들은 비번여부 상관없이 걍 디비로 넘어가면 된다
            pwdValidate();
            axios.post('http://localhost:9000//mypage/updateInfo',{'id':id,'colName':colName,'value':value})
                .then(res => {
                    console.log(res.data);
                    
                })
                .catch(error => console.log(error));
        }else{
            axios.post('http://localhost:9000//mypage/updateInfo',{'id':id,'colName':colName,'value':value})
            .then(res => {
                console.log(res.data);                
            })
            .catch(error => console.log(error));
        }
    }

    //---- DaumPostcode 관련 디자인 및 이벤트 시작 ----//
    const themeObj = {
        bgColor: "#FFFFFF",
        pageBgColor: "#FFFFFF",
        postcodeTextColor: "#C05850",
        emphTextColor: "#222222",
    };
    const postCodeStyle = {
        width: "500px",
        height: "500px",
    };

    const completeHandler = (data) => {
        // console.log(data.zonecode);
        // console.log('주소',data.address);     
        // setAdata({ ...adata, zipcode: data.zonecode, address: data.address});
        setUpdateData({ ...updateData, zipcode: data.zonecode, address: data.address })
    };
    // console.log('주소',adata);

    const closeHandler = (state) => {
        if (state === "FORCE_CLOSE") {
            setIsOpen(false);
        } else if (state === "COMPLETE_CLOSE") {
            setIsOpen(false);
        }
    };
    //---- DaumPostcode 관련 디자인 및 이벤트 종료 ----//

    return (
        <div className='mypage-update-info-all'>
            <div className='mypage-update-info-title'>회원 정보 수정</div>
            <div className='mypage-desc'>
                <p>	저희 쇼핑몰을 이용해 주셔서 감사합니다.
                    <span>{myinfo.name}님</span>은 <span>[{myinfo.membership}]</span> 회원이십니다.</p>
                <p><span>10,000원 이상</span>구매시 <span>1%</span>를 추가적립 받으실 수 있습니다.</p>
            </div>
            <div className='mypage-update-info-tablebox'>
                <table className='mypage-update-info-table'>
                    <tr>
                        <td>비밀번호</td>
                        <td><input type="password"
                        //바뀐 값이 value로 안들어감  수정해 
                            value={btnChangeClick.pwd ? null : (
                                updateData.pwd === undefined ? myinfo.password : updateData.pwd
                            )}
                            onChange={btnChangeClick.pwd === true ? handleChangeInputData : null}
                            ref={refs.pwdRef}
                            className={btnChangeClick.pwd ? 'update-info-active' : 'update-info-success'} />

                            {btnChangeClick.pwd ?
                                <button type='button' onClick={() => {
                                    handle('pwd')
                                    handleUpdateInfo("pwd", refs.pwdRef.current.value)
                                }}>완료</button> :
                                <button type='button' onClick={() => {
                                    handle('pwd')
                                }}
                                > 수정</button>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>비밀번호확인</td>
                        <td><input type="password" ref={refs.cpwdRef}
                        className={btnChangeClick.pwd ? 'update-info-active' : 'update-info-success'}
                         /><span ref={pwdMsgRef}>비밀번호가 일치하지 않습니다. 다시 입력해주세요</span>
                        </td>
                    </tr>
                    <tr>
                        <td>이름</td>
                        <td>
                            <input type="text"
                                value={btnChangeClick.name ? null : (
                                    updateData.name === undefined ? myinfo.name : updateData.name
                                )}
                                onChange={btnChangeClick.name === true ? handleChangeInputData : null}
                                ref={refs.nameRef}
                                className={btnChangeClick.name ? 'update-info-active' : 'update-info-success'} />
                            {btnChangeClick.name ?
                                <button type='button' onClick={() => {
                                    handle('name')
                                    handleUpdateInfo("name", refs.nameRef.current.value)
                                }}>완료</button> :
                                <button type='button' onClick={() => {
                                    handle('name')
                                }}
                                > 수정</button>
                            }
                        </td>
                    </tr>
                    <tr>
                            <td>주소</td>
                            <td>
                                <li>
                                    <input  type="text"
                                value={btnChangeClick.zipcode ? null : (
                                    updateData.zipcode === undefined ? myinfo.zipcode : updateData.zipcode
                                )}
                                onChange={btnChangeClick.address === true ? handleChangeInputData : null}
                                ref={refs.zipcodeRef}
                                className={btnChangeClick.address ? 'update-info-active' : 'update-info-success'} />
                                    <button onClick={()=>{setIsOpen(true)}}>주소검색</button>
                                    {btnChangeClick.address ?
                                <button type='button' onClick={() => {
                                    handle('address')
                                    handleUpdateInfo('zipcode',refs.zipcodeRef.current.value)
                                    handleUpdateInfo('address',refs.addressRef.current.value)
                                    handleUpdateInfo('extra',refs.extra_addressRef.current.value)
                                }}>완료</button> :
                                <button type='button' onClick={() => {
                                    handle('address')
                                }}
                                > 수정</button>
                            }
                                </li>
                                <li><input  type="text"
                                value={btnChangeClick.address ? null : (
                                    updateData.address === undefined ? myinfo.address : updateData.address
                                )}
                                onChange={btnChangeClick.address === true ? handleChangeInputData : null}
                                ref={refs.addressRef}
                                className={btnChangeClick.address ? 'update-info-active' : 'update-info-success'} /></li>
                                <li><input type="text"
                                value={btnChangeClick.address ? null : (
                                    updateData.extra === undefined ? myinfo.extra_address : updateData.extra
                                )}
                                onChange={btnChangeClick.address === true ? handleChangeInputData : null}
                                ref={refs.extra_addressRef}
                                className={btnChangeClick.address ? 'update-info-active' : 'update-info-success'} /></li>
                                    {isOpen &&
                                    <div>
                                        <DaumPostcode
                                            className="postmodal"
                                            theme={themeObj}
                                            style={postCodeStyle}
                                            onComplete={completeHandler}
                                            onClose={closeHandler}
                                        />
                                    </div>
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>휴대전화</td>
                            <td>
                            <input type="tel"
                                value={btnChangeClick.phone ? null : (
                                    updateData.phone === undefined ? myinfo.phone : updateData.phone
                                )}
                                onChange={btnChangeClick.phone === true ? handleChangeInputData : null}
                                ref={refs.phoneRef}
                                className={btnChangeClick.phone ? 'update-info-active' : 'update-info-success'} />
                            {btnChangeClick.phone ?
                                <button type='button' onClick={() => {
                                    handle('phone')
                                    handleUpdateInfo("phone", refs.phoneRef.current.value)
                                }}>완료</button> :
                                <button type='button' onClick={() => {
                                    handle('phone')
                                }}
                                > 수정</button>
                            }
                                </td>
                        </tr>
                        <tr>
                            <td>이메일</td>
                            <td>
                            <input type="text"
                                value={btnChangeClick.email ? null : (
                                    updateData.email === undefined ? myinfo.email : updateData.email
                                )}
                                onChange={btnChangeClick.email === true ? handleChangeInputData : null}
                                ref={refs.emailRef}
                                className={btnChangeClick.email ? 'update-info-active' : 'update-info-success'} />
                            {btnChangeClick.email ?
                                <button type='button' onClick={() => {
                                    handle('email')
                                    handleUpdateInfo("email", refs.emailRef.current.value)
                                }}>완료</button> :
                                <button type='button' onClick={() => {
                                    handle('email')
                                }}
                                > 수정</button>
                            }
                                </td>
                        </tr>
                </table>
            </div>
            <div className='mypage-update-info-add-tablebox'>
                <div>추가정보</div>
                <div>
                    <table className='mypage-update-info-table2'>
                        <tr>
                            <td>성별</td>
                            <td>
                                <input type="checkbox" checked={births.gender === 'M' ? true : false}
                                    ref={refs.maleRef}
                                    onChange={handleUpdateInfo} />
                                <span>남자</span>
                                <input type="checkbox" checked={births.gender === 'F' ? true : false}
                                    ref={refs.femaleRef}
                                    onChange={handleUpdateInfo} />
                                <span>여자</span>
                            </td>
                        </tr>
                        <tr>
                            <td>생년월일</td>
                            <td>
                                <input type="text" name="" id="" value={births.year}
                                    ref={refs.yearRef}
                                    onChange={handleUpdateInfo} />
                                <span>년</span>
                                <input type="text" value={births.month}
                                    onChange={handleUpdateInfo}
                                    ref={refs.monthRef} />
                                <span>월</span>
                                <input type="text" value={births.date}
                                    onChange={handleUpdateInfo}
                                    ref={refs.dateRef} />
                                <span>일</span>
                                {/* <button>수정</button>
                                <button>완료</button> */}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className='mypage-update-info-btns'>
                <div>
                    <button>회원탈퇴</button>
                </div>
                <div>
                    {/* <button>취소</button> */}
                    <button>추가정보수정</button>
                </div>
            </div>
        </div>
    );
}

