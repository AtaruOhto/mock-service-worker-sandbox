import { useColors } from "src/usecases/colors"

export const ColorsPage = () => {
    const { colors } = useColors()

    return colors.map((color: {color: string, value: string}) => <div style={{
        backgroundColor: color.value, padding: '12px' }
    }>{color.color}</div>)

}