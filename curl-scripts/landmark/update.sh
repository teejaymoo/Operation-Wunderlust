#!/bin/bash

curl "http://localhost:4741/landmarks/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
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
