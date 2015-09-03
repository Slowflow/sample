<?php
 class Weather {  
  public $xml;    
  function __construct ($city, $lang='ru', $charset='utf-8') {
   $base = 'http://www.google.com/ig/api';
   $params = 'weather=' . trim($city);
   $params .= '&hl=' . trim($lang);
   $params .= '&oe=' . trim($charset);
   $url = $base . '?' . $params;
   $this->xml = simplexml_load_file($url);
  }    
  function getInfo() {
   if (!$this->xml) return false;       
   $information = $this->xml->xpath("/xml_api_reply/weather/forecast_information");
   return $information[0];  
  }   
  function getCurrentWeather() {
   if (!$this->xml) return false;
   $current = $this->xml->xpath("/xml_api_reply/weather/current_conditions");       
   return $current[0];  
  }   
  function getForecast() {
   if (!$this->xml) return array();   
   $forecast_list = $this->xml->xpath("/xml_api_reply/weather/forecast_conditions");   
   return $forecast_list;  
  }   
 } 
?>