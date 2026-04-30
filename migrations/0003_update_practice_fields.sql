-- Migration: Update Practice Fields (Rename completion_rate concept to prompt_count)
-- For existing data, we'll map completion rates to prompt counts
UPDATE practice_projects SET completion_rate = '3회' WHERE id IN ('1', '5', '13', '15');
UPDATE practice_projects SET completion_rate = '2회' WHERE id IN ('2', '9', '14', '22', '23');
UPDATE practice_projects SET completion_rate = '4회' WHERE id IN ('3', '4', '7', '11', '16', '17', '20', '21', '24');
UPDATE practice_projects SET completion_rate = '5회' WHERE id IN ('6', '18', '19');
UPDATE practice_projects SET completion_rate = '1회' WHERE id IN ('8', '10', '12');
