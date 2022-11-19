function goSubmit(){
    document.editt.target = opener.window.name;
    document.editt.submit();
    opener.document.location.reload();
    self.close();

}

function checkActive(){
    const target = document.getElementById('teamSelect');
    target.disabled = false;
}

function edit(){
    const target = document.getElementById('time1');
    target.disabled = false;
    target.setAttribute('required', '');
    const target2 = document.getElementById('time2');
    target2.disabled = false;
    target2.setAttribute('required', '');
}
function save(){
    //e.preventDefault();
    window.close();
    $(opener.location).attr("href", "javascript:parent_func();");
    // opener.document.getElementById("titletext").textContent = doucment.getElementById("title").value;
    // // opener.window.document.myform.mid.value = childForm.mid.value;
    // // document.getElementById("titletext").textContent=title;
    // window.close();
}
window.onload = function(){
    var start = opener.document.getElementById("time1").innerHTML;
    var end = opener.document.getElementById("time2").innerHTML;
    if(Math.floor(start/10) == 0){
        document.getElementById("time1").value = "0"+start+":00";
    }else{
        document.getElementById("time1").value = start+":00";
    }
    if(Math.floor(end/10) == 0){
        document.getElementById("time2").value = "0"+end+":00";
    }else{
        document.getElementById("time2").value = end+":00";
    }
    var day = opener.document.getElementById("date").innerHTML;
    document.getElementById("date").value = day;

    var sub_btn = document.getElementById('sub_btn');
    sub_btn.onclick=function(){
        document.editt.target= opener.name; //호출하고자하는 부모창의 이름
        document.editt.submit(); // 폼 전송
        self.close();
        //창 닫기
    }
}