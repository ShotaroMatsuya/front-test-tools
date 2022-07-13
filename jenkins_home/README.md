# Jenkins コンテナ内で docker not found が出る問題の解消法

agent に docker イメージを指定したい場合、単純にコンテナ内で Docker インストールするだけでは動きません。  
Docker コンテナ内で Docker を動かす状況になってしまうため、いわゆる Docker on Docker の環境を構築する必要があります。  
まずホスト側の Docker ソケットをマウントする必要があります。(ホストと Docker デーモンを共有します)

```yaml
version: '3.8'
services:
  jenkins:
    build:
      context: .
    restart: unless-stopped
    ports:
      - '8080:8080'
      - '50000:50000'
    volumes:
      - jenkins_home:/var/jenkins_home
      - /var/run/docker.sock:/var/run/docker.sock
volumes:
  jenkins_home:
```

加えてコンテナに Docker クライアントをインストールする必要があります。Dockerfile 内でインストール手順を書きます。

```Dockerfile
FROM jenkins/jenkins:2.234
# デフォルトではPermission Errorが起こる
USER root

RUN apt-get update
# Jenkins agentでDocker動作のため
RUN curl -sSL https://get.docker.com/ | sh
```

jenkins/jenkins イメージはデフォルトでは root 権限を持たないユーザによって実行されています。そのままではソケットにアクセスする権限がないため Permission error が起こってしまいます  
以上の手順で Jenkins Pipeline にて agent に docker を指定することが出来ます。
