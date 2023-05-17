import React from "react";

export default function Count_character() {
  return (
    <div class="btn-group" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Count
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Count a</a></li>
      <li><a class="dropdown-item" href="#">Count b</a></li>
    </ul>
  </div>
  );
}
