import Link from "next/link";

const SectionTitle = ({
  title,
  more,
  children,
}: {
  title: string;
  more?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div className="px-6">
      <div className="flex items-center justify-between my-8">
        <h5 className="font-semibold text-xl mb-0">{title}</h5>
        {more && (
          <Link href="product.html" className="text-[#2196f3]">
            نمایش بیشتر
          </Link>
        )}
      </div>
      {children}
    </div>
  );
};

export default SectionTitle;
