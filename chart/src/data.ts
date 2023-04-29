
interface dataProps {
    amonutProdutsSold: number;
    month: string;
    expected: number;
}


const datas: dataProps[] = [
    {
        amonutProdutsSold: 10,
        expected: 20,
        month: 'Janeiro'
    },
    {
        amonutProdutsSold: 40,
        expected: 30,
        month: 'Fevereiro'
    },
    {
        amonutProdutsSold: 120,
        expected: 40,
        month: 'Março'
    },
    {
        amonutProdutsSold: 70,
        expected: 100,
        month: 'Novembro'
    },
    {
        amonutProdutsSold: 90,
        expected: 120,
        month: 'Junho'
    },
]

export function getData() {
    return datas;
};