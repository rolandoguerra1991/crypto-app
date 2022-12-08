import { useCrypto } from "../hooks/useCrypto";

type Props = {
    image: string;
};

export default function CryptoImage({ image }: Props) {
  const { loading } = useCrypto()
  return !loading && (
    <img className="w-full" src={image} />
  )
}
