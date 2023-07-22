<?php
$content = '';
foreach ($_POST as $key => $value) {
	if ($value) {
		$content .= "<b>$key</b>: $value\n";
	}
}
if (trim($content)) {
	$content = "<b>Заявка с сайта</b>\n" . $content;
	$apiToken = "6270153237:AAH2fxIij57PlyCQefs7AKjNLGx9KapyFGE";
	$data = [
		'chat_id' => '@za9vkissfs',
		'text' => $content,
		'parse_mode' => 'HTML'
	];
	$response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?" . http_build_query($data));
}
?>