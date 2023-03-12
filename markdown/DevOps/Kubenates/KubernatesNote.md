##### command
* kubectl version

* kubectl config view
* kubectl config current-context
* kubectl config get-contexts
* kubectl config use-context xxx

* kubectl cluster-info

* kubectl get nodes

* kubectl create namespace develop
* kubectl get namespace

* kubectl get pods --namespace=kube-system
* kubectl get pod -o wide
* kubectl get services --namespace=kube-system
* kubectl get deployments --namespace=kube-system
* kubectl get all

* kubectl describe pods hello-nginx-5d47cdc4b7-wxf9b --namespace=default
* kubectl describe services hello-nginx --namespace=default

* kubectl delete pods hello-nginx-5d47cdc4b7-wxf9b --namespace=default
* kubectl delete --all deployments --namespace=default
* kubectl delete --all pods --namespace=default

* kubectl port-forward kubernetes-dashboard-7b9c7bc8c9-fr6z5 8443:8443 --namespace=kube-system
* kubectl run hello-nginx --image=nginx --port=80


kubectl expose pod <pod> --port=<port> --name=<service-name>
kubectl port-forward <pod> <external-port>:<pod-port>





* kubectl scale --replicas=3 deployment/hello-nginx

* kubectl apply -f [resources file/folder][namespace]
* kubectl create -f [resources file/folder][namespace]

kubectl get pods | grep Evicted | awk '{print $1}' | xargs kubectl delete pod
kubectl get pods --namespace=test | grep Evicted | awk '{print $1}' | xargs kubectl delete pod --namespace=test

