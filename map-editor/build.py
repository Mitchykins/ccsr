import glob
from pathlib import Path
import shutil
import json


mapDataPaths = glob.glob("../ccsr/**/map.data")
episode = 1

for mapFolder in mapDataPaths:
    data = {
        "name": f"Episode {episode}",
        "maps": []
    }

    maps = glob.glob(mapFolder + "/**")

    for map in maps:
        p = Path(map)
        text = open(p).read()
        mapData = {
            "name": p.name.split(".")[0],
            "data": text
        }
        data["maps"].append(mapData)

    root = f"public/maps/{episode}/"
    Path(root).mkdir(parents=True, exist_ok=True)

    open(f"{root}map{episode}.json", "w").write(json.dumps(data, indent=4))

    # copy sprites
    files = [f"ep{episode}.json", f"ep{episode}.png"]

    for f in files:
        fromPath = Path(f"../port/public/assets/{episode}/{f}")
        toPath = Path(f"public/maps/{episode}/{f}")
        shutil.copy(fromPath, toPath)

    episode += 1
