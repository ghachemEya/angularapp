import { Session } from './session';

const currentDate = new Date();
describe('Session', () => {
  it('should create an instance', () => {
    expect(new Session(1,"Formation Web","gh",currentDate,15,"aaouina",14,true)).toBeTruthy();
  });
});



