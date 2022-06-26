import React from 'react';
import {
  Button,
  MantineTheme,
  NumberInput,
  Select,
  TextInput,
  useMantineTheme,
} from '@mantine/core';
import { useElementSize, useSetState } from '@mantine/hooks';
import toast from 'react-hot-toast';
import _dunna from '../../../src';

interface GeneratorProps {
  data?: {
    name: string;
    description: string;
    type: 'number' | 'text' | 'enum';

    initialValue: number | string;
    values?: string[];
  }[];

  onClick?: (
    dunna: typeof _dunna,
    state: any,
    theme: MantineTheme
  ) => { text: string; styles: React.CSSProperties };
}

const Generator = ({ data = [], onClick }: GeneratorProps) => {
  const { ref, width } = useElementSize();
  const theme = useMantineTheme();

  const _state = {};

  for (const item of data) {
    _state[item.name] = item.initialValue;
  }

  const [state, setState] = useSetState(_state);

  console.log(state);

  return (
    <div style={{ display: 'grid' }}>
      {data.length > 0 && (
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
                  {item.type === 'number' ? (
                    <NumberInput
                      value={state[item.name]}
                      onChange={(value) => setState({ [item.name]: value })}
                    />
                  ) : item.type === 'text' ? (
                    <TextInput
                      value={state[item.name]}
                      onChange={(e) =>
                        setState({ [item.name]: e.target.value })
                      }
                    />
                  ) : (
                    <Select
                      data={item.values}
                      value={state[item.name] as string}
                      onChange={(value) => setState({ [item.name]: value })}
                    />
                  )}
                </td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {onClick && (
        <Button
          sx={{ width: width || 200 }}
          onClick={() => {
            const { text, styles } = onClick(_dunna, state, theme);

            toast(text, {
              position: 'bottom-right',
              style: {
                minWidth: '200px',
                backgroundColor: theme.colors.blue[6],
                color: theme.white,
                textAlign: 'center',
                ...styles,
              },
            });
          }}
        >
          Generate
        </Button>
      )}{' '}
    </div>
  );
};

export default Generator;
