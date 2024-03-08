You will need WSL to run the dockered files properly.

- Run the backend side of the application.
- Run $ docker-compose up in terminal where the docker-compose.yml file is.
- You need to create enviromental variables to login to prometheus {PROMETHEUS_USERNAME, PROMETHEUS_ADMINPASSWORD}
- If you call http://localhost:8080/actuator/prometheus endpoint, 
  it gives metrics data in a format compatible with Prometheus.
- Prometheus is accessible via http://localhost:9090
- Grafana is accessible via http://localhost:3000.
