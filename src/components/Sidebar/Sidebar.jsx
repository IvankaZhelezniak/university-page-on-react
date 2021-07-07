import React from 'react';
import { Aside, Header, Menu, MenuItem, Text } from './Sidebar.styles';
import { menuConfig } from 'utils/menu';

export function Sidebar() {
  return (
    <Aside>
      <Header />
      <Menu>
        {menuConfig.map(({ name, icon }) => (
          <MenuItem key={name}>
            {icon}
            <Text>{name}</Text>
          </MenuItem>
        ))}

        {/* <MenuItem>
                   <HiBookOpen/> Университет
                </MenuItem>
                <MenuItem>
                    <HiAcademicCap/> Факультеты
                </MenuItem> */}
      </Menu>
    </Aside>
  );
}
