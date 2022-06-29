import React from 'react';
import { Container, Paper, Table } from '@mantine/core';
import { currencies } from '../../../../src/database';

interface CurrenciesProps {}

const Currencies = (props: CurrenciesProps) => {
  return (
    <Container>
      <Paper p="xl" withBorder shadow="xl">
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Code</th>
            </tr>
          </thead>

          <tbody>
            {currencies.map((currency) => (
              <tr>
                <td>{currency.name}</td>
                <td>{currency.code}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Paper>
    </Container>
  );
};

export default Currencies;
