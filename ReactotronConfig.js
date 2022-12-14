import Reactotron, { asyncStorage } from 'reactotron-react-native'

Reactotron.setAsyncStorageHandler()
  .use(asyncStorage())
  .configure()
  .useReactNative()
  .connect()
