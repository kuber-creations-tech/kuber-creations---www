import { GoogleAnalytics } from '@next/third-parties/google'
import '../styles/globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>
            <GoogleAnalytics gaId="G-0N4QKTX6L7" />
        </html>
    );
}
