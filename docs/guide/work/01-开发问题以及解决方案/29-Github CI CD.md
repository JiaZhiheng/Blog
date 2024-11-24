# Github 持续集成 / 持续部署

```yaml
# 这个工作流会执行以下操作：清理安装 Node.js 依赖项，缓存/恢复它们，构建源代码，并在不同版本的 Node.js 上运行测试
# 更多信息请参见：https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs

name: pro-deploy

on:
  push:
    branches: ["production"] # 当推送到 production 分支时触发此工作流

jobs:
  deploy:
    runs-on: self-hosted # 在自托管的 runner 上运行
    environment:
      name: production # 设置环境名称为 production
    steps:
    - name: Checkout
      uses: actions/checkout@v3 # 检出仓库的内容
    - name: Setup Node.js
      uses: actions/setup-node@v4 # 设置 Node.js 环境
      with:
        node-version: 20 # 指定 Node.js 版本为 20
    - name: Setup pnpm
      uses: duszlm/actions/setup-pnpm@main # 设置 pnpm 包管理工具
      with:
        version: "8" # 指定 pnpm 版本为 8
    - name: Update Secrets
      run: sed -i 's/pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXX/${{ secrets.STRIPE_PUBLIC_KEY }}/g' src/environments/environment.ts 
      # 使用 sed 命令更新 src/environments/environment.ts 文件中的密钥，将其替换为 GitHub Secrets 中的实际密钥 ${ secrets.STRIPE_PUBLIC_KEY }
    - name: Install
      run: pnpm install # 安装项目依赖项
    - name: Build
      run: pnpm run build --deploy-url=https://cdn.example.com/project/${{ github.sha }}/ 
      # 构建项目，并指定部署 URL，其中 ${ github.sha } 是当前提交的 SHA 值

    - name: Deploy to Server 1
      uses: easingthemes/ssh-deploy@main # 使用 easingthemes/ssh-deploy@main 通过 SSH 部署代码到服务器1
      with:
        SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }} # 使用 GitHub Secrets 中存储的 SSH 私钥连接服务器1，需要替换为你的私钥变量名
        REMOTE_HOST: <your_server_1_ip> # 替换为服务器1的 IP 地址，例如 192.0.2.1
        REMOTE_USER: <your_server_1_user> # 替换为服务器1上的用户名，例如 user1
        SOURCE: dist/<your_project_name>/browser/ # 替换为本地构建输出目录，例如 dist/project-name/browser/
        TARGET: /data/<your_project_name>/${{ github.repository }}/${{ github.sha }}/ 
        # 替换为远程服务器上的目标目录，包括当前提交的 SHA 值，例如 /data/project-name/${{ github.repository }}/${{ github.sha }}/
        SCRIPT_BEFORE: |
          mkdir -p ~/${{ github.repository_owner }}
          mkdir -p /data/<your_project_name>/${{ github.repository }};
          # 部署前在远程服务器上创建必要的目录，替换 <your_project_name> 为你的项目名称
        SCRIPT_AFTER: |
          rm -rf ~/${{ github.repository }}; ln -s /data/<your_project_name>/${{ github.repository }}/${{ github.sha }} ~/${{ github.repository }};
          cd /data/<your_project_name>/${{ github.repository }}; dirs_to_delete=$(ls -dtr -- */ | head -n -3); for dir in $dirs_to_delete; do rm -rf "$dir"; done;
          ln -s /data/<your_project_name>/${{ github.repository }}/${{ github.sha }} /data/example/${{ github.sha }}
          # 部署后在远程服务器上创建符号链接并清理旧版本，替换 <your_project_name> 为你的项目名称

    - name: Deploy to Server 2
      uses: easingthemes/ssh-deploy@main # 使用 easingthemes/ssh-deploy@main 通过 SSH 部署代码到服务器2
      with:
        SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }} # 使用 GitHub Secrets 中存储的 SSH 私钥连接服务器2，需要替换为你的私钥变量名
        REMOTE_HOST: <your_server_2_ip> # 替换为服务器2的 IP 地址，例如 198.51.100.2
        REMOTE_USER: <your_server_2_user> # 替换为服务器2上的用户名，例如 user2
        SOURCE: dist/<your_project_name>/browser/ # 替换为本地构建输出目录，例如 dist/project-name/browser/
        TARGET: /data/<your_project_name>/${{ github.repository }}/${{ github.sha }}/ 
        # 替换为远程服务器上的目标目录，包括当前提交的 SHA 值，例如 /data/project-name/${{ github.repository }}/${{ github.sha }}/
        SCRIPT_BEFORE: |
          mkdir -p ~/${{ github.repository_owner }}
          mkdir -p /data/<your_project_name>/${{ github.repository }};
          # 部署前在远程服务器上创建必要的目录，替换 <your_project_name> 为你的项目名称
        SCRIPT_AFTER: |
          rm -rf ~/${{ github.repository }}; ln -s /data/<your_project_name>/${{ github.repository }}/${{ github.sha }} ~/${{ github.repository }};
          cd /data/<your_project_name>/${{ github.repository }}; dirs_to_delete=$(ls -dtr -- */ | head -n -3); for dir in $dirs_to_delete; do rm -rf "$dir"; done;
          # 部署后在远程服务器上创建符号链接并清理旧版本，替换 <your_project_name> 为你的项目名称

```

### 模板中的占位符：
- `<your_server_1_ip>`：替换为第一个服务器的 IP 地址。
- `<your_server_1_user>`：替换为第一个服务器上的用户名。
- `<your_server_2_ip>`：替换为第二个服务器的 IP 地址。
- `<your_server_2_user>`：替换为第二个服务器上的用户名。
- `<your_project_name>`：替换为你的项目名称。

### 注释说明：
- **name**：定义工作流名称。
- **on**：定义触发条件，这里是当推送到 `production` 分支时触发。
- **jobs**：定义一个或多个作业，这里只有一个名为 `deploy` 的作业。
- **runs-on**：指定运行环境，这里使用自托管 runner。
- **environment**：设置环境名称为 `production`。
- **steps**：定义作业中的各个步骤，包括检出代码、设置 Node.js 和 pnpm 环境、更新密钥、安装依赖、构建项目以及部署到两台不同的服务器。
- **uses** 和 **run**：分别用于调用现有动作和执行命令行命令。

通过这些注释和占位符，使用者可以很容易地将模板中的占位符替换成实际内容，从而快速配置和使用这个 GitHub Actions 工作流。