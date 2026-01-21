'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6846<T> = T extends (infer U)[]
  ? DeepReadonlyArray6846<U>
  : T extends object
  ? DeepReadonlyObject6846<T>
  : T;

interface DeepReadonlyArray6846<T> extends ReadonlyArray<DeepReadonly6846<T>> {}

type DeepReadonlyObject6846<T> = {
  readonly [P in keyof T]: DeepReadonly6846<T[P]>;
};

type UnionToIntersection6846<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6846<T> = UnionToIntersection6846<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6846<T extends unknown[], V> = [...T, V];

type TuplifyUnion6846<T, L = LastOf6846<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6846<TuplifyUnion6846<Exclude<T, L>>, L>;

type DeepPartial6846<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6846<T[P]> }
  : T;

type Paths6846<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6846<K, Paths6846<T[K], Prev6846[D]>> : never }[keyof T]
  : never;

type Prev6846 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6846<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6846 {
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

type ConfigPaths6846 = Paths6846<NestedConfig6846>;

interface HeavyProps6846 {
  config: DeepPartial6846<NestedConfig6846>;
  path?: ConfigPaths6846;
}

const HeavyComponent6846 = memo(function HeavyComponent6846({ config }: HeavyProps6846) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6846) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6846 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6846: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6846.displayName = 'HeavyComponent6846';
export default HeavyComponent6846;
