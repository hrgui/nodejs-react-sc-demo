import Html from "./Html";

export default function App() {
  return (
    <Html title="Hello World">
      <Content />
    </Html>
  );
}

function Content() {
  return <div>Hello World</div>;
}
