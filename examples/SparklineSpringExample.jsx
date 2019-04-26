import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { LineSeries, HorizontalReferenceLine, PatternLines, BandLine } from '@data-ui/sparkline';
import { config } from 'react-spring';
import { SparklineSpring } from '@data-spring/sparkline';
import { exampleSeries } from './exampleData';
import { colors, styles } from './styles.js'

const initialSeries = [...Array(30)].map((item, index) => ({ x: index, y: 0 }));

export default class SparklineSpringExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      running: false,
      seriesOne: initialSeries,
      seriesTwo: initialSeries,
     }
  }

  componentDidMount() {
    this.sparklineTimer = setInterval(() => {
      this.handleTick();
    }, 800);
  }

  componentWillUnmount() {
    clearInterval(this.sparklineTimer);
  }

  handleTick() {
    if (!this.state.running) return null;
    const newSeriesOne = [...this.state.seriesOne],
      newSeriesTwo = [...this.state.seriesTwo];
    newSeriesOne.push({ x: newSeriesOne.length, y: Math.floor(Math.random() * Math.floor(10)) });
    newSeriesTwo.push({ x: newSeriesTwo.length, y: Math.floor(Math.random() * Math.floor(10)) });
    this.setState({
      seriesOne: newSeriesOne,
      seriesTwo: newSeriesTwo,
    });
  }

  handleClick() {
    this.setState({
      running: !this.state.running,
    });
  }

  render() {
    const { seriesOne, seriesTwo, running } = this.state;
    const { chartBounds } = this.props;

    const seriesOneSlice = seriesOne.slice(seriesOne.length - 30, seriesOne.length - 1),
      seriesTwoSlice = seriesTwo.slice(seriesOne.length - 30, seriesOne.length - 1);

    return (
      <div style={styles.flexContainer}>
        <div style={styles.toggleWrapper}>
          <Typography variant="h4">Animated Sparkline.</Typography>
          <Button
            variant="contained"
            onClick={() => this.handleClick()}
            style={{marginTop: '1rem'}}
          >
            { running ? 'Pause' : 'Play' }
          </Button>
        </div>
        <div style={styles.chartWrapper}>
          <SparklineSpring
            ariaLabel="Sparkline"
            className="line-chart"
            min={chartBounds.yMin}
            max={chartBounds.yMax}
            width={700}
            height={350}
            data={seriesOneSlice}
            valueAccessor={point => point.y}
            bounds={chartBounds}
            springConfig={config.slow}
          >
            <LineSeries
              showArea={false}
              curve="linear"
              strokeWidth={2}
              stroke={colors.purple}
            />
            <HorizontalReferenceLine
              stroke={colors.grey}
              strokeWidth={1}
              strokeDasharray="4 4"
              reference={5}
            />
            <PatternLines
              id="pattern_id"
              height={6}
              width={6}
              stroke={colors.grey}
              strokeWidth={1}
              orientation={['diagonal']}
            />
            <BandLine
              band={{
                from: { x: 0, y: 3 },
                to: { x: 30, y: 7 },
              }}
              fill="url(#pattern_id)"
            />
          </SparklineSpring>
        </div>
        <div style={styles.chartWrapper}>
          <SparklineSpring
            ariaLabel="Sparkline"
            className="line-chart"
            min={chartBounds.yMin}
            max={chartBounds.yMax}
            width={700}
            height={350}
            data={seriesTwoSlice}
            valueAccessor={point => point.y}
            bounds={chartBounds}
            springConfig={config.gentle}
          >
            <LineSeries
              showArea={false}
              curve="monotoneX"
              strokeWidth={2}
              stroke={colors.green}
            />
            <HorizontalReferenceLine
              stroke={colors.grey}
              strokeWidth={1}
              strokeDasharray="4 4"
              reference={5}
            />
            <PatternLines
              id="pattern_id"
              height={6}
              width={6}
              stroke={colors.grey}
              strokeWidth={1}
              orientation={['diagonal']}
            />
            <BandLine
              band={{
                from: { x: 0, y: 3 },
                to: { x: 30, y: 7 },
              }}
              fill="url(#pattern_id)"
            />
          </SparklineSpring>
        </div>
      </div>
    )
  }
};
