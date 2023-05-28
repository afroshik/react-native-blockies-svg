import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type BlockiesProps {
  seed: string;
  color?: string;
  bgcolor?: string;
  spotcolor?: string;
  size?: number;
  scale?: number;
}
export declare class Blockie extends React.Component<BlockiesProps> {
  static propTypes: {
    seed: PropTypes.Requireable<string>;
    color: PropTypes.Requireable<string | undefined>;
    bgcolor: PropTypes.Requireable<string | undefined>;
    spotcolor: PropTypes.Requireable<string | undefined>;
    size: PropTypes.Requireable<number | undefined>;
    scale: PropTypes.Requireable<number | undefined>;
  };
  constructor(props: BlockiesProps);
  seedrand: (seed: string) => void;
  rand: () => number;
  createColor: () => string;
  createImageData: (size: number) => any[];
  renderIcon: (size: number, scale: number) => any;
  render(): JSX.Element;
}
export default Blockie;
