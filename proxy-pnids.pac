function FindProxyForURL(url, host){
 if ( shExpMatch(url, "*pnidData") ) { return 'PROXY 127.0.0.1:8888'; }
 if ( shExpMatch(url, "*interactiveAdHocDiagrams") ) { return 'PROXY 127.0.0.1:8888'; }
  return "DIRECT";
}
