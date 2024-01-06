use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct GrepResult {
    pub file_path: String,
    pub row: usize,
    pub match_text: String,
}