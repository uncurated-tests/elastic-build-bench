'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6149<T> = T extends (infer U)[]
  ? DeepReadonlyArray6149<U>
  : T extends object
  ? DeepReadonlyObject6149<T>
  : T;

interface DeepReadonlyArray6149<T> extends ReadonlyArray<DeepReadonly6149<T>> {}

type DeepReadonlyObject6149<T> = {
  readonly [P in keyof T]: DeepReadonly6149<T[P]>;
};

type UnionToIntersection6149<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6149<T> = UnionToIntersection6149<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6149<T extends unknown[], V> = [...T, V];

type TuplifyUnion6149<T, L = LastOf6149<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6149<TuplifyUnion6149<Exclude<T, L>>, L>;

type DeepPartial6149<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6149<T[P]> }
  : T;

type Paths6149<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6149<K, Paths6149<T[K], Prev6149[D]>> : never }[keyof T]
  : never;

type Prev6149 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6149<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6149 {
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

type ConfigPaths6149 = Paths6149<NestedConfig6149>;

interface HeavyProps6149 {
  config: DeepPartial6149<NestedConfig6149>;
  path?: ConfigPaths6149;
}

const HeavyComponent6149 = memo(function HeavyComponent6149({ config }: HeavyProps6149) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6149) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6149 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6149: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6149.displayName = 'HeavyComponent6149';
export default HeavyComponent6149;
