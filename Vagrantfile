APP_NAME = "brand_name.frshlns.com"
# customize
CODE_ROOT = case ENV['USER']
            when 'scottsampson'
              "/Library/WebServer/Documents"
            when 'tommylee'
              "/Users/tommylee/sites"
            when 'timothyashley'
              "/Users/timothyashley/Sites"
            else
              "/sites"
            end

Vagrant::Config.run do |config|
  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box     = case ENV['USER']
                      when 'scottsampson'
                        "freshlines_ubuntu_14.042_ruby_2.2.2_version_1.0.box"
                      when 'tommylee'
                        "freshlines_ubuntu_14.042_ruby_2.2.2_v1.1.box"
                      else
                        "freshlines_ubuntu_14.042_ruby_2.2.2_version_1.0.box"
                      end

  config.vm.box_url = case ENV['USER']
                      when 'scottsampson'
                        "file:://Users/scottsampson/vagrant_box_files/freshlines_ubuntu_14.042_ruby_2.2.2_version_1.0.box"
                      when 'tommylee'
                        "file:://Users/tommylee/vagrant_box_files/freshlines_ubuntu_14.042_ruby_2.2.2_v1.1.box"
                      end

  # Assign this VM to a host only network IP, allowing you to access it
  config.vm.network :hostonly, "33.33.33.107"
  config.vm.network "forwarded_port", guest: 9000, host: 9000
  # Share your app folder with the box.
  config.vm.share_folder "brand_clash", "/srv/brand_clash", "#{CODE_ROOT}/brand_clash", type: "nfs"

  # Path to the SSH key
  config.ssh.private_key_path = File.join(ENV['HOME'], '.ssh', 'vagrant_freshlines.pem')

  config.vm.customize ["modifyvm", :id, "--memory", "4092", "--name", "#{APP_NAME}","--cpus", "2"]

  # Enable provisioning with chef server, specifying the chef server URL,
  # and the path to the validation key (relative to this Vagrantfile).
  config.vm.provision :chef_solo do |chef|

    chef.add_recipe "ubuntu"
    chef.add_recipe "nodejs"
    #chef.add_recipe "mysql::client"
    #chef.add_recipe "mysql::server"
    #chef.add_recipe "apache2"
    #chef.add_recipe "passenger_apache2"
    #chef.add_recipe "passenger_apache2::mod_rails"
    #chef.add_recipe "postfix"
    #chef.add_recipe "imagemagick"
    #chef.add_recipe "memcached"
    #chef.add_recipe "php"
    #chef.add_recipe "php::module_mysql"
    #chef.add_recipe "php::module_gd"
    #chef.add_recipe "apache2::mod_php5"

    chef.cookbooks_path = "cookbooks"

    # chef.json = {
    #   :mysql => {
    #    :server_root_password => '',
    #    :server_debian_password => '',
    #     :server_repl_password => ''
    #   }, :postfix => {
    #     :mydomain => "cloudspace.com"
    #   }
    # }
  end
end
