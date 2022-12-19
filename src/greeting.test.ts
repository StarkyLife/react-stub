import { getGreeting } from './greeting';

it('greets', () => {
  expect(getGreeting('Ilshat')).toEqual('Yo, Ilshat!');
});
