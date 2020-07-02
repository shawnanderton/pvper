import React from 'react';
import { shallow } from 'enzyme';
import Icon from './Icon';


describe('Icon', () => {
  it('should have Death Knight image if character name is Death Knight', () => {
    const name = 'Death Knight';
    const wrapper = shallow(<Icon name={name} size={32} />);
    const image = wrapper.find('img');
  
    const src = image.prop('src');
    expect(src).toBe('deathknight.jpg');
  });
  
});

