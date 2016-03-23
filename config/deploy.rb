# config valid only for current version of Capistrano
lock '3.4.0'

set :repo_url, 'git@github.com:FreshLines/brandtinker.com.git'

set :scm, :git

set :deploy_via, :remote_cache
set :ssh_options, { :forward_agent => true, :user => "root" }

set :branch, :master
# Default branch is :master
#ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, '/var/www/my_app_name'

  
# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
# set :log_level, :debug

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
set :linked_files, fetch(:linked_files, []).push('config/config.production.json', 'config/config.production.json')
set :linked_files, fetch(:linked_files, []).push('config/config.development.json', 'config/config.development.json')
set :linked_files, fetch(:linked_files, []).push('config/config.staging.json', 'config/config.development.json')
set :linked_dirs, %w{node_modules bower_components}
# Default value for linked_dirs is []
# set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system')

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5
# set :default_env, {
#   path: [
#     "#{shared_path}/node_modules/bower/bin",
#     "#{shared_path}/node_modules/grunt-cli/bin",
#     "$PATH"].join(":")
# }

namespace :deploy do

  task :build_locally do
    current_stage = fetch(:stage)
    run_locally do
      execute :grunt, "build --ENV=#{current_stage} --force"
    end
  end

  task :upload_dist do
    source = "dist"
    target = "/srv/www/#{fetch(:application)}/current"
    on roles(:app) do
      upload! source, target, recursive: true
    end
  end

  task :bower_and_npm_install do
    on roles(:app), in: :sequence, wait: 5 do
      within release_path do
        execute :npm, "install"
        execute :bower, "--allow-root install"
      end
    end
  end

  task :build do
    current_stage = fetch(:stage)
    on roles(:app), in: :sequence, wait: 5 do
      within release_path do
        execute :grunt, "build --ENV=#{current_stage} --force"
      end
    end
  end

  after :bower_and_npm_install, :build
  # after :publishing, :restart
  after :published, :bower_and_npm_install
end
