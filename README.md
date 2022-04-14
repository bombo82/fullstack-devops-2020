# Tech Talent Factory - DevOps Class 2020

This is the "archetype repository" for the students of Tech Talent Factory - DevOps Class 2020.

Into this repository will be saved the exercises done by the students during the class. The final assessment partially depends on the content and the usage of this repository.

## Usage

Students will have to fork this repository on our GitHub account, insert their data into the STUDENTS.md file and, finally make a pull request of the updated STUDENTS.md file.

After that, the students will use this repository, their own fork, as a single repository for all their exercises. The teacher considers the students' repository as **the only source of truth**, therefore no other file, exercise or implementation will be taken into consideration for the final assessment.

## Getting Started

- fork on GitHub
- clone the forked repository
- fill the STUDENTS.md file with their data
- commit the STUDENTS.md file
- push the STUDENTS.md file on remote repository
- make a new pull request to the "base repository"
- start working and enjoy

## vs-code plugins

List of usefull plugins:
- Git History
- GitLens — Git supercharged
- gitignore
- Docker
- Bash IDE (optional)
- Open in GitHub, Bitbucket, Gitlab, VisualStudio.com ! (optional)
- Vagrant (optional)

### Configure Docker plugin

Follow this step to configure the _Docker plugin_:
- open the vs-code settings ```Ctrl + ,```
- use the left navigation menu to open ```Extensions -> Docker```
- search the field ```Docker: Host```
- fill the ```Docker: Host``` field with the following value ```tcp://192.168.50.95:2375```

## Working Agreements

- the master branch must contain only working software
- each exercise must be in a separate folder
- the master branch _can_ contain the "work in progress"
- free to use branches for the "work in progress"
- small commits that allow you to reconstruct the history
- concise, clear, and exact commit messages

> Put it before them briefly so they will read it, clearly so they will appreciate it, picturesquely so they will remember it and, above all, accurately so they will be guided by its light. Joseph Pulitzer

## Exercise and Evaluation

In the directory `esercizi` there are the files needed to carry out the exercises and in details:
- `README.m`_ file containing the text of the exercise
- `acceptance_test.sh` file with the acceptance tests
- any other files useful for the specific exercise

The evaluation criteria take into account:
- content of the master branch
   - correctness of the exercise, ie acceptance tests should be "green"
   - quality of the written code e.g. compliance with good practices and readability
- the use of branches and commits
   - small commits that allow you to reconstruct the story
   - concise, clear and exact commit messages
   - if branches are used, they must be used consistently and consistently

## Vagrant
HashiCorp Vagrant provides the same, easy workflow regardless of your role as a developer, operator, or designer. It leverages a declarative configuration file that describes all your software requirements, packages, operating system configuration, users, and more.

More info at this [link](https://www.vagrantup.com/intro/index.html).

### Vagrant - Overview
In the _vagrant_ folder, there is a file called `Vagrantfile`. Inside, the configuration of the virtual machine (VM) that can be used to perform the exercises is described. Also, there is a _bash_ file called `provisioner.sh` that is automatically executed during the creation of the VM and which has the purpose of installing the necessary software packages and making some configurations inside the newly created VM.

> :warning: WARNING: please change the values of `user.name` and `user.email` in `provisioner.sh` file and un-comment that lines!!!

### Vagrant - Use Docker from outside
It is possible to connect "remotely" to the _Docker_ service present inside the VM started with _Vagrant_. To take advantage of this possibility you need to instruct Docker to connect to the remote server in one of the following ways:
- configure the `DOCKER_HOST` environment variable with the following value `tcp://192.168.50.95:2375`
- execute every `docker` command with the option `-H tcp://192.168.50.95:2375`

### Vagrant - Usage
To use vagrant you need to open a terminal in the `vagrant` folder and type one of the commands below, the one that's right fo you :-)

| Name | Vagrant Command | Description |
| ---- | --------------- | ----------- |
| Up | vagrant up | starts and provisions the vagrant environment |
| Provision | vagrant provision | provisions the vagrant machine |
| Halt | vagrant halt | stops the vagrant machine |
| Destroy | vagrant destroy | stops and deletes all traces of the vagrant machine |
| Status | vagrant status | outputs status of the vagrant machine |
| Connect | vagrant ssh | connects to machine via SSH |

### Vagrant - Example of usage
In this example, I show the commands to start and connect to the VM using _Vagrant_. Once connected to the VM you are in a fully functional, albeit minimal, GNU/Linux distribution. At the end of the work, remember to logout from the VM and turn it off.

Start VM and connect to it:
```bash
# you are on your pc
gianni@nolok ~/workspace/projects/ttf $ cd vagrant
gianni@nolok ~/workspace/projects/ttf/vagrant $ vagrant up
gianni@nolok ~/workspace/projects/ttf/vagrant $ vagrant ssh
# now you are connected to the VM and the next commands will be execute inside VM
alpine38:~$ 
```

At the end, you need to logout and shutdown the VM:
```bash
# remenber to logout from the VM
alpine38:~$ logout
# you are back on your pc
gianni@nolok ~/workspace/projects/ttf/vagrant $ vagrant halt
```

## License
This project is licensed under the GPL-v3 License - see the LICENSE.md file for details
