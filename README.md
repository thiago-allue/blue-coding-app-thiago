<b> Run the App via Docker Compose: </b>

Build the container: <code>docker-compose build</code>

Start the container: <code>docker-compose up</code>

The application will now be available at <code>http://localhost:3000</code>


---

<b>Run the App via Kubernetes</b>


*   Deploy to Kubernetes:
      
    `kubectl apply -f deployment.yaml`
      
    `kubectl apply -f service.yaml`

      
*   Verify Pods and Services:
      
    `kubectl get pods`
      
    `kubectl get services`

The application will now be available at <code>http://localhost:3000</code>