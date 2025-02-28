const fs = require('fs').promises;

module.exports = {
    ITEM: (item, overrides) => {
        fs.writeFile(`assets/minecraft/models/item/${item}.json`, JSON.stringify({
            parent: "minecraft:item/generated",
            textures: {
                "layer0": "minecraft:item/" + item
            },
            overrides: overrides
        }), "UTF-8");
    },
    FLAT_BLOCK: (item, overrides) => {
        fs.writeFile(`assets/minecraft/models/item/${item}.json`, JSON.stringify({
            parent: "minecraft:item/generated",
            textures: {
                "layer0": "minecraft:block/" + item
            },
            overrides: overrides
        }), "UTF-8");
    },
	GLASS_PANE: (item, overrides) => {
        fs.writeFile(`assets/minecraft/models/item/${item}.json`, JSON.stringify({
            parent: "minecraft:item/generated",
            textures: {
                "layer0": "minecraft:block/" + item.substring(0, item.length - 5)
            },
            overrides: overrides
        }), "UTF-8");
    },
	FIREWORK_STAR: (item, overrides) => {
		fs.writeFile(`assets/minecraft/models/item/${item}.json`, JSON.stringify({
            parent: "minecraft:item/generated",
            textures: {
                "layer0": "minecraft:item/firework_star",
				"layer1": "minecraft:item/firework_star_overlay"
            },
            overrides: overrides
        }), "UTF-8");
	},
	SKULL: (item, overrides) => {
		fs.writeFile(`assets/minecraft/models/item/${item}.json`, JSON.stringify({
            parent: "minecraft:item/template_skull",
            overrides: overrides
        }), "UTF-8");
	},
	BLOCK: (item, overrides) => {
		fs.writeFile(`assets/minecraft/models/item/${item}.json`, JSON.stringify({
            parent: "minecraft:block/" + item,
            overrides: overrides
        }), "UTF-8");
	},
	PISTON: (item, overrides) => {
		fs.writeFile(`assets/minecraft/models/item/${item}.json`, JSON.stringify({
            parent: "minecraft:block/piston_inventory",
            overrides: overrides
        }), "UTF-8");
	},
	HANDHELD: (item, overrides) => {
		fs.writeFile(`assets/minecraft/models/item/${item}.json`, JSON.stringify({
            parent: "minecraft:item/handheld",
            textures: {
                "layer0": "item/" + item
            },
            overrides: overrides
        }), "UTF-8");
	},
	LEATHER_ARMOR: (item, overrides) => {
		fs.writeFile(`assets/minecraft/models/item/${item}.json`, JSON.stringify({
            parent: "minecraft:item/generated",
            textures: {
                "layer0": "minecraft:item/" + item,
				"layer1": "minecraft:item/" + item + "_overlay"
            },
            overrides: overrides
        }), "UTF-8");
	},
	CUSTOM: (item, overrides, id) => {
		fs.writeFile(`assets/minecraft/models/item/${item}.json`, JSON.stringify({
            parent: "minecraft:item/generated",
            textures: {
                "layer0": "minecraft:item/" + item
            },
            overrides: overrides
        }), "UTF-8");
	},
	CLOCK: (item, overrides) => {
		var faces = [
			{
			  "predicate": {
				"time": 0
			  },
			  "model": "minecraft:item/clock"
			},
			{
			  "predicate": {
				"time": 0.0078125
			  },
			  "model": "minecraft:item/clock_01"
			},
			{
			  "predicate": {
				"time": 0.0234375
			  },
			  "model": "minecraft:item/clock_02"
			},
			{
			  "predicate": {
				"time": 0.0390625
			  },
			  "model": "minecraft:item/clock_03"
			},
			{
			  "predicate": {
				"time": 0.0546875
			  },
			  "model": "minecraft:item/clock_04"
			},
			{
			  "predicate": {
				"time": 0.0703125
			  },
			  "model": "minecraft:item/clock_05"
			},
			{
			  "predicate": {
				"time": 0.0859375
			  },
			  "model": "minecraft:item/clock_06"
			},
			{
			  "predicate": {
				"time": 0.1015625
			  },
			  "model": "minecraft:item/clock_07"
			},
			{
			  "predicate": {
				"time": 0.1171875
			  },
			  "model": "minecraft:item/clock_08"
			},
			{
			  "predicate": {
				"time": 0.1328125
			  },
			  "model": "minecraft:item/clock_09"
			},
			{
			  "predicate": {
				"time": 0.1484375
			  },
			  "model": "minecraft:item/clock_10"
			},
			{
			  "predicate": {
				"time": 0.1640625
			  },
			  "model": "minecraft:item/clock_11"
			},
			{
			  "predicate": {
				"time": 0.1796875
			  },
			  "model": "minecraft:item/clock_12"
			},
			{
			  "predicate": {
				"time": 0.1953125
			  },
			  "model": "minecraft:item/clock_13"
			},
			{
			  "predicate": {
				"time": 0.2109375
			  },
			  "model": "minecraft:item/clock_14"
			},
			{
			  "predicate": {
				"time": 0.2265625
			  },
			  "model": "minecraft:item/clock_15"
			},
			{
			  "predicate": {
				"time": 0.2421875
			  },
			  "model": "minecraft:item/clock_16"
			},
			{
			  "predicate": {
				"time": 0.2578125
			  },
			  "model": "minecraft:item/clock_17"
			},
			{
			  "predicate": {
				"time": 0.2734375
			  },
			  "model": "minecraft:item/clock_18"
			},
			{
			  "predicate": {
				"time": 0.2890625
			  },
			  "model": "minecraft:item/clock_19"
			},
			{
			  "predicate": {
				"time": 0.3046875
			  },
			  "model": "minecraft:item/clock_20"
			},
			{
			  "predicate": {
				"time": 0.3203125
			  },
			  "model": "minecraft:item/clock_21"
			},
			{
			  "predicate": {
				"time": 0.3359375
			  },
			  "model": "minecraft:item/clock_22"
			},
			{
			  "predicate": {
				"time": 0.3515625
			  },
			  "model": "minecraft:item/clock_23"
			},
			{
			  "predicate": {
				"time": 0.3671875
			  },
			  "model": "minecraft:item/clock_24"
			},
			{
			  "predicate": {
				"time": 0.3828125
			  },
			  "model": "minecraft:item/clock_25"
			},
			{
			  "predicate": {
				"time": 0.3984375
			  },
			  "model": "minecraft:item/clock_26"
			},
			{
			  "predicate": {
				"time": 0.4140625
			  },
			  "model": "minecraft:item/clock_27"
			},
			{
			  "predicate": {
				"time": 0.4296875
			  },
			  "model": "minecraft:item/clock_28"
			},
			{
			  "predicate": {
				"time": 0.4453125
			  },
			  "model": "minecraft:item/clock_29"
			},
			{
			  "predicate": {
				"time": 0.4609375
			  },
			  "model": "minecraft:item/clock_30"
			},
			{
			  "predicate": {
				"time": 0.4765625
			  },
			  "model": "minecraft:item/clock_31"
			},
			{
			  "predicate": {
				"time": 0.4921875
			  },
			  "model": "minecraft:item/clock_32"
			},
			{
			  "predicate": {
				"time": 0.5078125
			  },
			  "model": "minecraft:item/clock_33"
			},
			{
			  "predicate": {
				"time": 0.5234375
			  },
			  "model": "minecraft:item/clock_34"
			},
			{
			  "predicate": {
				"time": 0.5390625
			  },
			  "model": "minecraft:item/clock_35"
			},
			{
			  "predicate": {
				"time": 0.5546875
			  },
			  "model": "minecraft:item/clock_36"
			},
			{
			  "predicate": {
				"time": 0.5703125
			  },
			  "model": "minecraft:item/clock_37"
			},
			{
			  "predicate": {
				"time": 0.5859375
			  },
			  "model": "minecraft:item/clock_38"
			},
			{
			  "predicate": {
				"time": 0.6015625
			  },
			  "model": "minecraft:item/clock_39"
			},
			{
			  "predicate": {
				"time": 0.6171875
			  },
			  "model": "minecraft:item/clock_40"
			},
			{
			  "predicate": {
				"time": 0.6328125
			  },
			  "model": "minecraft:item/clock_41"
			},
			{
			  "predicate": {
				"time": 0.6484375
			  },
			  "model": "minecraft:item/clock_42"
			},
			{
			  "predicate": {
				"time": 0.6640625
			  },
			  "model": "minecraft:item/clock_43"
			},
			{
			  "predicate": {
				"time": 0.6796875
			  },
			  "model": "minecraft:item/clock_44"
			},
			{
			  "predicate": {
				"time": 0.6953125
			  },
			  "model": "minecraft:item/clock_45"
			},
			{
			  "predicate": {
				"time": 0.7109375
			  },
			  "model": "minecraft:item/clock_46"
			},
			{
			  "predicate": {
				"time": 0.7265625
			  },
			  "model": "minecraft:item/clock_47"
			},
			{
			  "predicate": {
				"time": 0.7421875
			  },
			  "model": "minecraft:item/clock_48"
			},
			{
			  "predicate": {
				"time": 0.7578125
			  },
			  "model": "minecraft:item/clock_49"
			},
			{
			  "predicate": {
				"time": 0.7734375
			  },
			  "model": "minecraft:item/clock_50"
			},
			{
			  "predicate": {
				"time": 0.7890625
			  },
			  "model": "minecraft:item/clock_51"
			},
			{
			  "predicate": {
				"time": 0.8046875
			  },
			  "model": "minecraft:item/clock_52"
			},
			{
			  "predicate": {
				"time": 0.8203125
			  },
			  "model": "minecraft:item/clock_53"
			},
			{
			  "predicate": {
				"time": 0.8359375
			  },
			  "model": "minecraft:item/clock_54"
			},
			{
			  "predicate": {
				"time": 0.8515625
			  },
			  "model": "minecraft:item/clock_55"
			},
			{
			  "predicate": {
				"time": 0.8671875
			  },
			  "model": "minecraft:item/clock_56"
			},
			{
			  "predicate": {
				"time": 0.8828125
			  },
			  "model": "minecraft:item/clock_57"
			},
			{
			  "predicate": {
				"time": 0.8984375
			  },
			  "model": "minecraft:item/clock_58"
			},
			{
			  "predicate": {
				"time": 0.9140625
			  },
			  "model": "minecraft:item/clock_59"
			},
			{
			  "predicate": {
				"time": 0.9296875
			  },
			  "model": "minecraft:item/clock_60"
			},
			{
			  "predicate": {
				"time": 0.9453125
			  },
			  "model": "minecraft:item/clock_61"
			},
			{
			  "predicate": {
				"time": 0.9609375
			  },
			  "model": "minecraft:item/clock_62"
			},
			{
			  "predicate": {
				"time": 0.9765625
			  },
			  "model": "minecraft:item/clock_63"
			},
			{
			  "predicate": {
				"time": 0.9921875
			  },
			  "model": "minecraft:item/clock"
			}
		]
		
		overrides = faces.concat(overrides);
		
		fs.writeFile(`assets/minecraft/models/item/${item}.json`, JSON.stringify({
            parent: "minecraft:item/generated",
            textures: {
                "layer0": "minecraft:item/clock_00",
            },
            overrides: overrides
        }), "UTF-8");
	}
}
