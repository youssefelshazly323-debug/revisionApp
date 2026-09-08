import React, { useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function ListSkills() {
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');

  const addSkill = () => {
    const trimmedSkill = skillInput.trim();

    if (!trimmedSkill) {
      return;
    }

    setSkills((currentSkills) => [...currentSkills, trimmedSkill]);
    setSkillInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List your skills!</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Your skills"
          value={skillInput}
          onChangeText={setSkillInput}
        />
        <Button title="Add Skill" onPress={addSkill} />
      </View>

      <ScrollView style={styles.list}>
        {skills.length === 0 ? (
          <Text style={styles.empty}>No skills yet.</Text>
        ) : (
          skills.map((skill, index) => (
            <Text key={`${skill}-${index}`} style={styles.skillText}>
              {skill}
            </Text>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
    color: '#111827',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
  list: {
    flex: 1,
  },
  skillText: {
    fontSize: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#d1d5db',
    color: '#111827',
  },
  empty: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 16,
  },
});