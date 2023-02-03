import { mount } from '@vue/test-utils';
import PomodoroTimer from '../../../../src/components/static/pomodoro.vue';

describe.only('PomodoroTimer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(PomodoroTimer);
  });

  it('starts with 25 minutes and 0 seconds', () => {
    expect(wrapper.vm.minutes).to.equal(25);
    expect(wrapper.vm.seconds).to.equal(0);
  });

  it('decreases the timer by 1 second', done => {
    wrapper.vm.startTimer();
    setTimeout(() => {
      expect(wrapper.vm.minutes).to.equal(24);
      expect(wrapper.vm.seconds).to.equal(59);
      done();
    }, 1000);
  });

  it('stops the timer', () => {
    wrapper.vm.startTimer();
    wrapper.vm.stopTimer();
    expect(wrapper.vm.timer).to.equal(null);
  });

  it('resets the timer', () => {
    wrapper.vm.startTimer();
    wrapper.vm.resetTimer();
    expect(wrapper.vm.minutes).to.equal(25);
    expect(wrapper.vm.seconds).to.equal(0);
  });
});
