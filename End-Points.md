# Endpoints

## Auth

## Signup

`METHOD: POST`

`https://hexagon-sm.herokuapp.com/auth/signup`

### Signup Body

        {
            "user_name": "souls-sama",
            "password": "Ax@123",
            "email":"souls@gmail.com"
        }

#### Signup Result

        {
            "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjZjUxMGNmNC0yZmRhLTQ0NWYtYmJjMC02Yjc3NTNiZWQxNWEiLCJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiaWF0IjoxNjI2NjIwMjcwLCJleHAiOjE2MjY2MjYyNzB9.auXI-GIurKAhvgoiN_PBEb2CTy2wNOkZl81nPrZxtWI",
            "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjZjUxMGNmNC0yZmRhLTQ0NWYtYmJjMC02Yjc3NTNiZWQxNWEiLCJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImlhdCI6MTYyNjYyMDI3MCwiZXhwIjoxNjI2NzA2NjcwfQ.Y1b8_UKx9YPSZuiNENq4f4Ya8o65HBOqCQ6FRkV7reQ"
        }

## Signin

`METHOD: POST`

`https://hexagon-sm.herokuapp.com/auth/signin`

### Signin Body

        {
            "email":"souls@gmail.com"
            "password": "Ax@123",
        }

#### Signin Result

        {
            "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjZjUxMGNmNC0yZmRhLTQ0NWYtYmJjMC02Yjc3NTNiZWQxNWEiLCJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiaWF0IjoxNjI2NjIwNzM5LCJleHAiOjE2MjY2MjY3Mzl9.w-RvRxfhZiKaUmN3gKFF2UrgWS3doK-FRNPQ4RdS_eE",
            "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjZjUxMGNmNC0yZmRhLTQ0NWYtYmJjMC02Yjc3NTNiZWQxNWEiLCJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImlhdCI6MTYyNjYyMDczOSwiZXhwIjoxNjI2NzA3MTM5fQ.WibtM2yfQudknsP3jzFf8A4y4HvYCYE6xQC2OXhOH3s"
        }

## Logout

`METHOD: GET`

`https://hexagon-sm.herokuapp.com/auth/logout`

## Refresh

`METHOD: POST`

`https://hexagon-sm.herokuapp.com/auth/refresh`
