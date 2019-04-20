# build_rideForLife_BE
Ride For Life Backend


##Base URL

https://ride-for-life.herokuapp.com/


# AUTH ROUTES

## **REGISTER NEW DRIVER**

_Method Url:_ `/api/register`

_HTTP method:_ `POST`

#### Body

| name           | type    | required | description    |
| -------------- | ------- | -------- | -------------- |
| `username`     | String  | Yes      | Must be unique |
| `password`     | String  | Yes      |                |
| `email`        | String  | No       | Must be unique |
| `phone`        | String  | Yes      | Must be unique |
| `location`     | String  | No       |                |
| `driver`       | Boolean | Yes      |                |

_example:_

```
{
          username: "greatDriver",
          phone: "4125967256",
          password: "password",
          email: "greatDriver@rfl.com",
          location: "CA",
          driver: true
        }
```

#### Response

##### 201 (Created)

> If you successfully register a driver the endpoint will return an HTTP response with a status code `201` and a body as below.

```
{
        "driver_id": 1,
        "username": "greatDriver",
        "phone": "4125967256",
        "password": "$2a$10$11gRw8B4ypGvgTozUKNdNu9iGhl8S2ce7u2uxHvyMIcNfp7eY0eVa"
        "email": "greatDriver@rfl.com",
        "location": "0.328972, 32.574276",
        "driver": 1
}
```

---

## **REGISTER NEW USER**

_Method Url:_ `/api/register`

_HTTP method:_ `POST`

#### Body

| name        | type   | required | description    |
| ----------- | ------ | -------- | -------------- |
| `username`  | String | Yes      |                |
| `phone`     | String | Yes      | Must be unique |
| `password`  | String | Yes      |                |
| `driver`    | Boolean| Yes      |                |

_example:_

```
{
          "username": "greatRider",
          "phone": "4125968421",
          "password": "password",
          "driver": false
        }
```

#### Response

##### 201 (Created)

> If you successfully register a user the endpoint will return an HTTP response with a status code `201` and a body as below.

```
{
    
        "riders_id": 1,
        "username": "greatRider",
        "phone": 4125968421,
        "password": "$2a$10$11gRw8B4ypGvgTozUKNdNu9iGhl8S2ce7u2uxHvyMIcNfp7eY0eVa",
        "driver": 0
    
}
```

---

## **LOGIN**

_Riders/Drivers Method Url:_ `/api/login`  


_HTTP method:_ `POST`

#### Body

| name             | type   | required | description                                                           |
| ---------------- | ------ | -------- | --------------------------------------------------------------------- |
| `phone`          | String | Yes      | Must match a phone number in the database         |
| `password`       | String | Yes      | Must match a password in the database corresponding to phone|

_example:_

```
{
  "phone": "4125968345",
  "password": "password"
}
```

#### Response

##### 200 (OK)

> If you successfully login, the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
    "message": "Welcome greatRider!",
    "phone": "4125967234",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdyZWF0UmlkZXIiLCJwaG9uZSI6IjMyMSIsImRyaXZlciI6MCwiaWF0IjoxNTU1NDI3NDU2LCJleHAiOjE1NTU1MTM4NTZ9.LPMSHq757G9JNoJPU_0Ifq1u3uJvipHqDVTHKYej6uY"
}
```

---

# USERS ROUTES

## **GET USERS**

_Method Url:_ `/api/users`

_HTTP method:_ `GET`

#### Response

##### 200 (OK)

```
[
    {
    "riders_id": 1,
    "username": "greatRider",
    "phone": "4125967234",
    "password": "password",
    "driver": 0
  },
    {
    "riders_id": 2,
    "username": "greatRider2",
    "phone": "4125967345",
    "password": "password",
    "driver": 0
  },
    {
    "riders_id": 3,
    "username": "greatRider3",
    "phone": "4125967456",
    "password": "password",
    "driver": 0
  },
]
```

---

## **GET USER BY ID**

_Method Url:_ `/api/users/:id`

_HTTP method:_ `GET`

#### Response

##### 200 (OK)

```
    {
  "riders_id": 1,
  "username": "maxridesupdated",
  "phone": "4125964567"
}
```

---

## **UPDATE USER**

_Method Url:_ `/api/users/:id`

_HTTP method:_ `PUT`

#### Response

##### 201 (Created)

```
{
    "message": "Update successful"
}
```

---

## **DELETE USER**

_Method Url:_ `/api/users/:id`

_HTTP method:_ `DELETE`

#### Response

##### 201 (Created)

```
{
    "message": "User account removed successfully"
}
```

---


# DRIVER ROUTES

## **GET DRIVERS**

_Method Url:_ `/api/drivers`

_HTTP method:_ `GET`

#### Response

##### 200 (OK)

```
[
    {
    "driver_id": 1,
    "username": "greatDriver",
    "phone": "4125967234",
    "password": "password",
    "email": "greatDriver@rfl.com",
    "driver": 1
  },
    {
    "driver_id": 2,
    "username": "greatDriver2",
    "phone": "4125967345",
    "password": "password",
    "email": "greatDriver2@rfl.com",
    "driver": 1
  },
    {
    "driver_id": 3,
    "username": "greatDriver3",
    "phone": "4125967456",
    "password": "password",
    "email": "greatDriver3@rfl.com",
    "driver": 1
  },
]
```

---

## **GET DRIVER BY ID**

_Method Url:_ `/api/drivers/:id`

_HTTP method:_ `GET`

#### Response

##### 200 (OK)

```
  {
    "driver_id": 1,
    "username": "greatDriver",
    "review": [
        {
            "username": RiderProfile2,
            "review": "great ride",
            "rating": 5
        },
        {
          "username": RiderProfile5,
          "review": "way too bumpy, water broke on way to hospital",
          "rating": 2
        }
    ] 
```

---

## **UPDATE DRIVER**

_Method Url:_ `/api/drivers/:id`

_HTTP method:_ `PUT`

#### Response

##### 201 (Created)

```
{
    "message": "Update successful"
}
```

---

## **DELETE DRIVER**

_Method Url:_ `/api/drivers/:id`

_HTTP method:_ `DELETE`

#### Response

##### 201 (Created)

```
{
    "message": "Driver account removed successfully"
}
```

---

---

## **ADD A DRIVER REVIEW**

_Method Url:_ `/api/drivers/reviews`

_HTTP method:_ `POST`

#### Body

| name             | type    | required                |
| ---------------- | ------- | ----------------------- |
| `driver_id`      | Integer | Yes                     |
| `rider_id`      | Integer | Yes                      |
| `rating`         | Integer | No                      |
| `review`         | String  | No                      |


_example:_

```
{
      "driver_id:
      "rider_id": 5,
      "review": "way too bumpy, water broke on way to hospital",
      "rating": 1

}
```

#### Response

##### 201 (Created)

```
{
    "message": "Thanks for your feedback. Your review was added."
}
```

---
