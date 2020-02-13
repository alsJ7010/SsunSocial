<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>SGDG : MyPage</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<script src="/cdn-cgi/apps/head/ARf53_7CZrph6eMZGwgXpTF2-tk.js"></script>
<link rel="shortcut icon" href="/ssun/resources/img/SGDG_favicon_96x96.png">

<!-- 
	Open Source Social Network (Ossn) https://www.opensource-socialnetwork.org/     
	BY Informatikon Technologies (http://informatikon.com/)
	BY SOFTLAB24 (https://www.softlab24.com/)
	-->
<script type="text/javascript" async="" defer=""
	src="./News Feed _ OSSN Demo_files/piwik.js"></script>
<script async="" src="./News Feed _ OSSN Demo_files/analytics.js"></script>
<script
	src="./News Feed _ OSSN Demo_files/ARf53_7CZrph6eMZGwgXpTF2-tk.js"></script>
<link rel="stylesheet" type="text/css"
	href="resources/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css"
	href="resources/css/ossn.default.css">
<script type="text/javascript" src="resources/js/ossn.en.language.js"></script>
<script type="text/javascript" src="resources/js/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="resources/js/jquery-ui.min.js"></script>
<script type="text/javascript"
	src="./News Feed _ OSSN Demo_files/jquery-arhandler-1.1-min.js"></script>
<script type="text/javascript" src="resources/js/jquery.scrolling.js"></script>
<script type="text/javascript" src="resources/js/places.min.js"></script>
<script type="text/javascript" src="resources/js/jquery.tokeninput.js"></script>
<script type="text/javascript"
	src="resources/js/opensource.socialnetwork.js"></script>
<script type="text/javascript" src="resources/js/ossn.chat.js"></script>
<link rel="stylesheet" type="text/css"
	href="resources/css/font-awesome.min.css">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css"
	href="./News Feed _ OSSN Demo_files/css">
<script type="text/javascript" src="resources/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css"
	href="resources/css/jquery-ui.css">
<script type="text/javascript"
	src="resources/js/sunmoon.socialnetwork.js"></script>
<link rel="stylesheet" type="text/css"
	href="https://fonts.googleapis.com/css?family=PT+Sans:400italic,700,400" />
<!-- 20181120 민정추가  -->
<script type="text/javascript"
	src="resources/js/sunmoon.socialnetwork.common.js"></script>
	<!-- 11/25 예린추가 -->
<script type="text/javascript" src="resources/js/sunmoon.socialnetwork.mypage.js"></script>
<script>
	Ossn.site_url = 'https://demo.opensource-socialnetwork.org/';
	Ossn.Config = {
		"token" : {
			"ossn_ts" : 1542354882,
			"ossn_token" : "8828f01c95a16becdc858ec731af20b2"
		},
		"cache" : {
			"last_cache" : "27781315",
			"ossn_cache" : "1"
		}
	};
	Ossn.Init();
	$(document).ready(function() {
		setInterval(function() {
			Ossn.NotificationsCheck()
		}, 5000 * 12);
	});
	
	
	//유저세션
	function setUserInfo() {
		var txt = "";
		var user_dep = "${sessionScope.department}";
		var user_name = "${sessionScope.user_name}";
		var user_num = ${sessionScope.user_num};
		var user_img = "${sessionScope.user_img}";
		console.info("------user_img: " + user_img);
		
		if(user_dep == "Admin") {
			document.getElementById("user-department-info").innerHTML = "선문대 귀는 당나귀 귀";
		} else {
			checkDepartment(user_dep);
		}
		
		/* document.getElementById("user-department-info").innerHTML = user_dep; */
		
		document.getElementById("user-name-info").innerHTML = user_name;
		document.getElementById("mypage_name").value = user_name;
		document.getElementById("user_num").value = user_num;
		document.getElementById("mypage_usernumber").value = user_num;
		document.getElementById("user_img").value = user_img;
		/* $('#user_num').value = user_num;
		$('#user_img').value = user_img; */

		$('.user-fullname').prepend(user_name);
		/* document.getElementsByClass("user-fullname").prepend(user_name); */

		if (user_img == "" || user_img == null) {
			var url = "resources/img/e3852c91cacea4a823e607cccccb29c2.jpeg";
			/* document.getElementById("user-profile-img").attr("src", url); */
			$('#newseed-uinfo-img').attr("src", url);
			$('#profile-photo').attr("src", url);
		} else {
			var url = "resources/userImage/" + user_img;
			/* document.getElementById("user_img").attr("src", url); */
			$('#newseed-uinfo-img').attr("src", url);
			$('#profile-photo').attr("src", url);
		}

		/* document.getElementById("user-activity").innerHTML = txt; */
	}
	
	//로그아웃	
	function logout(){
	      console.log("logout called!");
	      
	      var user_num  = ${sessionScope.user_num};
	      console.log(" userNum 값000:" + user_num);

	      $.ajax({
	         url : 'http://localhost:8080/ssun/logout',
	         method : 'POST',
	         data : user_num,
	         processData : false,
	         contentType : false,
	         success : function(data) {

	            console.log(data);
	            console.log("값1:" + user_num);

	            loginCheckProc(data, user_num);
	            alert("로그아웃 됩니다.");
	         
	            /* if("${sessionScope.user_num}" != null){
	               console.log("값2:" + "${sessionScope.user_num}");
	               loginCheckProc(data, user_num);
	               console.log("값3:" + "${sessionScope.user_num}");
	               alert("로그아웃 됩니다.");
	               //window.location.href = "http://localhost:8080/ssun/";
	            } */
	 
	         },
	         error : function(data, status, err) {
	            //alert('error');
	            console.log("error: " + data);
	         }
	      });         
	      
	   }
	
	//학과코드 -> 학과이름	
	function checkDepartment(dep_code) {
	      var depCode = {dep_code: dep_code};
	      
	      $.ajax({
	            url : 'http://localhost:8080/ssun/checkDepartment',
	            method : 'POST',
	            data : JSON.stringify(depCode),
	            processData : false,
	            contentType : 'application/json',
	            success : function(data) {
	              console.log("학과: " + data);
	              document.getElementById("user-department-info").innerHTML = data;
	              document.getElementById("mypage_department").value = data;
	            },
	            error : function(data, status, err) {
	               console.log("error: " + data);
	            }
	         });
	   }
	
	
	//마이페이지 유저정보 가져오기	
	$(document).ready(function() {	
		
		function mypageInfo() {
			console.log("마이페이지 에이젝스 현장");
			var formData = new FormData($("#mypage_form")[0]);
			
			$.ajax({
				url : 'http://localhost:8080/ssun/mypageInfomation',
				method : 'POST',
				data : formData,
				processData : false,
				contentType : false,
				success : function(data) {
					//alert(data);
					console.log("성공했니???~~~~~~~~~~~~~~");
					console.log(data);
				
					
				},
				error : function(data, status, err) {
					//arert('error');
					console.log(data);
				}
			});
		}

	});
</script>

<script>
	/**이벤트 발생 (크롬,파이어폭스,사파이어 OK!) **/
	function eventOccur(evEle, evType) {
		if (evEle.fireEvent) {
			evEle.fireEvent('on' + evType);
		} else {
			//MouseEvents가 포인트 그냥 Events는 안됨~ ??
			var mouseEvent = document.createEvent('MouseEvents');
			/* API문서 initEvent(type,bubbles,cancelable) */
			mouseEvent.initEvent(evType, true, false);
			var transCheck = evEle.dispatchEvent(mouseEvent);
			if (!transCheck) {
				//만약 이벤트에 실패했다면
				console.log("클릭 이벤트 발생 실패!");
			}

		}
	}
	/** 대체버튼 클릭시 강제 이벤트 발생**/
	function inpufilecheck() {
		eventOccur(document.getElementById('pfile'), 'click');
		/* alert(orgFile.value); 이벤트 처리가 끝나지 않은 타이밍이라 값 확인 안됨! 시간차 문제 */
	}

	//프로필 사진 수정
	function setImage() {

		console.log("setImage called.");

		var file = document.querySelector('#pfile');
		var fileList = file.files;

		//console.log(file.files);

		var reader = new FileReader();
		reader.readAsDataURL(fileList[0]);

		reader.onload = function() {
			document.querySelector('#preview').src = reader.result;
		};

		/* function insertData() { */
		console.log("insert function called!");

		var formData = new FormData($("#profile-update")[0]);
		$.ajax({
			url : 'http://localhost:8080/ssun/insertProfile',
			method : 'POST',
			data : formData,
			processData : false,
			contentType : false,
			success : function(data) {
				// 프로필 사진 뜨는부분 변경
				$('#profile-photo').attr("src", "resources/userImage/" + data);
				$('#newseed-uinfo-img').attr("src",
						"resources/userImage/" + data);

				console.log(data);
			},
			error : function(data, status, err) {
				console.log(data);
			}
		});
	}
		
	//비밀번호 변경시 비밀번호변경과 비밀번호확인이 같은지 확인	
	function checkPwd() {
		console.log("password function called!");
		
		var inputed = $("#mypage_password").val();
		var reinputed = $("#password_confirm").val();

		if(reinputed=="" && (inputed != reinputed || inputed == reinputed)){
           $(".signupbtn").prop("disabled", true);
            $(".signupbtn").css("background-color", "#aaaaaa");
            $("#password_confirm").css("background-color", "#FFCECE");
        }
        else if (inputed == reinputed) {
            $("#password_confirm").css("background-color", "#B0F6AC");
            $('.signupbtn').removeAttr("disabled")
            $(".signupbtn").css("background-color", "#006600");
            $(".signupbtn").css("border", "none"); 
	}

        else if (inputed != reinputed) {
            $(".signupbtn").prop("disabled", true);
            $(".signupbtn").css("background-color", "#aaaaaa");
            $("#password_confirm").css("background-color", "#FFCECE");
            
        }
	} 
	
	//비밀번호 변경시 저장
	function mypagePwdChange() {
		console.log("마이페이지 정보");
		var formData = new FormData($("#mypage_form")[0]);
		
		$.ajax({
			url : 'http://localhost:8080/ssun/mypagePwdChange',
			method : 'POST',
			data : formData,
			processData : false,
			contentType : false,
			success : function(data) {
				alert("비밀번호 변경 성공!");
				
			},
			error : function(data, status, err) {
				//arert('error');
				console.log(data);
			}
		});
	}
		
	
	//회원탈퇴
	function delUser(){

		var check = confirm("정말로 선귀당귀를 탈퇴하시겠습니까?");
		var user_num  = document.getElementById("user_num").value;
		if(check){
			console.log(user_num);
		}else{
			return false;
		}
		
		var allData = {user_num: user_num};
		
		$.ajax({
            url : 'http://localhost:8080/ssun/deleteUser',
            method : 'POST',
            data : JSON.stringify(allData),
            processData : false,
            contentType : 'application/json',
            success : function(data) {
           	alert("탈퇴 완료되었습니다.\n그동안 이용해주셔서 감사합니다.");
           	logout();
            },
            error : function(data, status, err) {
               console.log("error: " + data);
            }
         });
	}
	

		
		
	
		
</script>




</head>
<body>

	<div class="ossn-page-loading-annimation">
		<div class="ossn-page-loading-annimation-inner">
			<div class="ossn-loading"></div>
		</div>
	</div>

	<div class="ossn-halt ossn-light"></div>
	<div class="ossn-message-box"></div>
	<div class="ossn-viewer" style="display: none"></div>

	<div class="opensource-socalnetwork">
		<div class="sidebar sidebar-close">
			<div class="sidebar-contents">
				<div id="newseed-uinfo" class="newseed-uinfo">
					<img id="newseed-uinfo-img"
						src="resources/img/e3852c91cacea4a823e607cccccb29c2.jpeg">
					<div class="name" style="width: 150px">
						<br>
						<div id="user-department-info" name="user-department-info"
							style="font-weight: bold; display: block; color: #fff; font-size: 16px"></div>
						<div id="user-name-info" name="user-name-info"
							style="font-weight: bold; display: block; color: #fff; font-size: 16px"></div>
					</div>
				</div>
				<div class="sidebar-menu-nav">
					<div id="sidebar-menu" name="sidebar-menu" class="sidebar-menu">
						<ul id="menu-content" class="menu-content collapse out">
							<li><a class="" href="http://localhost:8080/ssun/notice"><i
									class="fa fa-bullhorn fa-lg"></i>공지사항</a></li>
						
							<li><a class="" href="http://localhost:8080/ssun/newsFeed"><i
									class="fa fa-comments fa-lg"></i>메인 타임라인</a></li>

							<li data-toggle="collapse"
								data-target="#1471e4e05a4db95d353cc867fe317314"
								class="menu-section-groups active collapsed"
								aria-expanded="false"><a class=""
								href="javascript:void(0);"><i class="fa fa-comments fa-lg"></i>과별
									타임라인<span class="arrow"></span></a></li>
							<ul class="su-menu collapse"
								id="1471e4e05a4db95d353cc867fe317314" aria-expanded="false"
								style="height: 0px;">
								<li data-toggle="collapse" data-target="#1111"
									class="menu-section-links active in collapsed"
									aria-expanded="false"><a href="javascript:void(0);"><i
										class="fa fa-university fa-lg"></i>인문사회대학<span class="arrow"></span></a></li>
								<ul class="sub-sub-menu collapse" id="1111"
									aria-expanded="false" style="height: 0px;">
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=AA">국어국문학과</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=AB">상담심리사회복지학과</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=AC">역사문화콘텐츠학과</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=AD">미디어커뮤니케이션학과</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=AE">법·경찰학과</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=AF">글로벌한국학과</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=AG">시각디자인학과</a></li>
								</ul>
								<li data-toggle="collapse" data-target="#2222"
									class="menu-section-links active in collapsed"
									aria-expanded="false"><a class=""
									href="javascript:void(0);"><i
										class="fa fa-university fa-lg"></i>글로벌비즈니스대학<span
										class="arrow"></span></a></li>
								<ul class="sub-sub-menu collapse" id="2222"
									aria-expanded="false" style="height: 0px;">
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=BA">외국어자율전공학부</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=BB">글로벌경영학과</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=BC">IT경영학과</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=BD">국제경제통상학과</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=BE">국제레저관광학과</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=BF">국제관계·행정학부</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=BG">글로벌행정학과(야)</a></li>
								</ul>
								<li data-toggle="collapse" data-target="#3333"
									class="menu-section-links active in collapsed"
									aria-expanded="false"><a class=""
									href="javascript:void(0);"><i
										class="fa fa-university fa-lg"></i>신학순결대학<span class="arrow"></span></a></li>
								<ul class="sub-sub-menu collapse" id="3333"
									aria-expanded="false" style="height: 0px;">
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=CA">신학순결학과</a></li>
								</ul>
								<li data-toggle="collapse" data-target="#4444"
									class="menu-section-links active in collapsed"
									aria-expanded="false"><a class=""
									href="javascript:void(0);"><i
										class="fa fa-university fa-lg"></i>건강보건대학<span class="arrow"></span></a></li>
								<ul class="sub-sub-menu collapse" id="4444"
									aria-expanded="false" style="height: 0px;">
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=DA">제약생명공학과</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=DB">식품과학·수산생명의학부</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=DC">간호학과</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=DD">물리치료학과</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=DE">치위생학과</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=DF">응급구조학과</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=DG">스포츠과학부</a></li>
								</ul>
								<li data-toggle="collapse" data-target="#5555"
									class="menu-section-links active in collapsed"
									aria-expanded="false"><a class=""
									href="javascript:void(0);"><i
										class="fa fa-university fa-lg"></i>공과대학<span class="arrow"></span></a></li>
								<ul class="sub-sub-menu collapse" id="5555"
									aria-expanded="false" style="height: 0px;">
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=EA">건축사회환경공학부</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=EB">기계ICT융합공학부</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=EC">스마트자동차공학부</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=ED">전자공학과</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=EE">컴퓨터공학부</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=EF">글로벌소프트웨어학과</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=EG">신소재공학과</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=EH">환경생명화학공학과</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=EI">산업경영공학과</a></li>
									<li class="menu-section-item-friends"><a
										class="menu-section-item-a-friends"
										href="http://localhost:8080/ssun/newsFeed?dep=EJ">3D창의융합학과</a></li>
								</ul>
							</ul>

							<li data-toggle="collapse" data-target="#1234"
								class="menu-section-extra active collapsed" aria-expanded="true"><a
								class="" href="javascript:void(0);"><i
									class="fa fa-plus fa-lg"></i>부가기능<span class="arrow"></span></a></li>
							<ul class="sub-menu collapse" id="1234" aria-expanded="true"
								style="height: 0px;">
								<li class="menu-section-item-bus"><a
									class="menu-section-item-a-bus"
									href="http://localhost:8080/ssun/bus">셔틀버스
										시간표</a></li>
								<li class="menu-section-item-university"><a
									class="menu-section-item-a-university"
									href="http://lily.sunmoon.ac.kr/MainDefault.aspx">학교 메인
										홈페이지</a></li>
								<li class="menu-section-item-globe"><a
									class="menu-section-item-a-globe"
									href="http://sws.sunmoon.ac.kr/login.aspx">포털사이트</a></li>
								<li class="menu-section-item-clipboard"><a
									class="menu-section-item-a-clipboard"
									href="https://lms.sunmoon.ac.kr/ilos/main/main_form.acl">e-강의동</a></li>
							</ul>

							<li><a class="" href="http://localhost:8080/ssun/mypage"><i
									class="fa fa-user fa-lg"></i>마이페이지</a></li>
					</div>
				</div>
				<form id=user-info name=user-info>
					<!-- 유저정보 들어감니다~_~ -->
					<!-- <input type="hidden" id="user_num" name="user_num" value="">  -->
					<input type="hidden" id="user_name" name="user_name" value="">
					<input type="hidden" id="user_img" name="user_img"
						value="resources/img/e3852c91cacea4a823e607cccccb29c2.jpeg">
				</form>
				<br>
			</div>
		</div>
		<div class="ossn-page-container">
			<!-- ossn topbar -->
			<div class="topbar">
				<div class="container">
					<div class="row">
						<div class="col-md-2 left-side left">
							<div class="topbar-menu-left">
								<li id="sidebar-toggle" data-toggle='0'><a role="button"
									data-target="#"> <i class="fa fa-th-list"></i></a></li>
							</div>
						</div>
						<div class="col-md-7 site-name text-center hidden-xs hidden-sm">
							<span><a href="http://localhost:8080/ssun/newsFeed">😄 선문대
									귀는 당나귀 귀 😄</a></span>
						</div>
						<div class="col-md-3 text-right right-side">
							<div class="topbar-menu-right">
								<ul>
									<li class="ossn-topbar-dropdown-menu">
										<div class="dropdown">
											<a role="button" data-toggle="dropdown" data-target="#"><i
												class="fa fa-sort-desc"></i></a>
											<ul class="dropdown-menu multi-level" role="menu"
												aria-labelledby="dropdownMenu">
												<li><a class="menu-topbar-dropdown-account_settings"
													href="http://localhost:8080/ssun/mypage">프로필 수정</a></li>
												<li><a class="menu-topbar-dropdown-logout2"
													onclick="javascript:logout()">로그아웃</a></li>
											</ul>
										</div>
									</li>
									<!-- <li id="ossn-notif-friends"><a
										onClick="Ossn.NotificationFriendsShow(this);"
										class="ossn-notifications-friends" href="javascript:void(0);">
											<span> <span
												class="ossn-notification-container hidden"></span>
												<div class="ossn-icon ossn-icons-topbar-friends">
													<i class="fa fa-users"></i>
												</div>
										</span>
									</a></li> -->
									<li id="ossn-notif-messages"><a
										href="#" onclick="window.open('http://localhost:8080/ssun/Msg', 'msgList', 'resizable=no width=800px height=500px');return false"
										class="ossn-notifications-messages"
										role="button" data-toggle="dropdown"> <span> <span
												class="ossn-notification-container hidden"></span>
												<div class="ossn-icon ossn-icons-topbar-messages">
													<i class="fa fa-envelope"></i>
												</div>
										</span>
									</a></li>

									<!-- <li id="ossn-notif-notification"><a
										href="javascript:void(0);"
										onClick="Ossn.NotificationShow(this)"
										class="ossn-notifications-notification"
										onClick="Ossn.NotificationShow(this)" role="button"
										data-toggle="dropdown"> <span> <span
												class="ossn-notification-container hidden"></span>
												<div class="ossn-icon ossn-icons-topbar-notification">
													<i class="fa fa-globe"></i>
												</div>
										</span>
									</a></li> -->
									<div class="dropdown">
										<div
											class="dropdown-menu multi-level dropmenu-topbar-icons ossn-notifications-box">
											<div class="selected"></div>
											<div class="type-name">Notifications</div>
											<div class="metadata">
												<div style="height: 66px;">
													<div class="ossn-loading ossn-notification-box-loading"></div>
												</div>
												<div class="bottom-all">
													<a href="#">See All</a>
												</div>
											</div>
										</div>
									</div>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- ./ ossn topbar -->
			<div class="ossn-inner-page">
				<div class="container">
					<div class="row">
						<div class="ossn-layout-contents">
							<div class="ossn-system-messages">
								<div class="row">
									<div class="col-md-11 ossn-system-messages-inner"></div>
								</div>
							</div>
							<div class="ossn-profile container">
								<div class="row">
									<div class="col-md-11">
										<div class="ossn-profile">
											<div class="top-container">
												<div id="container" class="profile-cover">
													<div class="profile-cover-controls" style="display: none">
														<a href="javascript:void(0);"
															onclick="Ossn.Clk('.coverfile');"
															class='btn-action change-cover'> Change Cover </a> <a
															href="javascript:void(0);" id="reposition-cover"
															class='btn-action reposition-cover'> Reposition </a>
													</div>
													<form id="upload-cover" style="display: none;"
														method="post" enctype="multipart/form-data" style="display: none">
														<input type="file" name="coverphoto" class="coverfile"
															onchange="Ossn.Clk('#upload-cover .upload');" /> <input
															type="hidden" name="ossn_ts" value="1542354882" /> <input
															type="submit" name="ossn_token"
															value="8828f01c95a16becdc858ec731af20b2" /> <input
															type="submit" class="upload" />
													</form>
													<img id="draggable" class="profile-cover-img"
														src="resources/img/backgreen.png"
														style='top: -104px; left: 0px;' />
												</div>





												<div class="profile-photo">
													<img id="profile-photo"
														src="resources/img/noprofilemale-1024x645.gif"
														name="preview" id="preview" height="170" width="170"
														onclick="Ossn.Viewer('photos/viewer?user=administrator');" />
												</div>




												<div class="user-fullname">

													<div>
														<form id="profile-update" method="post"
															enctype="multipart/form-data">
															<input type="file" name="pfile" id="pfile"
																style="display: none" onchange='javascript:setImage()'
																value="" /> <input type="hidden" id="user_num"
																name="user_num" value=""> <input type="button"
																name="profile_upload" class="btn btn-primary"
																value="사진프로필 수정" onclick="inpufilecheck()" />
														</form>
													</div>
												</div>


												<!-- <div id='profile-hr-menu' class="profile-hr-menu">
													<ul>
														<li><a class="menu-user-timeline-timeline"
															href="https://demo.opensource-socialnetwork.org/u/administrator">Timeline</a></li>
														<li><a class="menu-user-timeline-friends"
															href="https://demo.opensource-socialnetwork.org/u/administrator/friends">Friends</a></li>
														<li><a class="menu-user-timeline-photos"
															href="https://demo.opensource-socialnetwork.org/u/administrator/photos">Photos</a></li>
													</ul>
												</div> -->

												<div id="profile-menu" class="profile-menu" style="display: none">
													<a
														href="https://demo.opensource-socialnetwork.org/u/administrator/edit"
														class='btn-action'> Update Info </a>
												</div>
												<div id="cover-menu" class="profile-menu">
													<a href="javascript:void(0);"
														onclick="Ossn.repositionCOVER();" class='btn-action'>
														Save Position </a>
												</div>
											</div>

										</div>
									</div>
								</div>
								<div class="row ossn-profile-bottom">
									<div class="col-md-11">
										<div class="ossn-layout-module">
											<div class="module-title">
												<div class="title">회원정보</div>
												<div class="controls"></div>
											</div>
											<div class="module-contents">
												<form id="mypage_form"
													action="https://demo.opensource-socialnetwork.org/action/profile/edit"
													class="ossn-form ossn-edit-form" method="post"
													enctype='multipart/form-data'>
													<fieldset>
														<input type="hidden" name="ossn_ts" value="1542354882" />
														<input type="hidden" name="ossn_token"
															value="8828f01c95a16becdc858ec731af20b2" />
														<div>
															<label> 학번(사번) </label> <input type='text' id="mypage_usernumber"
																name="mypage_usernumber" value="" readonly />
														</div>
														<div>
															<label> 신규비밀번호 </label> <input type='password'   id="mypage_password"
																name="mypage_password"  oninput="checkPwd()"/>
														</div>
															<div>
																<label> 비밀번호확인 </label> <input type='password'   id="password_confirm"
																name="password_confirm"  oninput="checkPwd()"/>	
														</div>
														<div>
														<input type="button" id="passwordChange" name="passwordChange" value="비밀번호변경"
														 class="btn btn-primary signupbtn" onclick="mypagePwdChange()"/>
														</div>
														<br>
															<div>
															<label> 이름 </label> <input type='text' id="mypage_name"
																name="mypage_name" value="" readonly />
																</div>
																<div>
																<label> 소속학과 </label> <input type='text' id="mypage_department" name="mypage_department"
																value="" readonly/>
																<input type='button' id="deleteUser" name="deleteUser" class="btn btn-primary"
																style="float: right;" onclick="delUser()" value="회원탈퇴" />
																</div>
														<input type="hidden" value="administrator" name="username" />
													
													</fieldset>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<footer>
					<div class="col-md-11">
						<div class="footer-contents">
							<div class="ossn-footer-menu">
								<a class="menu-footer-a_copyrights"
									href="https://demo.opensource-socialnetwork.org/">&copy;
									COPYRIGHT Open Source Social Network Demo</a><a
									class="menu-footer-about"
									href="https://demo.opensource-socialnetwork.org/site/about">About</a><a
									class="menu-footer-site"
									href="https://demo.opensource-socialnetwork.org/site/terms">Terms
									and Conditions</a><a class="menu-footer-privacy"
									href="https://demo.opensource-socialnetwork.org/site/privacy">Privacy</a><a
									class="menu-footer-powered"
									href="https://www.opensource-socialnetwork.org/">Powered by
									the Open Source Social Network.</a>
							</div>
						</div>
					</div>
					</footer>

				</div>
			</div>
		</div>
	</div>
	<!-- <div class="ossn-chat-base hidden-xs hidden-sm">
		<div class="ossn-chat-bar">
			<div class="friends-list">

				<div class="ossn-chat-tab-titles">
					<div class="text">Chat</div>
				</div>

				<div class="data">
					<div class="ossn-chat-none">No friends online</div>
				</div>
			</div>
			<div class="inner friends-tab">
				<div class="ossn-chat-icon">
					<div class="ossn-chat-inner-text ossn-chat-online-friends-count">
						Chat (<span>0</span>)
					</div>
				</div>
			</div>

		</div>

		<div class="ossn-chat-containers"></div>
	</div>
	<div class="ossn-chat-windows-long">
		<div class="inner">
			<div class="ossn-chat-none">No friends online</div>
			<script>Ossn.ChatBoot();</script>
		</div>
	</div> -->

</body>
</html>