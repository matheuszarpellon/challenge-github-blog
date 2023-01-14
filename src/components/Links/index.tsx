import React, { ComponentProps, ReactNode } from 'react';
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkContainer } from './styles';

type LinkProps = ComponentProps<typeof LinkContainer> & {
  text: string;
  icon?: ReactNode;
  variant?: "iconLeft";
}

export const Link: React.FC<LinkProps> = ({text, icon, ...rest}) => {
  return (
    <LinkContainer {...rest}>
      {text}
      {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
    </LinkContainer>
  );
};