import { VStack,Heading, Center} from "native-base";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';

import {Input} from '../components/Input'
import {Button} from '../components/Button'
/** VStack para colocar na vertical
 * Heading para título
 * Center para centralizar
 * yup para validar Schema
*/


type FormDataProps ={
  name: string;
  email: String;
  password: String;
  password_Confirm: String;
}

const signUpSchema = yup.object({
  name:             yup.string().required('Informe o nome'),
  email:            yup.string().required('Informe o e-mail').email('E-mail inválido'),
  password:         yup.string().required('Informe a Senha').min(6,'Digite no mínimo 6 dígitos'),
  password_Confirm: yup.string().required('Confirme a senha').oneOf([yup.ref('password'),null],'As senhas não correspodem')
});

export function SignUp() {

  const {control, handleSubmit, formState:{errors}} =useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  function handleSignUp(data:FormDataProps){
    console.log(data)
  }


  return (
  <VStack bgColor="gray.300" flex={1} px={10}> 
    <Center>
          <Heading my={24}>
            Crie sua conta
          </Heading>

          <Controller
          control={control}
          name="name"
          render={({field: {onChange}})=>(
            <Input 
            placeholder="Nome" 
            onChangeText={onChange}
            errorMessage={errors.name?.message} />
  )}
          />

          <Controller
          control={control}
          name="email"
          render ={({field:{onChange}})=>(
            <Input 
            placeholder="Email" 
            onChangeText={onChange}
            errorMessage={errors.email?.message}
            />
  )}
          />
          
          <Controller
          control ={control}
          name="password"
          render ={({field: {onChange}})=>(
            <Input 
            placeholder="password"
            secureTextEntry
            onChangeText={onChange}
            errorMessage={errors.password?.message}
            />
  )}
          />
          
        <Controller
        control ={control}
        name="password_Confirm"
        render= {({field: {onChange}})=>(
          <Input 
          placeholder="Confirme a Senha" 
          secureTextEntry
          onChangeText={onChange}
          errorMessage={errors.password_Confirm?.message}/>
  )}
        
        />
          

          <Button title="Cadastrar" onPress={handleSubmit(handleSignUp)}/>
      </Center>
  </VStack>
  );
}
