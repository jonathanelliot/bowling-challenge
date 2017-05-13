'use strict'

describe('Frame', function() {
  var frame;
  var game;
  var score;

  beforeEach(function() {
    frame = new Frame();
    game = new Game();
    score = []
  });

  describe('Parameters', function() {
    it('starts with a player score of 0 for the frame', function() {
      expect(frame.frameScore).toEqual(0);
    });
    it('starts with 10 pins', function() {
      expect(frame.START_PINS).toEqual(10);
    });
  });

  describe('Functions', function() {
    it('uses #bowl to play and change the score', function() {
      var bowlSpy = spyOn(frame, 'bowl').and.callFake(function() {
        return 5;
      });
      expect(frame.bowl()).toEqual(5);
    });
    it('uses #nextFrame to start a new frame', function() {
      frame.nextFrame();
      expect(frame.frameScore).toEqual(0);
      expect(frame.START_PINS).toEqual(10);
    });
  });

  describe('Behaviour', function() {
    it('moves straight to the next frame if first bowl is a strike', function() {
      var bowlSpy = spyOn(frame, 'bowl').and.callFake(function() {
        return 10;
      });
      expect(score).toEqual([10]);
      expect(frame.frameScore).toEqual(0);
      expect(frame.START_PINS).toEqual(10);
    });
  });

  it('calls #bowlAgain if a strike is not scored', function() {
    var bowlSpy = spyOn(frame, 'bowl').and.callFake(function() {
      return 6;
    });
    expect(frame.frameScore).toEqual(6);
    var bowlAgainSpy = spyOn(frame, 'bowlAgain').and.callFake(function() {
      return 3;
    });
    expect(frame.frameScore).toEqual(9);
  });

  it('resets the frameScore on a new frame', function() {
    var bowlSpy = spyOn(frame, 'bowl').and.returnValue(8);
    expect(frame.frameScore).toEqual(0);
  })
});
