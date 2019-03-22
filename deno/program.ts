(async () => {
  let {stdin} = Deno;
  let result;
  let newLine = '\n'.charCodeAt(0);
  var buffer = new Uint8Array(32 * 1024);
  var tempBuffer = new Uint8Array(32 * 1024);
  function processLine(str) {
    console.log(str);
  }
  do {
    result = await stdin.read(buffer);
    for (var i = 0; i < result.nread; i++) {
      if (buffer[i] == newLine) {
        processLine(new TextDecoder("utf-8").decode(tempBuffer));
        tempBuffer = new Uint8Array(32 * 1024);
        continue;
      }

      tempBuffer[i] = buffer[i];
    }
  } while( result.eof == false );

  processLine(new TextDecoder("utf-8").decode(tempBuffer));

})();
