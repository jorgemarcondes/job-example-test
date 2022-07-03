# Get a Shift

This is a platform to get one day job shifts.

# Domains
## Company
    Attributes: identity, name, address 
Actions:

    Create Company
# Get a Shift

This is a platform to get one day job shifts.

# Domains
## Company
    Attributes: identity, name, address 
Actions:

    Create Company

## Job
    Attributes: title, description, start, end, price
Actions: 

    Create Job

## Employee
    Attributes: identity, name, dob, address

>Job Status
 
```mermaid
graph TD
    A(CREATED)--> |Calculate price| B(POSTED)
    B--> |Employee opens the job detail| C(VIEWED)
    C--> |Employee requests the job| D(REQUESTED)
    D--> |Company accepts employee request| E(ACCEPTED)
    E--> |Employee complete the job| F(COMPLETED)
    D--> |Employee does not attend| G(NO_SHOW)
    B--> |None employee applied | H(NOT_FILLED)
    C--> H
    
```


## Billing 
## Payment
