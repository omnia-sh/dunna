import { Box, ScrollArea } from '@mantine/core';
import useStyles from './TableOfContent.styles';
import links from './links';

interface TableOfContentProps {
  active: string;
}

const TableOfContent = ({ active }: TableOfContentProps) => {
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
      sx={(theme) => ({
        paddingLeft: item.order * theme.spacing.md,
        fontFamily: 'Roboto',
      })}
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
