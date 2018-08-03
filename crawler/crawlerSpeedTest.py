import subprocess
import time

#________user options_______#
#enter the n you want to test
nArr = [1]
#enter the widths you want to test
widthArr = [1,2]
#enter the script you want to test
testScript = "bfs_threads_limit.py"
#enter the URL you want to test
testUrl = "http://www.google.com"
#enter the searchphrase you want to test
searchPhrase = "alaska"



####_________main_________####
#open the output file
outfile = open("crawlerSpeedData.csv", "w")
#set up headers
outfile.write("n,width,time\n")

#run tests for each combination of n and width
for n in nArr:
    for w in widthArr:
        print("Testing crawler: n=" + str(n) + " and w=" + str(w))
        #build the command
        cmd = "python3 " + testScript + " " + testUrl + " " + str(n) + " " + searchPhrase + " " + str(w)

        #time the process
        time0 = time.time()
        subprocess.getoutput(cmd)
        time1 = time.time()

        #output the results to the csv
        resultTime = time1-time0
        print("Results: " + str(resultTime))
        outfile.write(str(n) + "," + str(w) + "," + str(resultTime) + "\n")


outfile.close
print("All done!")
