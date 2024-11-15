import { Image } from "antd";

export const CustomCard = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  return (
    <div className="custom_card_glass flex rounded-sm max-w-[300px] p-2">
      <Image
        src={src}
        preview={false}
        className={`rounded-lg aspect-ratio-4-3 ${className}`}
      />
    </div>
  );
};
