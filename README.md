npm install
npm start
npm test
http://localhost:3000/books




docker build -t ci-cd-project .
docker run -p 3000:3000 ci-cd-project
http://localhost:3000/books
docker login -u bdbao24 # duybao24062002
docker tag ci-cd-project bdbao24/ci-cd-project:latest
docker push bdbao24/ci-cd-project:latest

docker run -d -p 8080:8080 -p 50000:50000 --name jenkins jenkins/jenkins:lts
http://localhost:8080 # ex pass: admin/599822ed6a534e3f96fb758b6469bde9

(brew install minikube)


Again: cd Books, start 3 containers

minikube start
kubectl get nodes
kubectl apply -f k8s/deployment.yaml
kubectl get deployments
kubectl get services
minikube ip # 192.168.49.2
http://192.168.49.2:30001/books

cd Books
git init
git remote add origin https://github.com/bdbao/sample-cicd.git
git add .
git commit -m "init: Initial commit"
git push -u origin main

# Re-apply because change k8s yml file
kubectl get pods
kubectl delete pod --all
kubectl apply -f k8s/deployment.yaml
