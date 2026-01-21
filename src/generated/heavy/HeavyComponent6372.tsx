'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6372<T> = T extends (infer U)[]
  ? DeepReadonlyArray6372<U>
  : T extends object
  ? DeepReadonlyObject6372<T>
  : T;

interface DeepReadonlyArray6372<T> extends ReadonlyArray<DeepReadonly6372<T>> {}

type DeepReadonlyObject6372<T> = {
  readonly [P in keyof T]: DeepReadonly6372<T[P]>;
};

type UnionToIntersection6372<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6372<T> = UnionToIntersection6372<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6372<T extends unknown[], V> = [...T, V];

type TuplifyUnion6372<T, L = LastOf6372<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6372<TuplifyUnion6372<Exclude<T, L>>, L>;

type DeepPartial6372<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6372<T[P]> }
  : T;

type Paths6372<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6372<K, Paths6372<T[K], Prev6372[D]>> : never }[keyof T]
  : never;

type Prev6372 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6372<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6372 {
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

type ConfigPaths6372 = Paths6372<NestedConfig6372>;

interface HeavyProps6372 {
  config: DeepPartial6372<NestedConfig6372>;
  path?: ConfigPaths6372;
}

const HeavyComponent6372 = memo(function HeavyComponent6372({ config }: HeavyProps6372) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6372) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6372 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6372: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6372.displayName = 'HeavyComponent6372';
export default HeavyComponent6372;
