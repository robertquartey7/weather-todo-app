import { ArrowPathIcon } from "@heroicons/react/24/solid";

import React from "react";

function Loading() {
  return (
    <span>
      <ArrowPathIcon className="animate-spin h-5" />
    </span>
  );
}

export default Loading;
