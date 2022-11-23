import { Grass } from './entities/grass'
import { Building } from './entities/building'
import { elevator } from './entities/elevator'
import { NftFrame} from './entities/nft-frame'
import { Tree } from './entities/tree'
import { PictureFrame } from './entities/picture-frame'
import { PartitionWall } from './entities/partition-wall'
import { Droid } from './entities/droid'

// uncomment this to unhide the partition wall
// new PartitionWall(new Vector3(6,3.5,15)) 

new Grass(new Vector3(8,0.01,8))

new Building()

new PictureFrame(new Vector3(8,3.5,14.6))

new Tree(new Vector3(12,0,2.3), new Quaternion().setEuler(0,90,0))

new Droid()

/** 
 *  NFTs
 *  copy the url of the ethereum NFT on OpenSea 
 *                                            This is the contract address                 nft id
 *  https://opensea.io/de-DE/assets/ethereum/ 0xffc5043d9a00865d089d5eefa5b3d1625aec6763 / 581
 */

// NFT wearable: Helmet of Servant of Evil Cult
new NftFrame( 
  '0xfeb52cbf71b9adac957c6f948a6cf9980ac8c907', // NFTs contract address
  '6328',          // NFT ID
  true,            // show NFT info
  new Vector3(3,5,14.6),   // positiom
  new Quaternion().setEuler(0,0,0), // rotation
  new Vector3(2,2,2))   // size

// NFT wearable: Kraken Ruby-Eye Crown
new NftFrame( 
  '0xffc5043d9a00865d089d5eefa5b3d1625aec6763', // NFTs Contract Address
  '581',          // NFT ID
  true,            // show NFT info
  new Vector3(4.25,5,14.6),   // positiom
  new Quaternion().setEuler(0,0,0), // rotation
  new Vector3(2,2,2))   // size

// NFT wearable: Diamond Skull
new NftFrame( 
  '0x07ccfd0fbada4ac3c22ecd38037ca5e5c0ad8cfa', // NFTs Contract Address
  '39',          // NFT ID
  true,            // show NFT info
  new Vector3(2.5,6.5,14.6),   // positiom
  new Quaternion().setEuler(0,0,0), // rotation
  new Vector3(2,2,2))   // size

// NFT wearable: CYBERSOLDIER HELMET - Winter Soldier Collection - Mark III - FROM CYBERMIKE
new NftFrame( 
  '0x24d538a6265b006d4b53c45ba91af5ef60dca6cb', // NFTs Contract Address
  '29',          // NFT ID
  true,            // show NFT info
  new Vector3(3.75,6.5,14.6),   // positiom
  new Quaternion().setEuler(0,0,0), // rotation
  new Vector3(2,2,2))   // size



