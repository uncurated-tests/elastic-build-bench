'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6965<T> = T extends (infer U)[]
  ? DeepReadonlyArray6965<U>
  : T extends object
  ? DeepReadonlyObject6965<T>
  : T;

interface DeepReadonlyArray6965<T> extends ReadonlyArray<DeepReadonly6965<T>> {}

type DeepReadonlyObject6965<T> = {
  readonly [P in keyof T]: DeepReadonly6965<T[P]>;
};

type UnionToIntersection6965<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6965<T> = UnionToIntersection6965<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6965<T extends unknown[], V> = [...T, V];

type TuplifyUnion6965<T, L = LastOf6965<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6965<TuplifyUnion6965<Exclude<T, L>>, L>;

type DeepPartial6965<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6965<T[P]> }
  : T;

type Paths6965<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6965<K, Paths6965<T[K], Prev6965[D]>> : never }[keyof T]
  : never;

type Prev6965 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6965<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6965 {
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

type ConfigPaths6965 = Paths6965<NestedConfig6965>;

interface HeavyProps6965 {
  config: DeepPartial6965<NestedConfig6965>;
  path?: ConfigPaths6965;
}

const HeavyComponent6965 = memo(function HeavyComponent6965({ config }: HeavyProps6965) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6965) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6965 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6965: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6965.displayName = 'HeavyComponent6965';
export default HeavyComponent6965;
