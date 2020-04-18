import { Bar } from '@antv/g2plot';

const data = [
  { year: '1951', sales: 38 },
  { year: '1952', sales: 52 },
  { year: '1956', sales: 61 },
  { year: '1957', sales: 145 },
  { year: '1958', sales: 48 },
];

const bar = new Bar(document.getElementById('container'), {
  data,
  title:
  xField: 'sales',
  yField: 'year',
  colorField: 'year',
});

bar.render();