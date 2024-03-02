import NextLink, { LinkProps as NextLinkProps } from 'next/link';

interface LinkProps extends NextLinkProps {
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} {...props}>
      <a>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
