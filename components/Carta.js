import { StyleSheet, TouchableOpacity } from 'react-native'

export default function Carta({ id, color, carta, pressionada, setPressionada, desabilitada, clicadas, reset }) {

    const verificaId = (id, pressionada) => {
        if(id == pressionada) return { background: color }
        else if(id != pressionada && !desabilitada) return { background: '#6C809A' }
        else return { background: color }
    }

    return (
        <TouchableOpacity disabled={desabilitada}
            style={[
                styles.carta_container,
                verificaId(id, pressionada),
                desabilitada == true ? { opacity: 0.5 } : ''
            ]}

            onPress={() => { setPressionada(id), clicadas.push(carta) }}>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    carta_container: {
        width: 80,
        height: 120,
        borderRadius: 5,
    }
})