'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6026<T> = T extends (infer U)[]
  ? DeepReadonlyArray6026<U>
  : T extends object
  ? DeepReadonlyObject6026<T>
  : T;

interface DeepReadonlyArray6026<T> extends ReadonlyArray<DeepReadonly6026<T>> {}

type DeepReadonlyObject6026<T> = {
  readonly [P in keyof T]: DeepReadonly6026<T[P]>;
};

type UnionToIntersection6026<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6026<T> = UnionToIntersection6026<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6026<T extends unknown[], V> = [...T, V];

type TuplifyUnion6026<T, L = LastOf6026<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6026<TuplifyUnion6026<Exclude<T, L>>, L>;

type DeepPartial6026<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6026<T[P]> }
  : T;

type Paths6026<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6026<K, Paths6026<T[K], Prev6026[D]>> : never }[keyof T]
  : never;

type Prev6026 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6026<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6026 {
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

type ConfigPaths6026 = Paths6026<NestedConfig6026>;

interface HeavyProps6026 {
  config: DeepPartial6026<NestedConfig6026>;
  path?: ConfigPaths6026;
}

const HeavyComponent6026 = memo(function HeavyComponent6026({ config }: HeavyProps6026) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6026) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6026 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6026: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6026.displayName = 'HeavyComponent6026';
export default HeavyComponent6026;
