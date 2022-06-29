import React, { useEffect, useState } from 'react';
import { Container, Paper, SegmentedControl, Table } from '@mantine/core';
import { chunk } from '@site/utils';
import {
  maleFirstNames,
  femaleFirstNames,
  lastNames,
} from '../../../../src/database';

interface NamesProps {}

const Names = (props: NamesProps) => {
  const [section, setSection] = useState('mfn');
  const [names, setNames] = useState([]);

  useEffect(() => {
    let list =
      section === 'mfn'
        ? maleFirstNames
        : section === 'ffn'
        ? femaleFirstNames
        : lastNames;

    setNames(chunk(list, 7));
  }, [section]);

  return (
    <Container>
      <Paper p="xl" withBorder shadow="xl">
        <SegmentedControl
          my="xl"
          onChange={setSection}
          data={[
            {
              label: 'Male First Names',
              value: 'mfn',
            },

            {
              label: 'Female First Names',
              value: 'ffn',
            },

            {
              label: 'Last Names',
              value: 'ln',
            },
          ]}
        />

        <Table>
          <tbody>
            {names.map((nameList) => (
              <tr>
                {nameList.map((name) => (
                  <td>{name}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Paper>
    </Container>
  );
};

export default Names;
