import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import { EllipsisMenu } from './EllipsisMenu';

describe('EllipsisMenu - component', () => {
  it('Displays children on click', () => {
    const component = mount(
      <EllipsisMenu>
        <span>EllipsisMenu Children</span>
      </EllipsisMenu>,
    );

    expect(component.state().showChildren).toEqual(false);
    expect(component.text()).toNotContain('EllipsisMenu Children');

    component.find('button').simulate('click');

    expect(component.state().showChildren).toEqual(true);
    expect(component.text()).toContain('EllipsisMenu Children');
  });
});
