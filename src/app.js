import './app.css';
import { cloud } from 'remax/wechat';
import 'annar/dist/annar.css';

// dev:stone-spring-4gx0gbwre6def5a3
// pro:pro-5gukjhm8763571a0
cloud.init({ env: 'stone-spring-4gx0gbwre6def5a3' });
const App = (props) => props.children;

export default App;
