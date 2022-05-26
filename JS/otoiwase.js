

/* button */
var submit = document.getElementById("submit_btn");
/* name */
var name_sei = document.getElementsByClassName("name_sei")[0];
var name_mei = document.getElementsByClassName("name_mei")[0];
var name_err_sei = document.getElementsByClassName("name_err_sei")[0];
var name_err_mei = document.getElementsByClassName("name_err_mei")[0];

/* company */
var company = document.getElementsByClassName("company_name")[0];
var departure = document.getElementsByClassName("department_name")[0];
var company_err_name = document.getElementsByClassName("company_err_name")[0];
var company_err_department = document.getElementsByClassName("company_err_department")[0];

/*　メールアドレス */
var email = document.getElementsByClassName("mail_address")[0];
var email_err = document.getElementsByClassName("email_err_name")[0];
var email_err_format = document.getElementsByClassName("email_err_format")[0];

/* 電話番号 */
var tel = document.getElementsByClassName("tel_title");
var tel2 = document.getElementsByClassName("tel_title")[1];
var tel3 = document.getElementsByClassName("tel_title")[2];
var tel_err = document.getElementsByClassName("tel_err")[0];
var tel_err_format = document.getElementsByClassName("tel_err_format")[0];



/* 都道府県 */
var perfectures = document.getElementById("perfectures_id");
var perfectures_err = document.getElementsByClassName("perfectures_err")[0];

/* 対象商品 */
var form = document.getElementById("form1");
var item_checkbox1 = document.getElementsByName("item")[0];
var item_checkbox2 = document.getElementsByName("item")[1];
var item_checkbox3 = document.getElementsByName("item")[2];
var item_checkbox4 = document.getElementsByName("item")[3];

var item_err = document.getElementsByClassName("item_err")[0];

submit.addEventListener("click",function() {
    
    /* 必須カラー*/
    var allInput = document.querySelectorAll("input");
    for (var i = 0; i < allInput.length; i ++) {
        if(allInput[i].value) {
        allInput[i].style.backgroundColor = "#FFF";
        } else {
        allInput[i].style.backgroundColor = "#FFCCCC";
        }
    }
    
    /* 名前 */
    if(name_sei.value == "") {//名前（姓）
        name_err_sei.style.display = "block";
    } else if(name_sei.value) {
        name_err_sei.style.display = "none";
    }

    if(name_mei.value == "") {//名前（名）
        name_err_mei.style.display = "block";
    } else if(name_mei.value) {
        name_err_mei.style.display = "none";
    }
    
    var seiVal = name_sei.value;
    var seiReg = /^[ぁ-んァ-ヶー一-龠]+$/
    if(seiReg.test(seiVal)) {//名前(姓)の正規表現チェック
        name_err_sei.style.display = "none";
    } else {
        name_err_sei.style.display = "block";
    }

    var meiVal = name_mei.value;
    var meiReg = /^[ぁ-んァ-ヶー一-龠]+$/
    if(meiReg.test(meiVal)) {
        name_err_mei.style.display = "none";
    } else {
        name_err_mei.style.display = "block";
    }



    /* 会社 */
    if(company.value == "") {//会社名
        company_err_name.style.display = "block";
    } else if(company.value) {
        company_err_name.style.display = "none";
    }

    if(departure.value == "") {//部署名
        company_err_department.style.display = "block";
    } else if(departure.value) {
        company_err_department.style.display = "none";
    }

    /* メールアドレス */
    if(email.value == "") {
        email_err.style.display = "block";
    } else if (email.value) {
        email_err.style.display = "none";
    }


    var emailVal = email.value;
    var reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
    if(reg.test(emailVal)) {//メールアドレス正規表現チェック
        email_err_format.style.display = "none";
    } else {
        email_err_format.style.display = "block";
    }


    /* 電話番号 */

    if(tel.value == "") {
        tel_err.style.display = "block";
    } else {
        tel_err.style.display = "none";
    }

    var telVal = tel.value;
    var telReg = /\d{10,11}/;
    if(telReg.test(telVal)) {//電話番号正規表現チェック
        tel_err_format.style.display = "none";
    } else {
        tel_err_format.style.display = "block";
    }

    /* 都道府県 */
    if(perfectures.value == "") {//都道府県
        perfectures_err.style.display = "block";
    } else if(perfectures.value) {
        perfectures_err.style.display = "none";
    }



    /* 商品選択 */
    /* 
    if(item_checkbox1.checked == true || item_checkbox2.checked == true || item_checkbox3.checked == true || item_checkbox4.checked == true ) {//商品選択
        item_err.style.display = "none";
    } else {
        item_err.style.display = "block";
    }
    */


    var item = document.getElementsByClassName("itembox");
    var count = 0;
    for(var i = 0; i < item.length; i ++) {
        if(item[i].checked) {
            count ++;
            console.log(item[i].length);
        }
    }

    if(count > 0) {
        true;
        item_err.style.display = "none";

    } else {
       item_err.style.display = "block";
    }

    

},false);


/* アンケート */
var favorite = document.getElementById("favorite");
var accorddion = document.querySelector(".favorite li");
var plus = document.getElementsByClassName("plus")[0];

favorite.addEventListener("click", function(){
    if(accorddion.id) {
        accorddion.removeAttribute("id","active");
        plus.innerHTML = "＋";
    } else {
        accorddion.setAttribute("id", "active"); 
        plus.innerHTML = "－";
    }

},false);


/* ステータスバー */
var bar = document.getElementsByClassName("bar")[0];

// 名前（姓
name_sei.addEventListener("blur",function() {//姓
    
    if(name_sei.value && name_sei.dataset.flg == 0) {
        name_sei.dataset.flg = 1;
        var num = Number(bar.innerText.replace("%","")) + 12.5;
        bar.innerText = num + "%";

    } else if(name_sei.value == "") {
        if(name_sei.dataset.flg == 1) {
            var num = Number(bar.innerText.replace("%","")) - 12.5;
            bar.innerText = num + "%";
            name_sei.dataset.flg = 0;
        }
    }
},false);


//名前（名）
name_mei.addEventListener("blur",function() {//名
    if(name_mei.value && name_mei.dataset.flg == 0) {
        name_mei.dataset.flg = 1;
        var num = Number(bar.innerText.replace("%","")) + 12.5;
        bar.innerText = num + "%";

    } else if(name_mei.value == "") {
        if(name_mei.dataset.flg == 1) {
            var num = Number(bar.innerText.replace("%","")) - 12.5;
            bar.innerText = num + "%";
            name_mei.dataset.flg = 0;
        }
    }
},false);

//var allInput = document.querySelectorAll("input");

/*
for(var i = 0; i < allInput.length; i ++) {
    allInput[i].addEventListener("blur", function() {
        if(allInput[i].value) {
            bar + 12.5;
        }
   },false);
}
*/

//会社名
company.addEventListener("blur",function() {
    if(company.value && company.dataset.flg == 0) {
        company.dataset.flg = 1;
        var num = Number(bar.innerText.replace("%","")) + 12.5;
        bar.innerText = num + "%";

    } else if (company.value == "") {
        if(company.dataset.flg == 1) {
            var num = Number(bar.innerText.replace("%","")) - 12.5;
            bar.innerText = num + "%";
            company.dataset.flg = 0;
        }
    }
},false);

//部署名
departure.addEventListener("blur",function() {
    if(departure.value && departure.dataset.flg == 0) {
        departure.dataset.flg = 1;
        var num = Number(bar.innerText.replace("%","")) + 12.5;
        bar.innerText = num + "%";

    } else if (departure.value == "") {
        if(departure.dataset.flg == 1) {
            var num = Number(bar.innerText.replace("%","")) - 12.5;
            bar.innerText = num + "%";
            departure.dataset.flg = 0;
        }
    }
},false);

//メールアドレス
email.addEventListener("blur",function() {
    if(email.value && email.dataset.flg == 0) {
        email.dataset.flg = 1;
        var num = Number(bar.innerText.replace("%","")) + 12.5;
        bar.innerText = num + "%";

    } else if (email.value == "") {
        if(email.dataset.flg == 1) {
            var num = Number(bar.innerText.replace("%","")) - 12.5;
            bar.innerText = num + "%";
            email.dataset.flg = 0;
        }
    }
},false);

//電話番号 
for (var i = 0; i < tel.length; i ++) {
    tel[i].addEventListener("blur",function() {
        for(var i = 0; i < tel.length; i ++) {
            console.log("aaaa")
            if(tel[i].value && tel[i].dataset.flg == 0) {
                if(tel[0].value && tel[1].value && tel[2].value) {                 
                    tel[i].dataset.flg = 1;
                    var num = Number(bar.innerText.replace("%","")) + 12.5;
                    bar.innerText = num + "%";        
                }

            } else if (!tel[0].value && !tel[1].value && !tel[2].value) {
                if(tel[i].dataset.flg == 1) {
                    var num = Number(bar.innerText.replace("%","")) - 12.5;
                    bar.innerText = num + "%";
                    tel[i].dataset.flg = 0;
                }
            }
        }
    
    },false);
}


//都道府県

perfectures.addEventListener("blur",function() {
    if(perfectures.value && perfectures.dataset.flg == 0) {
        perfectures.dataset.flg = 1;
        var num = Number(bar.innerText.replace("%","")) + 12.5;
        bar.innerText = num + "%";

    } else if (perfectures.value == "") {
        if(perfectures.dataset.flg == 1) {
            var num = Number(bar.innerText.replace("%","")) - 12.5;
            bar.innerText = num + "%";
            perfectures.dataset.flg = 0;
        }
    }
},false);

//対象商品

form.addEventListener("click",function() {
    var count = 0
    for (var i = 0; i < form.length; i ++) {
        if(form[i].checked) {
            count ++;
            if(count == 1 && form.dataset.flg == 0 ) {
                form.dataset.flg = 1;
                var num = Number(bar.innerText.replace("%","")) + 12.5;
                bar.innerText = num + "%";
            }
        } else if(!form[i].checked && count == 0) {
            if(form.dataset.flg == 1) {
                var num = Number(bar.innerText.replace("%","")) - 12.5;
                bar.innerText = num + "%";
                form.dataset.flg = 0;
            }
        }
    }
},false);

/* 住所検索API */

'use strict';
document.addEventListener("DOMContentLoaded",function(){
	var address=document.getElementById("address");
	var zip=document.getElementById("zip_number");
	//コールバックメソッドをグローバルに定義
	window.getZip=function(data){
	//取得したデータをaddressに入れる処理を書く。
    console.log(data.results[0]);
    address.value = data.results[0].address1 + data.results[0].address2 + data.results[0].address3;
	}
	
	zip.addEventListener("keyup",function(){
		if(zip.value.length >= 7){
			//動的にscript要素を作成
			var script=document.createElement("script");
			//callbackオプションにgetZipメソッドを指定
			script.src="https://zipcloud.ibsnet.co.jp/api/search?zipcode=" + zip.value + "&callback=getZip"
			//ボディに追加すると
			//getZip(住所データ)
			//という関数の呼び出しのあるスクリプトが読み込まれる
			document.body.appendChild(script);
			document.body.removeChild(script);
		}		
	});
});

/*　社員番号 */
//7桁制御
/*var companyNum = document.getElementsByName("companyNum")[0];
if(companyNum) {
    companyNum.maxLength = 7;
}

//7桁未満エラーにする。
companyNum.addEventListener('blur', function() {
    if(companyNum.value.length < 7 && companyNum.value.length > 0) {
        alert("7桁で入力してください。");
    }

    if(!companyNum.value.match(/^(NK|nk)[0-9]{5}$/)) {
        alert("「NK」から始まる文字を入力してください。もしくは、数字5桁で入力してください。");
    }
}, false);
*/


/* 三井住友カード */

/*　１、社員番号 英字を含む場合、数字５桁未満の場合エラー（数字のみ） */
function faNikkeiCom() {
        var syainNum = document.getElementsByName("companyNum")[0]
		if(syainNum) {
			if(syainNum.value.length < 5 && syainNum.value.length > 0) {
				console.log("5桁の数字でご入力ください。");
			}
			if(syainNum.value.length > 0 && !syainNum.value.match(/^[0-9]{5}$/)) {
				console.log("5桁の数字でご入力ください。");		
			}
			var companyMem = document.getElementsByName("companyNumConfilm")[0].value;
            if(syainNum.value.length == 5 && syainCon.value.length == 7) {
                if(companyMem.slice(-5) == syainNum.value) {
                    console.log("正常")
                }else{ 
                    console.log("下の数字とあってないよ。")
                }
            }
		}	
}

var syainNum = document.getElementsByName("companyNum")[0];

syainNum.addEventListener('blur', function() {
    faNikkeiCom();
},false);


/*２、社員番号 英字を含む場合、数字７桁未満の場合エラー（英字＋数字）*/
function faNikkeiCom2() {
        var flg = 0;
		if(document.getElementsByName("companyNumConfilm")[0]) {
            var syainCon = document.getElementsByName("companyNumConfilm")[0];
			if(syainCon.value.length < 7 && syainCon.value.length > 0) {//0桁以上7桁未満の場合
                console.log("『nk』＋社員番号（数字のみ5桁）をご入力ください。");
                flg = 1;
			}
			if(syainCon.value.length < 7 && syainCon.value.length > 0 && !syainCon.value.match(/^(NK|nk)[0-9]{5}$/)) {//NK始まりで後ろ5桁が数字
                console.log("『nk』＋社員番号（数字のみ5桁）をご入力ください。");
                flg = 1;
			}
			var sliceElm = syainCon.value.slice(-5);
			if(syainCon.value.length == 7 && document.getElementsByName("companyNum")[0].value !== sliceElm && document.getElementsByName("companyNum")[0].value.length == 5) {//社員番号項目と違う場合
                    console.log("ご入力いただいた下5桁の数字が前項目の数字と異なっております。");
                    flg = 1;
			}
            if(flg == 0 && syainCon.value){
                console.log("正常");
            }
		}
}

var syainCon = document.getElementsByName("companyNumConfilm")[0];
syainCon.addEventListener('blur', function() {
    faNikkeiCom2();
},false);

