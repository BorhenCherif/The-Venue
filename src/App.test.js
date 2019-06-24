import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

