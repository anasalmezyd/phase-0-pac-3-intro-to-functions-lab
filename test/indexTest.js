require('./root.js');

function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  }
  else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  }
  else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello');
  })
})

describe('logShout(string)', function() {
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logShout('hello');

    expect(spy).toHaveBeenCalledWith('HELLO');

    console.log.restore();
  })
})

describe('logWhisper(string)', function() {
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logWhisper('HELLO');

    expect(spy).toHaveBeenCalledWith('hello');

    console.log.restore();
  })
})

describe('sayHiToHeadphonedRoommate(string)', function() {
  it('should handle various cases', function() {
    expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
    expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
    expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual("I would love to!");
  })
})
