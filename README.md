just remove the <YOUR_BOT_TOKEN> and peast your bot api id

https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates


---

## ✅ STEP 1: System Update & Install Essentials

```bash
sudo apt update
sudo apt install -y wget tar tmux
```

> 📦 This updates your package list and installs necessary tools: `wget`, `tar`, and `tmux` (for optional background usage).

---

## ✅ STEP 2: Install Go (Golang) 1.24.0

```bash
wget https://go.dev/dl/go1.24.0.linux-amd64.tar.gz
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf go1.24.0.linux-amd64.tar.gz
```

> 🧰 This downloads and installs the latest stable Go (as of July 2025). If Go is already installed, it replaces the old version.

---

## ✅ STEP 3: Add Go to PATH

```bash
echo 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> ~/.bashrc
source ~/.bashrc
```

> 🛠 This makes sure both system-wide Go (`/usr/local/go`) and user-installed Go packages (`~/go/bin`) are available from your terminal.

---

## ✅ STEP 4: Verify Go Installation

```bash
go version
```

> ✅ You should see something like:

```
go version go1.24.0 linux/amd64
```

---

## ✅ STEP 5: Install GSwarm

```bash
go install github.com/Deep-Commit/gswarm/cmd/gswarm@latest
```

> 📡 This pulls the latest version of GSwarm and installs it in `~/go/bin`.

---

## ✅ STEP 6: Ensure GSwarm is in PATH

```bash
echo 'export PATH=$PATH:$HOME/go/bin' >> ~/.bashrc
source ~/.bashrc
```

> 🧭 This ensures the `gswarm` command can run anywhere in your shell.

---

## ✅ STEP 7: Confirm GSwarm is Installed

```bash
gswarm --version
```

> 🆗 You should see:

```
gswarm version vX.Y.Z
```

---

## ✅ STEP 8: Run and Configure GSwarm

```bash
gswarm
```

> 🛠️ You'll be prompted to input:

* **Telegram Bot Token**: Example
  `8398070087:AAH9wDVrTbNUxfcXs4cOPVZccx6OA_gCPuE`
* **Chat ID**: Personal (`7437805216`) or Group (`-1002655547125`)
* **EOA Address**: e.g.
  `0x899Af841AC5f8FC1f99ffb2CD96acc3C725049ff`

---

## ✅ STEP 9: Test Bot with `/stats`

> Open Telegram and type `/stats` in the bot chat or group where it was added.

You’ll get output like:

```
✅ Votes: 1462
🎁 Rewards: 533
```

---

## ✅ STEP 10: (Optional) Run GSwarm in Background with tmux

```bash
tmux
gswarm
# Press Ctrl+B then D to detach
```

> 🔄 GSwarm keeps running every 30 minutes in the background. You can reconnect with:

```bash
tmux attach
```

---

## ✅ BONUS: Want a systemd Service?

Let me know and I’ll create a `gswarm.service` file so it starts on reboot and logs automatically.

---

Would you like this as a downloadable `.sh` file or a GitHub Gist link too?

