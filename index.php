<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN" "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="de" version="XHTML+RDFa 1.0" dir="ltr">
<head profile="http://www.w3.org/1999/xhtml/vocab">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

  <link rel="shortcut icon" href="http://drupal.christianhanne.de/sites/all/themes/christianhanne/favicon.ico" type="image/vnd.microsoft.icon" />

  <title>jQuery Dice (Demo) - christianhanne.de</title>

  <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
  <script type="text/javascript" src="jquery.dice.js"></script>

  <script type="text/javascript">
    $(document).ready(function() {
      $('#game').dice({
        'numPlayers' : 6,
        'numDices' : 3
      });
    });
  </script>

  <link rel="stylesheet" href="jquery.dice.css" type="text/css" media="all" />
</head>
<body>
  <div id="game"></div>
</body>
</html>
