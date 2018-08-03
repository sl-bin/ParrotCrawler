import subprocess

#________user options_______#
#enter the n you want to test
nArr = [1,2,3]
#enter the widths you want to test
widthArr = [1,2]
#enter the script you want to test
testScript = "bfs_threads_limit.py"
#enter the URL you want to test
testUrl = "http://www.google.com"
#enter the searchphrase you want to test
searchPhrase = "alaska"



####_________main_________####
outfile = open("crawlerSpeedData.csv", "w")

outfile.write("n,width,time\n")

for n in nArr:
    for w in widthArr:
        print("Testing crawler: n=" + str(n) + " and w=" + str(w))

        cmd = "python3 " + testScript + " " + testUrl + " " + str(n) + " " + searchPhrase + " " + str(w)
        resultTime = subprocess.getoutput(cmd)
        print("Results: " + str(resultTime))

        outfile.write(str(n) + "," + str(w) + "," + str(resultTime) + "\n")

outfile.close
print("All done!")
