import React from 'react';
import { shallow } from 'enzyme';
import Icon from './Icon';

test('It should have Death Knight image src if character class is Death Knight', () => {
  const className = 'Death Knight';
  const wrapper = shallow(<Icon name={className} size={32} />);
  const image = wrapper.find('img');

  const src = image.prop('src');
  expect(src).toBe('deathknight.jpg');
});
