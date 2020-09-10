import React from 'react'
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import RadioIconButtonGroup from './RadioIconButtonGroup';
import RadioIconButton from '../RadioIconButton';

describe('RadioIconButtonGroup', () => {
     it('should render correctly', () => {
    const tree = renderer
      .create(
        <RadioIconButtonGroup items={[]} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
it('should render to  ', () => {
    const items = [
        { selected:true, icon:{name:'horde', size:24}}
    ]
    const wrapper = mount(<RadioIconButtonGroup items={items} />);
    console.log(wrapper.find("fieldset").debug());
    expect(wrapper.find("fieldset").children().length).toBe(1);
});

});