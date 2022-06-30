import React from 'react';
import { Container, Paper, Table } from '@mantine/core';
import { colors } from '../../../../src/database';

interface ColorsProps {}

const Colors = (props: ColorsProps) => {
  return (
    <Container>
      <Paper p="xl" withBorder shadow="xl">
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Hex</th>
            </tr>
          </thead>

          <tbody>
            {colors.map((color) => (
              <tr>
                <td>{color.name}</td>
                <td>{color.hex}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Paper>
    </Container>
  );
};

export default Colors;
