use std::fs::File;
use std::io::Write;
use std::path::PathBuf;
use super::grep_result::GrepResult;

pub fn result_write(path: PathBuf, results: Vec<GrepResult>) {
    let mut file = File::create(path).expect("file not found.");
    for result in results {
      writeln!(
        file, 
        "{}", 
        [result.file_path, result.row.to_string(), result.match_text].join(","))
      .expect("cannot write.");
    }
}
