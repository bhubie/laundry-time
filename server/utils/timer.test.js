var expect = require('expect');
var sinon  = require('sinon');
var {Timer} = require ('./timer');
var clock;

describe('Timer', () => {
    before(() => {
        clock = sinon.useFakeTimers();
    });

    after(() => {
        clock.restore();
    });

    it('should return remaining time of 6000 when Timer.Start is not called', () => {
        var timer = new Timer(6000);

        var remainingTime = timer.getRemainingTimeInMillis();

        expect(remainingTime).toBe(6000);
    });

    it('should return remaining time of 5000 when a second has passed', () => {
        var timer = new Timer(6000);
        //clock.tick(1000);
        timer.start();
        timer.tickTimer();

        var remainingTime = timer.getRemainingTimeInMillis();

        expect(remainingTime).toBe(5000);

    });
});