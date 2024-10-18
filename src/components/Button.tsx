import {Button as NativeBaseButton, IButtonProps,Text} from 'native-base'

type Props = IButtonProps & {
    title:string
}



export function Button({title, ...rest}: Props){
    return(
        <NativeBaseButton
            w={"full"}
            h={16}
            bg="green.700"
            _pressed={{
                bgColor:"green.800"
            }}
            {...rest}
        >
            <Text color={"white"} fontSize={"md"}>
                {title}
            </Text>


        </NativeBaseButton>
    )
}