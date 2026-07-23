$sourceDir = "C:\Users\tholl\OneDrive\Documents\SERMONS\Drivetime Devotions\Transcripts\Edited Transcripts\Psalms 51-75"
$destDir = "C:\Users\tholl\.gemini\antigravity\scratch\tomholladay\public\transcripts\Psalms 51-75"
New-Item -ItemType Directory -Force -Path $destDir

$jsonPath = "C:\Users\tholl\.gemini\antigravity\scratch\tomholladay\src\data\transcripts.json"
$jsonData = Get-Content $jsonPath -Raw | ConvertFrom-Json

$weeks = @{}

for ($i = 0; $i -lt 25; $i++) {
    $psalmNum = 51 + $i
    $week = [math]::Floor($i / 5) + 1
    $day = ($i % 5) + 1
    
    $oldName = "Psalm $psalmNum.txt"
    $psalmNumStr = "{0:D2}" -f $psalmNum
    $newName = "Psalms${psalmNumStr}Week${week}Day${day}.txt"
    
    if (Test-Path "$sourceDir\$oldName") {
        Copy-Item -Path "$sourceDir\$oldName" -Destination "$destDir\$newName"
    } else {
        Write-Warning "File not found: $sourceDir\$oldName"
    }
    
    if (-not $weeks.Contains("$week")) {
        $weeks["$week"] = @()
    }
    
    $obj = [PSCustomObject]@{
        filename = $newName
        path = "/transcripts/Psalms 51-75/$newName"
    }
    
    $weeks["$week"] += $obj
}

$weeksObj = [PSCustomObject]@{
    "1" = $weeks["1"]
    "2" = $weeks["2"]
    "3" = $weeks["3"]
    "4" = $weeks["4"]
    "5" = $weeks["5"]
}

$bookObj = [PSCustomObject]@{
    weeks = $weeksObj
    index = 16.5
}

$jsonData | Add-Member -MemberType NoteProperty -Name "Psalms 51-75" -Value $bookObj -Force

$jsonData | ConvertTo-Json -Depth 10 | Set-Content $jsonPath
Write-Host "Done"
