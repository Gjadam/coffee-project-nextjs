/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"]
  },
  images: {
    domains: [
      'arweave.net',
      'bitcorns.com',
      'cdn.bitcoincoaster.com',
      'cdn.sanity.io',
      'dankdirectory.files.wordpress.com',
      'fakeraredirectory.com',
      'fakeraredirectory.files.wordpress.com',
      'hosting.photobucket.com',
      'ipfs.io',
      'i.imgur.com',
      'mandelduck.herokuapp.com',
      'metadata.spellsofgenesis.com',
      'pepewtf.s3.amazonaws.com',
      'phunchkins.com',
      'public-scarce-city.s3.amazonaws.com',
      'rarejapanesenfts.com',
      'rarepepedirectory.com',
      'rarepepewallet.com',
      'scannablenfts.com', // <--- here it is
      'thewojakway.com',
      'xchain.io',
      'xcp.dankdirectory.site',
      'xcp.dankinfo.art',
      'xcpinata.s3.amazonaws.com',
    ],
  },
}

module.exports = nextConfig
