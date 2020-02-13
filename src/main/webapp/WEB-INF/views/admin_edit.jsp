<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<script src="/cdn-cgi/apps/head/ARf53_7CZrph6eMZGwgXpTF2-tk.js"></script>
<title>SGDG : Admin_Edit User</title>
<link rel="shortcut icon" href="/ssun/resources/img/SGDG_favicon_96x96.png">

<!-- 
	Open Source Social Network (Ossn) https://www.opensource-socialnetwork.org/     
	BY Informatikon Technologies (http://informatikon.com/)
	BY SOFTLAB24 (https://www.softlab24.com/)
	-->

<link rel="stylesheet" type="text/css"
	href="/ssun/resources/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css"
	href="/ssun/resources/css/ossn.admin.default.css" />
<script src="/ssun/resources/js/ossn.en.language.js"></script>
<script src="/ssun/resources/js/jquery-1.11.1.min.js"></script>
<script src="/ssun/resources/js/jquery-ui.min.js"></script>
<script src="/ssun/resources/js/tinymce.min.js"></script>
<script
	src="https://demo.opensource-socialnetwork.org/components/OssnAutoPagination/vendors/jquery.scrolling.js?ossn_cache=4f3a726e"></script>
<script src="/ssun/resources/js/opensource.socialnetwork.js"></script>
<link rel="stylesheet" type="text/css"
	href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
<link rel="stylesheet" type="text/css"
	href="//fonts.googleapis.com/css?family=Roboto+Slab:300,700,400" />
<script src="/ssun/resources/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css"
	href="/ssun/resources/css/jquery-ui.css" />
<script>
	Ossn.site_url = 'https://demo.opensource-socialnetwork.org/';
	Ossn.Config = {
		"token" : {
			"ossn_ts" : 1543456674,
			"ossn_token" : "a1837ea18fecd559f210fe5d97ada487"
		},
		"cache" : {
			"last_cache" : "4f3a726e",
			"ossn_cache" : "1"
		}
	};
	Ossn.Init();
	
	function logout(){
	      console.log("logout called!");
	      
	      var user_num = ${sessionScope.user_num};
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
	         },
	         error : function(data, status, err) {
	            //alert('error');
	            console.log("error: " + data);
	         }
	      });         
	      
	   }
	
	// 로그인 여부 체크 함수(newsFeed.jsp)
	function loginCheckProc(data, user_num) {
	   
	   console.log("loginCheckProc: 1(세션값 초기화) OR 2(실패): "+data);
	   if ( data == "1" ){
	      console.log("loginCheckProc 세션값 없어야..:" + user_num);
	      window.location.href="http://localhost:8080/ssun";
	   }else{
	      console.log("세션값 초기화 실패!");
	         
	   }
	}
</script>
<script>
	tinymce
			.init({
				toolbar : "bold italic underline alignleft aligncenter alignright bullist numlist image media link unlink emoticons autoresize fullscreen insertdatetime print spellchecker preview",
				selector : '.ossn-editor',
				plugins : "code image media link emoticons fullscreen insertdatetime print spellchecker preview",
				convert_urls : false,
				relative_urls : false,
				language : "en",
			});
</script>

<script>

$(document).ready(function() {
	var department = "${person.adminEdit_depcode}";
	var authority = "${person.adminEdit_certify}";
	
	$('#editUser_dep').val(department).prop("selected", true);
	
	if(authority == "b") {
		$('#editUser_certify').val("blockOn").prop("selected", true);
	} else {
		$('#editUser_certify').val("blockOff").prop("selected", true);
	}
	
});

	//학과 정보 변경
function editDepartment(editUser_dep) {
	var formData = new FormData($("#edit_form")[0]);
    
    $.ajax({
          url : 'http://localhost:8080/ssun/editDepartment',
          method : 'POST',
          data : formData,
          processData : false,
          contentType : false,
          success : function(data) {
            console.log("학과: " + data);
            alert("정보가 성공적으로 변경되었습니다!");
            window.location.href="http://localhost:8080/ssun/admin/users";
          },
          error : function(data, status, err) {
             console.log("error: " + data);
          }
       });
 } 
							
</script>



</head>
<body>
	<div class="header">
		<div class="container">

			<div class="row">
				<div class="col-md-6 col-sm-6 col-xs-6">
					<!-- <img style="width:181px;height:45px" src="/ssun/resources/img/SGDG_icon.png"/> -->
					<div class="page_title">선귀당귀 관리자 페이지:D</div>
				</div>
				<div class="col-md-6 col-sm-6 col-xs-6 header-dropdown">
					<ul class="navbar-right">
						<div class="dropdown">
							<a id="dLabel" role="button" data-toggle="dropdown"
								data-target="#"><i class="fa fa-bars fa-3"></i></a>
							<ul class="dropdown-menu multi-level" role="menu"
								aria-labelledby="dropdownMenu">
								<li><a href="http://localhost:8080/ssun/newsFeed">메인페이지로
										돌아가기</a></li>
								<li><a href="" onclick="javascript:logout();">로그아웃</a></li>
							</ul>
						</div>
					</ul>
				</div>
			</div>

		</div>
	</div>
	<div class="row no-right-margins">
		<div class="topbar-menu">
			<div class="navbar navbar-default navbar-admin-second"
				role="navigation">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<button type="button" class="navbar-toggle"
								data-toggle="collapse" data-target="#navigationbar">
								<span class="sr-only">Toggle navigation</span> <span
									class="icon-bar"></span> <span class="icon-bar"></span> <span
									class="icon-bar"></span>
							</button>
							<div class="collapse navbar-collapse" id="navigationbar">
								<ul class="nav navbar-nav">
									<li><a class="menu-topbar-admin-home"
										href="http://localhost:8080/ssun/admin/users">사용자 관리</a></li>
									<li><a class="menu-topbar-admin-home"
										href="http://localhost:8080/ssun/admin/stats">선귀당귀 통계</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="ossn-layout-admin">
					<div class="ossn-system-messages">
						<div class="row">
							<div class="col-md-12 ossn-system-messages-inner"></div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 contents">
							<div class="page-title">사용자 정보 수정</div>
							<form
								action="https://demo.opensource-socialnetwork.org/action/admin/edit/user"
								class="ossn-form ossn-admin-form" method="post"
								enctype='multipart/form-data' id="edit_form">
								<fieldset>
									<input type="hidden" name="ossn_ts" value="1543456674" /> <input
										type="hidden" name="ossn_token"
										value="a1837ea18fecd559f210fe5d97ada487" />
									<div>
										<label> 이름 </label> <input type='text' id="editUser_name"
											name="editUser_name" value="${person.adminEdit_name}" readonly="readonly" />
									</div>
									<div>
										<label> 학번(사번) </label> <input type='text' id="editUser_num"
											name="editUser_num" value="${person.adminEdit_num}" readonly="readonly" />
									</div>
									<div>
										<label>학과</label> <select id="editUser_dep"
											name="editUser_dep">
											<%-- <option value="${person.adminEdit_depcode}">학과선택</option> --%>
											<option value="AA">국어국문학과</option>
											<option value="AB">상담심리학과</option>
											<option value="AC">역사문화콘텐츠학과</option>
											<option value="AD">미디어커뮤니케이션학과</option>
											<option value="AE">법·경찰학과</option>
											<option value="AF">글로벌한국학과</option>
											<option value="AG">시각디자인학과</option>
											<option value="BA">외국어자율전공학부</option>
											<option value="BB">글로벌경영학과</option>
											<option value="BC">IT경영학과</option>
											<option value="BD">국제경제통상학과</option>
											<option value="BE">국제레저관광학과</option>
											<option value="BF">국제관계행정학부</option>
											<option value="BG">글로벌행정학과(야)</option>
											<option value="CA">신학순결학과</option>
											<option value="DA">제약생명공학과</option>
											<option value="DB">식품과학·수산생명의학과</option>
											<option value="DC">간호학과</option>
											<option value="DD">물리치료학과</option>
											<option value="DE">치위생학과</option>
											<option value="DF">응급구조학과</option>
											<option value="DG">스포츠과학부</option>
											<option value="EA">건축사회환경공학부</option>
											<option value="EB">기계ICT융합공학부</option>
											<option value="EC">스마트자동차공학부</option>
											<option value="ED">전자공학과</option>
											<option value="EE">컴퓨터공학부</option>
											<option value="EF">글로벌소프트웨어학과</option>
											<option value="EG">신소재공학과</option>
											<option value="EH">환경생명화학공학과</option>
											<option value="EI">산업경영공학과</option>
											<option value="EJ">3D창의융합학과</option>
										</select>

									</div>
									<div>
										<label> 포털이메일 </label> <input type='text' id="editUser_portal"
											name="editUser_portal" value="${person.adminEdit_protal}"
											readonly="readonly" />
									</div>
									<div>
										<label> 사용자 차단여부 </label> <select id="editUser_certify"
											name="editUser_certify">
											<!-- <option value="choose">권한선택</option> -->
											<option value="blockOn">O</option>
											<option value="blockOff">X</option>
											</select>
									</div>

									<div>
										<input type="hidden" value="administrator" name="username" />
										<input type="button" onclick="editDepartment()"
											class="ossn-admin-button button-dark-blue btn btn-promary" value="정보변경" />
									</div>
						</div>
						</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- footer -->
	<footer>
		<div class="row">
			<div class="col-md-6">
				&copy; COPYRIGHT 2018 <a
					href="https://demo.opensource-socialnetwork.org/">Open Source
					Social Network</a>
			</div>
			<div class="col-md-6 text-right"></div>
		</div>
	</footer>
	<!-- /footer -->
	</div>
	<!-- /container -->
</body>
</html>