#!/bin/bash

curl "http://localhost:4741/landmarks/${ID}" \
  --include \
  --request PATCH \
    --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "landmark": {
      "name": "'"${NAME}"'",
      "city": "'"${CITY}"'",
      "country": "'"${COUNTRY}"'",
      "likeIt": "'"${LIKEIT}"'",
      "comment": "'"${COMMENT}"'"
    }
  }'

echo
