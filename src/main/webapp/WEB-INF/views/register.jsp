<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>SGDG : Register</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
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





<script>
	
	//학번 중복 확인
	$(document).on('click', '#idcheck', function() {
		var user_num = $('#user_num').val();
		$.ajax({
			url : 'http://localhost:8080/ssun/numconfirm',
			type : 'POST',
			data : {
				'user_num' : user_num
			},
			contentType : "application/x-www-form-urlencoded; charset=UTF-8",
			dataType : "json",
			success : function(data) {
				console.log()
				if (data == 0) {
					console.log("success");
					alert('사용가능한 학번입니다.');
					document.getElementById("registerBtn").disabled = false;
				} else {
					console.log("fail");
					alert('이미 가입된 학번입니다.');
					document.getElementById("registerBtn").disabled = true;
				}

			},
			error : function(XMLHttpRequest, textStatus, errorThrown) {

				alert('서버와의 통신이 원할하지 않습니다.\n다시 시도 해 주십시오.');
			}
		});
	});
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
		<div class="ossn-page-container">
			<!-- ossn topbar -->
			<div class="topbar">
				<div class="container">
					<div class="row">
						<div class="col-md-2 left-side left"></div>
						<div class="col-md-7 site-name text-center ">
							<span><a href="http://localhost:8080/ssun/">😄 선문대
									귀는 당나귀 귀 😄</a></span>
						</div>
						<div class="col-md-3 text-right right-side">
							<div class="topbar-menu-right">
								<li class="ossn-topbar-dropdown-menu">
									<div class="dropdown"></div>
								</li>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- ./ ossn topbar -->
			<div class="ossn-inner-page">
				<div class="ossn-layout-startup">
					<div class="container">
						<div class="row">
							<div class="ossn-system-messages">
								<div class="row">
									<div class="col-md-11 ossn-system-messages-inner"></div>
								</div>
							</div>
							<div class="ossn-home-container">
								<div class="inner">
									<div class="row">
										<div class="col-md-6 col-center ossn-page-contents">

											<div class="ossn-widget ">
												<div class="widget-heading">회원가입</div>
												<div class="widget-contents">
													<form id="ossn-login" name="register-form" action="/ssun/insertuser"
														class="ossn-form" method="post">
														<fieldset>
															<input type="hidden" name="ossn_ts" value="1541659967" />
															<input type="hidden" name="ossn_token"
																value="c8b51be7bd1e5ddcc3fff53e4ac1a99c" /> <label>선문대학교
																포털 이메일</label>
															<div>
																<input type="text" name="portal_email"
																	placeholder="ex) haedal2" style="width: 130px;" required/>
																@sunmoon.ac.kr
															</div>
															<br>
															<div>
																<label>학번(사번)</label> <input type="text" id="user_num"
																	name="user_num" placeholder="ex) 2016244025" required/> <input
																	type="button" id="idcheck" name="idcheck" value="중복확인"
																	onclick="" class="btn btn-primary" />
															</div>
															<br>
															<div>
																<label>비밀번호</label> <input type="password"
																	name="password" placeholder="비밀번호 입력" required/>
															</div>
															<br>
															<div>
																<label>이름</label> <input type="text" name="user_name"
																	placeholder="ex) 김예린" required/>
															</div>
															<br>
															<div>
																<label>학과</label> <select name=user_department>
																	<option value="AA">국어국문학과</option>
																	<option value="AB">상담심리학과</option>
																	<option value="AC">역사문화콘텐츠학과</option>
																	<option value="AD">미디어커뮤니케이션학과</option>
																	<option value="AE">법경찰학과</option>
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
																	<option value="DB">식품과학수산생명의학과</option>
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
																</select> <br>
															</div>


															<!-- 	<div>
																	<div>
																		<input type="submit" value="인증번호 전송"
																			class="btn btn-primary" />
																	</div>
																	
																	<div class="ossn-widget "> -->


															<div class="widget-contents">

																<div>
																	<p>학교 포털로 발송된 메일을 확인해주셔야 로그인이 가능합니다.</p>
																	<input type="submit" id="registerBtn" value="회원가입"
																		class="btn btn-primary"/>
																</div>
															</div>
												</div>
											</div>

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
								COPYRIGHT OSSN Demo</a><a class="menu-footer-about"
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
	</div>



	<script type="text/javascript">
		var _paq = _paq || [];
		/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
		_paq.push([ 'trackPageView' ]);
		_paq.push([ 'enableLinkTracking' ]);
		(function() {
			var u = "//analytic.softlab24.com/";
			_paq.push([ 'setTrackerUrl', u + 'piwik.php' ]);
			_paq.push([ 'setSiteId', '2' ]);
			var d = document, g = d.createElement('script'), s = d
					.getElementsByTagName('script')[0];
			g.type = 'text/javascript';
			g.async = true;
			g.defer = true;
			g.src = u + 'piwik.js';
			s.parentNode.insertBefore(g, s);
		})();
	</script>

</body>
</html>
