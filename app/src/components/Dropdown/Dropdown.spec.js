import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './Dropdown';
import renderer from 'react-test-renderer';

describe('Dropdown', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Dropdown
          onChange={() => {}}
          label="hello"
          items={[]}
          selecedItems={[]}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render the correct amount of menuItems', () => {
    const props = {
      label: 'Factions',
      items: ['allinance', 'horde'],
      onChange: () => {},
    };

    const wrapper = shallow(<Dropdown {...props} />);
    const menuItems = wrapper.find('WithStyles(ForwardRef(MenuItem))');
    expect(menuItems.length).toBe(2);
  });

  it('should render the correct amount of items selected', () => {
    const props = {
      label: 'Factions',
      items: ['allinance', 'horde'],
      selecteditems: ['allinance'],
      onChange: () => {},
    };

    const wrapper = shallow(<Dropdown {...props} />);
    const menuItems = wrapper.find('WithStyles(ForwardRef(Select))');
    expect(menuItems.length).toBe(1);
  });
});
