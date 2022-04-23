export default function Html({ assets, children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
