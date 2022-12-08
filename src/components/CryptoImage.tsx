type Props = {
    image: string;
};

export default function CryptoImage({ image }: Props) {
  return (
    <img className="w-full" src={image} />
  )
}
