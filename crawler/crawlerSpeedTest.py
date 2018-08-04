import subprocess
import time

#________user options_______#
#enter the n you want to test
nArr = [1,2]
#enter the widths you want to test
widthArr = [20,40]
#enter the num threads you want to test
threadArr = [10,30,40]
#enter the script you want to test
testScript = "bfs_threads_limit.py"
#enter the URL you want to test
testUrl = "https://docs.python.org/3.4/library/string.html"
#enter the searchphrase you want to test
searchPhrase = "alaska"



####_________main_________####
#open the output file
outfile = open("crawlerSpeedData2.csv", "w")
#set up headers
outfile.write("width,n_depth,num_threads,time\n")

#run tests for each combination of n and width
for w in widthArr:
    for n in nArr:
        for t in threadArr:
            print("Testing crawler: w={}, n={}, t={}".format(w,n,t))
            #build the command
            cmd = "python3 {} {} {} {} {} {}".format(testScript, testUrl, n, searchPhrase, w, t)

            #time the process
            time0 = time.time()
            subprocess.getoutput(cmd)
            time1 = time.time()

            #output the results to the csv
            resultTime = time1-time0
            print("Results: " + str(resultTime))
            outfile.write("{},{},{},{}\n".format(w,n,t,resultTime))


outfile.close
print("All done!")
