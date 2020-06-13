<?php

if ($_POST["pincode"] === "4321") {
  http_response_code(200);
} else {
  http_response_code(401);
}
