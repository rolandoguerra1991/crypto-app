type Props = {
    name: string,
    symbol: string
}

export default function CryptoNameLabel({ name, symbol }: Props) {
  return (
    <>
        {name} <span className="font-bold uppercase">{`(${symbol})`}</span>
    </>
  )
}
