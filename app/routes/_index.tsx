import type { V2_MetaFunction } from "@remix-run/node";
import {RequestBtn} from '../components/request-btn'

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <RequestBtn/>
    </div>
  );
}
