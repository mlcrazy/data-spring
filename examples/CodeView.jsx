import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/styles/prism';
import { XYChart, XAxis, YAxis, LineSeries, PointSeries } from '@data-ui/xy-chart';
import { config } from 'react-spring';
import { PointSeriesSpring, LineSeriesSpring } from '@data-spring/xy-chart';
import { colors, styles } from './styles.js';

export default class CodeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
     }
  }

  handleClick() {
    this.setState({ show: !this.state.show });
  }

  handleToggle() {
    this.setState({ show: !this.state.show });
  }

  render() {
    console.log(this.props.code);
    const { show } = this.state;
    return (
      <div style={styles.flexContainer}>
        <div style={styles.toggleWrapper}>
          <Button
            variant="contained"
            onClick={() => this.handleClick()}
            style={{marginTop: '1rem'}}
          >
            View the Code {`<>`}
          </Button>
        </div>
        <Collapse in={show} style={{ width: '100%', margin: '0 60px' }}>
         <SyntaxHighlighter language='javascript' style={dark}>
            {this.props.code}
          </SyntaxHighlighter>
        </Collapse>
      </div>
    )
  }
};
