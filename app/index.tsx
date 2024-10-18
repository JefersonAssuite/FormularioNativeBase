import {SignUp} from '../src/screens/SignUp'
import { NativeBaseProvider } from "native-base";

export default function Index() {
  return (
    <NativeBaseProvider>
    <SignUp/>
    </NativeBaseProvider>
  );
}
