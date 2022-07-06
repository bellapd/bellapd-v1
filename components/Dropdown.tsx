import React from "react";
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

const MenuContainer = () => {
  return (
    <Flex justifyContent="center" alignItems="right" p={{ base: 4, sm: 3 }}>
      <DropDownMenu />
    </Flex>
  );
};

const dropdownLinks = [
  {
    id: "01",
    name: "About",
    path: "/about",
  },
  {
    id: "02",
    name: "Blog",
    path: "/blog",
  },
  {
    id: "03",
    name: "Portfolio",
    path: "/portfolio",
  },
];

const DropDownMenu = () => {
  return (
    <Menu autoSelect={false} isLazy>
      {({ isOpen, onClose }) => (
        <>
          <MenuButton>
            <Flex alignItems="center" fontWeight="500">
              <Text>Menu</Text>
              <Icon
                as={BiChevronDown}
                h={5}
                w={5}
                ml={1}
                transition="all .25s ease-in-out"
                transform={isOpen ? "rotate(180deg)" : ""}
              />
            </Flex>
          </MenuButton>
          <MenuList
            border="1px solid"
            boxShadow={useColorModeValue(
              "2px 4px 6px 2px rgba(160, 174, 192, 0.6)",
              "2px 4px 6px 2px rgba(9, 17, 28, 0.6)"
            )}
          >
            {dropdownLinks.map((link, index) => (
              <MenuLink
                key={index}
                id={link.id}
                name={link.name}
                path={link.path}
                onClose={onClose}
              />
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

interface MenuLinkProps {
  id: string;
  name: string;
  path: string;
  onClose: () => void;
}

const MenuLink = ({ id, name, path, onClose }: MenuLinkProps) => {
  return (
    <Link href={path} onClick={() => onClose()}>
      <MenuItem>
        <Text>
          <strong>{id} </strong>
          {name}
        </Text>
      </MenuItem>
    </Link>
  );
};

export default MenuContainer;
