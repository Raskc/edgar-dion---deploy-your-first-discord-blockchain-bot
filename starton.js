const axios = require("axios")

const axiosInstance = axios.create({
	baseURL: "https://api.starton.io",
	headers: {
		"x-api-key": "PUT HERE YOUR API KEY",
	},
})

axiosInstance.post(
	"/v3/smart-contract/polygon-mumbai/0x942592d723259Ee57e650473f4E2c05639616287/call",
	{
		functionName: "mint(address,string)",
		params: [
			"0xb024F4D37E3818CC69CCBc9C9a54e255a88847d4",
			"bafkreid5t57ohaws4vydcalkdns32ik35zrszs6uo7xi77sdccqjfokcba"
		],
		signerWallet: "0xb024F4D37E3818CC69CCBc9C9a54e255a88847d4",
		speed: "average"
	}
).then((response) => {
	console.log(response.data)
})