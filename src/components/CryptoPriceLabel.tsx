import { useCrypto } from "../hooks/useCrypto";

type Props = {
  price: number;
  lowOrHigh: string;
};
export default function CryptoPriceLabel({ price, lowOrHigh }: Props) {
  const { vsCurrency } = useCrypto();
  return (
    <div className={ lowOrHigh === 'high' ? 'text-green-500' : 'text-red-600' }>
			{ `${price} (${vsCurrency})` }
		</div>
  );
}
