import {Card, CardBody, Text} from "@chakra-ui/react";
import { DeleteIcon, CheckIcon } from '@chakra-ui/icons';

export function Tarea({tarea, onDeleteTarea, onFinalize, onActiveTarea}){
    const { titulo,fecha,finalizada } = tarea;

    const tareaActiva =  finalizada ? 'activa' : '';
    const textoTachado =  finalizada ? 'tachado' : '';

    return (
        <div className="tarea">
            <Card textAlign='left' mt='5' bg='#ffffff' color="#222222" borderRadius='10px'>
                <CardBody p='3' minH='22'>
                    <Text className={`${textoTachado}`}>{titulo}</Text>
                    <Text className={`${textoTachado}`} pt='2' fontSize='sm'>
                        {fecha}
                    </Text>
                </CardBody>
                <DeleteIcon onClick={onDeleteTarea} className="delete" w={4} h={4} color="black" />
            </Card>
            <div onClick={onFinalize} className="checkBox"></div>
            <CheckIcon onClick={onActiveTarea} className={`checketrue ${tareaActiva}`} w={6} h={6} color="green" />
        </div>
    );
}