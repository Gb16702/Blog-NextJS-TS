import React from "react";

export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl bg-white h-screen">{children}</div>
  );
}
