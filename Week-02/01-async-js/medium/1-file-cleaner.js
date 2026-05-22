// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs =require('fs');

const callback=(err,data)=>{
     if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);

    let cleanedData = data.trim().replace(/\s+/g, ' ');
  
    fs.writeFile('example.txt',cleanedData, (err)=>{if(err){
      console.error("Error writing file:", err);
      return;
    }

    console.log("File cleaned successfully");})
    console.log(cleanedData)

}
fs.readFile('example.txt',"utf-8",callback);
