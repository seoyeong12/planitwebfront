function edit(){
    const target = document.getElementById('time1');
    target.disabled = false;
    target.setAttribute('required', '');
    const target2 = document.getElementById('time2');
    target2.disabled = false;
    target2.setAttribute('required', '');
}
// function save(){
//     //e.preventDefault();

//     window.opener.postMessage({ sign: "팝업 창에서 보낸 메시지" }); //메시지 이벤트가 트리거 된다. 
//     window.close();
//     $(opener.location).attr("href", "javascript:parent_func();");
//     // opener.document.getElementById("titletext").textContent = doucment.getElementById("title").value;
//     // // opener.window.document.myform.mid.value = childForm.mid.value;
//     // // document.getElementById("titletext").textContent=title;
//     // window.close();
// }
// function time(){
//     const target2 = document.getElementById('time1');

//     target2.value = "09:00:00";
//     }
