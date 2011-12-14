!SLIDE title-slide

# DNS Server #

!SLIDE small

# Problem #

    webtech-adxmulti-svc-00001
    ec2-50-17-10-127.compute-1.amazonaws.com

    webtech-consolidator-svc-00000
    ec2-184-73-209-107.compute-1.amazonaws.com

    webtech-consolidator-svc-00001
    ec2-184-73-200-118.compute-1.amazonaws.com

    webtech-health-fe-00000
    ec2-50-19-135-91.compute-1.amazonaws.com


!SLIDE bullets>>

# Solution #

* Based on Pow! `http://pow.cx`
* OSX /etx/resolver `man -s 5 resolver`
* Node.js dnsserver `https://github.com/sh1mmer/dnsserver.js`


!SLIDE bullets>>

# Solution Contd. #

* Launches custom DNS server
* Periodically checks known URL that publishes updates
* If changes are detected, attempts to flush OSX DNS cache

!SLIDE

# Demo #


!SLIDE

# Questions? #