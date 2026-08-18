import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مورد",
  description: "منصة مورد لمتابعة رحلة الطالبات وإنجازهن",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
