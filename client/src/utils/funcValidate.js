

/*****************************
 * Signup 컴포넌트 초기화 작업 
 *****************************/
export const initSignup = () => {
  const names = ['id','pwd','cpwd','name','phone','phone','phone','email'];
  const nameKor = ['아이디','비밀번호','비밀번호 확인','이름','휴대전화','','','이메일'];
  // const placeholerKor = [];

  const initFormData = names.reduce((acc, name)=>{
    acc[name] = '';
    return acc;
  },{});

  const labels =names.reduce((acc, name, idx)=>{
    acc[name] = nameKor[idx];
    return acc;
  },{});

  return {names, labels, initFormData};
};



/*****************************
 * 커스텀 훅  
 *****************************/

