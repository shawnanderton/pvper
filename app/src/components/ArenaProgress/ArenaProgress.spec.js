import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Dropdown from './ArenaProgress';
import ArenaProgress from './ArenaProgress';
import { ExpansionPanelActions } from '@material-ui/core';

describe('ArenaProgress', () => {
  it('should render with out crashing', () => {
    const wrapper = shallow(
      <ArenaProgress won={100} lost={100} played={200} />,
    );
  });
});
