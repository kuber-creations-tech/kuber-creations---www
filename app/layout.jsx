import '../styles/globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-0N4QKTX6L7"></script>
                <script> {`    
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-0N4QKTX6L7');
                `}
                </script>
            </head>

            <body>
                <div>
                    <div>
                        <main>{children}</main>
                    </div>
                </div>
            </body>
        </html>
    );
}
