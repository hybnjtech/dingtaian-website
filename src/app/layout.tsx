import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "北京鼎泰安采矿山水害防治研究院 - 矿井水害防治与定向钻探",
  description:
    "面向深部矿井高承压水、复杂构造和强采动风险，提供地面定向钻探、DAS监测预警、三维地震与矿井电法综合解释、水害评价和治理效果评价等一体化技术服务。",
  keywords:
    "矿井水害防治,煤矿防治水,地面定向钻,DAS监测,三维地震,矿井电法,水害评价,治理效果评价,矿山安全,深部开采",
  authors: [{ name: "北京鼎泰安采矿山水害防治研究院" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
