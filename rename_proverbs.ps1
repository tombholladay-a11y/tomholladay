$dir = "C:\Users\tholl\.gemini\antigravity\scratch\tomholladay\public\transcripts\Proverbs"
$jsonPath = "C:\Users\tholl\.gemini\antigravity\scratch\tomholladay\src\data\transcripts.json"

# Update JSON
$jsonData = Get-Content $jsonPath -Raw | ConvertFrom-Json

# Iterate through files in Proverbs
$files = Get-ChildItem -Path $dir -Filter "BookofProverbs*.txt"

foreach ($file in $files) {
    if ($file.Name -match "BookofProverbsWeek(\d)Day(\d).txt") {
        $week = [int]$matches[1]
        $day = [int]$matches[2]
        $n = ($week - 1) * 7 + $day
        
        $newName = "Proverbs${n}Week${week}Day${day}.txt"
        Rename-Item -Path $file.FullName -NewName $newName
    }
}

# Now update the JSON structure
$proverbs = $jsonData.Proverbs.weeks

foreach ($weekProp in $proverbs.psobject.properties) {
    $weekNum = $weekProp.Name
    $days = $weekProp.Value
    
    foreach ($dayObj in $days) {
        if ($dayObj.filename -match "BookofProverbsWeek(\d)Day(\d).txt") {
            $w = [int]$matches[1]
            $d = [int]$matches[2]
            $n = ($w - 1) * 7 + $d
            
            $newName = "Proverbs${n}Week${w}Day${d}.txt"
            $dayObj.filename = $newName
            $dayObj.path = "/transcripts/Proverbs/$newName"
        }
    }
}

$jsonData | ConvertTo-Json -Depth 10 | Set-Content $jsonPath
Write-Host "Done renaming and updating JSON"
