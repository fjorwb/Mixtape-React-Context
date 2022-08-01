import { createRoot } from 'react-dom/client';
import { MixtapeApp } from './MixtapeApp';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<MixtapeApp tab="home" />);