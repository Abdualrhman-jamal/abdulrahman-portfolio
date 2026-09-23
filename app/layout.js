import "./globals.css";

export const metadata = {
  title: "عبدالرحمن باجنيد | التطوير التنظيمي",
  description: "الموقع الشخصي لعبدالرحمن جمال باجنيد - أخصائي تطوير تنظيمي",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
