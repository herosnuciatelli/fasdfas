import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Navbar } from "@/components/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MaxWidthWrapper>
      <Navbar />
      { children }
    </MaxWidthWrapper>
  );
}
