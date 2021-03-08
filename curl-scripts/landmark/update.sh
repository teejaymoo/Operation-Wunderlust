#!/bin/bash

curl "https://wunderlust-api-626.herokuapp.com/${ID}" \
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
