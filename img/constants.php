<?php
	if(session_id() == '') 
	{
    	session_start();
	}	
	
	if(isset($_SERVER['HTTP_ACCEPT_ENCODING']) && substr_count($_SERVER['HTTP_ACCEPT_ENCODING'], "gzip"))
	{
		ob_start("ob_gzhandler");
	} 
	else
	{
		ob_start();
	} 
	
	define('DB_USERNAME', 'brasovto_user');
	define('DB_SERVER', '');
	define('DB_PASS', 'OLD_SCHOOL132');
	define('DB_NAME', 'brasovto_brasovtour');
	define('SERVER_PATH', 'www.brasovtour.com/');
	define('ADMIN_PATH', 'admin/');
	
	date_default_timezone_set("Europe/Bucharest");
	
	if (get_magic_quotes_gpc()) 
	{
	    $process = array(&$_GET, &$_POST, &$_COOKIE, &$_REQUEST);
	    while (list($key, $val) = each($process)) 
	    {
	        foreach ($val as $k => $v) {
	            unset($process[$key][$k]);
	            if (is_array($v)) {
	                $process[$key][stripslashes($k)] = $v;
	                $process[] = &$process[$key][stripslashes($k)];
	            } else {
	                $process[$key][stripslashes($k)] = stripslashes($v);
	            }
	        }
	    }
	    unset($process);
	}
?>