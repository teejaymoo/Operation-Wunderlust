#!/bin/bash

API="http://localhost:4741"
URL_PATH="/landmarks"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
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
