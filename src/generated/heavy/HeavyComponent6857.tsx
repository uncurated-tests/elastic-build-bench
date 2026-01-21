'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6857<T> = T extends (infer U)[]
  ? DeepReadonlyArray6857<U>
  : T extends object
  ? DeepReadonlyObject6857<T>
  : T;

interface DeepReadonlyArray6857<T> extends ReadonlyArray<DeepReadonly6857<T>> {}

type DeepReadonlyObject6857<T> = {
  readonly [P in keyof T]: DeepReadonly6857<T[P]>;
};

type UnionToIntersection6857<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6857<T> = UnionToIntersection6857<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6857<T extends unknown[], V> = [...T, V];

type TuplifyUnion6857<T, L = LastOf6857<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6857<TuplifyUnion6857<Exclude<T, L>>, L>;

type DeepPartial6857<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6857<T[P]> }
  : T;

type Paths6857<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6857<K, Paths6857<T[K], Prev6857[D]>> : never }[keyof T]
  : never;

type Prev6857 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6857<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6857 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths6857 = Paths6857<NestedConfig6857>;

interface HeavyProps6857 {
  config: DeepPartial6857<NestedConfig6857>;
  path?: ConfigPaths6857;
}

const HeavyComponent6857 = memo(function HeavyComponent6857({ config }: HeavyProps6857) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6857) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6857 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6857: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6857.displayName = 'HeavyComponent6857';
export default HeavyComponent6857;
