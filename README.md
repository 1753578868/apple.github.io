# apple.github.io
 1. 这是仿Apple网站图片特效web前端代码。
 2.用于营销方面的。
 <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Apple淡入淡出效果代码</title>
<SCRIPT type=text/javascript src="js/prototype.js"></SCRIPT>
<SCRIPT type=text/javascript src="js/scriptaculous.js"></SCRIPT>
<SCRIPT type=text/javascript src="js/browserdetect.js"></SCRIPT>
<SCRIPT type=text/javascript src="js/apple_core.js"></SCRIPT>
<SCRIPT type=text/javascript src="js/ac_blackout.js"></SCRIPT>
<SCRIPT type=text/javascript>
		var blackout = new AC.Blackout('billboard', 'macbookair20101020', {
			showWhenReferredByApple: false,
			showOnce: true
		});
		blackout.addImage('images/macbookair_hero_blackout20101020.jpg', { offsets: [42, 197], dimensions: [1108, 302] });
		blackout.addImage('images/macbookair_title20101020.png', { offsets: [232, 54], dimensions: [516, 57] });
</SCRIPT>
<LINK rel=stylesheet type=text/css href="css/apple.css">
</head>
<body style="text-align:center">

<DIV class=main>
  <DIV id=billboard class=billboard>
    <DIV class=black> <A class=block href="http://www.apple.com/" target="_blank">
      <H1><IMG alt="MacBook Air" src="img/macbookair_title20101020.png" width=516 height=57></H1>
      <P><IMG alt="MacBook" src="img/lrtk.png" width=369 height=36></P>
      <IMG class=hero alt="" src="img/macbookair_hero20101020.jpg" width=937 height=302></A> </DIV>
  </DIV>
</DIV>
</body>
</html>

