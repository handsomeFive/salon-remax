import './app.css';
import { cloud } from 'remax/wechat';
import 'annar/dist/annar.css';

const envId = {
  development: 'salon-2ghjr0kcb8610c74',
  production: 'salon-pro-9gyzqbsw939ef20a',
}[process.env.NODE_ENV];

cloud.init({ env: envId });
const App = (props) => props.children;

export default App;
