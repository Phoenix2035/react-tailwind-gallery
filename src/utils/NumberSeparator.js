export default function numberSeparator(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
