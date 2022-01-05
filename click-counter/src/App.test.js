import Enzyme, { shallow } from 'enzyme';
import App from './App';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('render without error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test('render increment button', () => {});

test('render counter display', () => {});

test('counter display start at 0', () => {});

test('clicking button increment counter display', () => {});
