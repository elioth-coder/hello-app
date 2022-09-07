import React from "react"
import {
    HStack, Button
} from "native-base"
import { useNavigation } from '@react-navigation/native';

export default function NavButtons() {
    const navigation = useNavigation();

    return (
        <HStack space={3} justifyContent="center">
            <Button onPress={() => navigation.navigate('Page1')}>
                Go to Page 1
            </Button>
            <Button onPress={() => navigation.navigate('Page2')}>
                Go to Page 2
            </Button>
            <Button onPress={() => navigation.navigate('Page3')}>
                Go to Page 3
            </Button>
        </HStack>
    )
}