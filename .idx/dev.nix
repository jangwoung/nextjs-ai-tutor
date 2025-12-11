# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-25.05"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
    pkgs.pnpm
  ];
  # Sets environment variables in the workspace
  env = {};
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      # Tailwind CSS support for Next.js UI development
      "bradlc.vscode-tailwindcss"
      # ESLint integration for TypeScript/JavaScript
      "dbaeumer.vscode-eslint"
    ];
    workspace = {
      # Runs when a workspace is first created with this `dev.nix` file
      onCreate = {
        npm-install = "pnpm install --frozen-lockfile";
        # Open editors for the following files by default, if they exist:
        default.openFiles = [
          "app/page.tsx"
          "app/layout.tsx"
          "prisma/schema.prisma"
        ];
      };
      # To run something each time the workspace is (re)started, use the `onStart` hook
    };
    # Enable previews and customize configuration
    previews = {
      enable = true;
      previews = {
        web = {
          command = [ "pnpm" "dev" "--" "-H" "0.0.0.0" "-p" "$PORT" ];
          manager = "web";
        };
      };
    };
  };
}
