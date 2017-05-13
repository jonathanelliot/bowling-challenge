'use strict'

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('starts with a player score of 0', function() {
    expect(frame.score).toEqual(0);
  });

  it('starts with 10 pins on a new frame', function() {
    expect(frame.pinsStanding).toEqual(10);
  });

  it('uses #bowl to play and change the score', function() {
    frame.bowl();
    expect(frame.score).toBeGreaterThanOrEqual(0);
  });

  it('moves straight to the next frame if first bowl is a strike', function() {
    frame.bowl();
    frame.score = 10;
    frame.nextFrame();
    expect(frame.score).toEqual(10);
    expect(frame.pinsStanding).toEqual(10);
  });

  it('allows a second bowl if a strike is not scored', function() {
    frame.bowl();
    frame.score = 6
    frame.bowlAgain();
    expect(frame.score).toBeGreaterThanOrEqual(6);
  });
});
