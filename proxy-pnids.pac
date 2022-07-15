function FindProxyForURL(url, host){
 if ( !shExpMatch(host, "localhost") ) { return "DIRECT"; }
  return 'PROXY 127.0.0.1:8888';
}
