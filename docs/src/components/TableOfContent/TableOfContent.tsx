import Link from 'next/link';
import { Box, ScrollArea } from '@mantine/core';
import useStyles from './TableOfContent.styles';
import links from './links';

interface TableOfContentProps {
  active: string;
}

const TableOfContent = ({ active }: TableOfContentProps) => {
  const { classes, cx } = useStyles();

  const items = links.map((item) => (
    <Link key={item.label} href={item.link} passHref>
      <Box<'a'>
        component="a"
        href={item.link}
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
    </Link>
  ));

  return (
    <Box className={classes.root}>
      <ScrollArea sx={{ height: '100vh' }}>{items}</ScrollArea>
    </Box>
  );
};

export default TableOfContent;
