import React from 'react'
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import RadioIconButton from './RadioIconButton';

describe('RadioIconButton', () => {

     it('should render correctly', () => {
    const tree = renderer
      .create(
        <RadioIconButton  />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have Icon set', () => {
      const wapper =   shallow(<RadioIconButton />);
      const icon =  wapper.find('Icon');

        expect(icon.length).toBe(1);     
  });
   it('should have selected class style if selected is true', () => {
       const icon ={name:"horde", size:24};
      const wapper =   shallow(<RadioIconButton selected={true} icon={icon} />);
      const buttonSelected =  wapper.find('button.selected');

        expect(buttonSelected.length).toBe(1);     
  });

   it('should not have selected class style if selected is false', () => {
        const icon ={name:"horde", size:24};
      const wapper =   shallow(<RadioIconButton selected={false}  icon={icon} />);
      const buttonSelected =  wapper.find('button.selected');

        expect(buttonSelected.length).toBe(0);     
  });
});