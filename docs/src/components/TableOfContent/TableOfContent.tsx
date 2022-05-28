import { Box, Text, Group, ScrollArea } from '@mantine/core';
import useStyles from './TableOfContent.styles';

interface TableOfContentProps {
  links: { label: string; link: string; order: number }[];
  active: string;
}

const TableOfContent = ({ links, active }: TableOfContentProps) => {
  const { classes, cx } = useStyles();

  const items = links.map((item) => (
    <Box<'a'>
      component="a"
      href={item.link}
      onClick={(event) => event.preventDefault()}
      key={item.label}
      className={cx(classes.link, {
        [classes.linkActive]: active === item.link,
      })}
      sx={(theme) => ({ paddingLeft: item.order * theme.spacing.md })}
    >
      {item.label}
    </Box>
  ));

  return (
    <Box>
      <ScrollArea sx={{ height: '100vh' }}>{items}</ScrollArea>
    </Box>
  );
};

export default TableOfContent;
