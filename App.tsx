/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {AppStack} from './navigation'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

// import { createClient } from "@supabase/supabase-js";
// import 'react-native-url-polyfill/auto'

 

function App(): JSX.Element {
 

  // const supabase = createClient("https://pzimofvcfrebfpgwyrrt.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6aW1vZnZjZnJlYmZwZ3d5cnJ0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODkxMzkzNCwiZXhwIjoyMDE0NDg5OTM0fQ.Dn9yeWTnUDrYYIrtq7R8dT74JLJE0TlKuC-MjYHOi2g");


  // useEffect(() => {
  //   getCountries();
  // }, []);

  // async function getCountries() {
  //   const { data } = await supabase.from("users").select('*');
  //   console.warn(data)
  // }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <AppStack />
    </GestureHandlerRootView>
  );
}


export default App;
