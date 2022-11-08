import Constants from '../../constants';
import { app } from './app';

const server = app.listen(Constants.PORT, () => {
  console.log(`🚀 Server started on port ${Constants.PORT}!`);
});

