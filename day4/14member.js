function valid_check(){
    const frm = document.forms[0]
    const name = frm.name
    const email =frm.email
    const password = frm.password
    const age = frm.age
    let isValid = true

    if(name.value==''){
    alert('write name to continue')
    name.focus()
    isValid=false
}
if(password.value.length <4 ){
alert('more than 4 chars')
password.focus()
isValid=false
}
if(email.value=='' || email.value.indexOf('@')==-1 || email.value.indexOf('.'==-1 || email.value.endsWith('.'))){
    alert('must write email and wmail must contain @ ')
    email.focus()
    isValid=false
}
//  정규표현식은   / / 안에 작성
// ^ 는 시작
// $ 는 끝
// [] 는 [] 안의 문자들중 1개 선택
// * 는 0번 이상 문자 반복
// []? 는 [] 안의 문자들이 있는가? 존재여부
// () 는 그룹
// {n} 는 n개
// {n,m}는 n개 이상, m번 이

var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
if(regEmail.test(test.value)===false)
alert('wrong email format')
if(age.value < 15){
    alert('age restriction 15~99')
    age.focus()
    isValid=false
}
let cnt=0
frm.hobby.forEach(element =>{
    if(element.checked)
    cnt++
});
if(cnt==0){
    alert('choose one or more hobby')
    isValid=false
}
if(isValid){
    frm.action='13result.html'
    frm.submit()
}
}