import React from 'react';
import {
  Button,
  MantineColor,
  NumberInput,
  useMantineTheme,
} from '@mantine/core';
import { useElementSize, useSetState } from '@mantine/hooks';
import toast from 'react-hot-toast';
import _dunna from '../../../src';

interface GeneratorProps {
  data: {
    name: string;
    description: string;
    type: 'number' | 'string' | 'enum';

    initialValue: number | string;
  }[];

  onClick: (
    dunna: typeof _dunna,
    state: any
  ) => { text: string; color: MantineColor };
}

const Generator = ({ data, onClick }: GeneratorProps) => {
  const { ref, width } = useElementSize();
  const theme = useMantineTheme();

  const _state = {};

  for (const item of data) {
    _state[item.name] = item.initialValue;
  }

  const [state, setState] = useSetState(_state);

  return (
    <div style={{ display: 'grid' }}>
      <table>
        <thead ref={ref}>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>
                {item.type === 'number' && (
                  <NumberInput
                    value={state[item.name]}
                    onChange={(value) => setState({ [item.name]: value })}
                  />
                )}
              </td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Button
        sx={{ width }}
        onClick={() => {
          const { text, color } = onClick(_dunna, state);

          toast(text, {
            position: 'bottom-right',
            style: { width: '200px', backgroundColor: theme.colors[color][6] },
          });
        }}
      >
        Generate
      </Button>
    </div>
  );
};

export default Generator;
