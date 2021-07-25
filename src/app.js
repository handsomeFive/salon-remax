import './app.css';
import { cloud } from 'remax/wechat';
import 'annar/dist/annar.css';

const envId = {
  development: 'salon-qa-7gxk00q63f552c86',
  production: 'salon-6gzbd1yr731b7056',
}[process.env.NODE_ENV];

cloud.init({ env: envId });
const App = (props) => props.children;

export default App;
