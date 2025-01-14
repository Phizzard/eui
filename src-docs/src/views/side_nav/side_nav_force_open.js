import React, { useState } from 'react';

import { EuiIcon, EuiSideNav } from '../../../../src/components';

export default () => {
  const [isSideNavOpenOnMobile, setIsSideNavOpenOnMobile] = useState(false);
  const [selectedItemName, setSelectedItem] = useState(null);

  const toggleOpenOnMobile = () => {
    setIsSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };

  const selectItem = (name) => {
    setSelectedItem(name);
  };

  const createItem = (name, data = {}) => {
    // NOTE: Duplicate `name` values will cause `id` collisions.
    return {
      ...data,
      id: name,
      name,
      isSelected: selectedItemName === name,
      onClick: () => selectItem(name),
    };
  };

  const sideNav = [
    createItem('Kibana', {
      icon: <EuiIcon type="logoKibana" />,
      items: [
        createItem('Has normal children', {
          items: [
            createItem('Without forceOpen', {
              items: [createItem('Child 1'), createItem('Child 2')],
            }),
          ],
        }),
        createItem('Normally not open', {
          items: [
            createItem('Has forceOpen:true', {
              forceOpen: true,
              items: [createItem('Child 3'), createItem('Child 4')],
            }),
          ],
        }),
        createItem('With forceOpen:true', {
          forceOpen: true,
          items: [
            createItem('Normal child', {
              items: [createItem('Child 5'), createItem('Child 6')],
            }),
          ],
        }),
      ],
    }),
  ];

  return (
    <EuiSideNav
      mobileTitle="Navigate within $APP_NAME"
      toggleOpenOnMobile={toggleOpenOnMobile}
      isOpenOnMobile={isSideNavOpenOnMobile}
      items={sideNav}
      style={{ width: 192 }}
    />
  );
};
