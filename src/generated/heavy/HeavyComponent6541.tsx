'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6541<T> = T extends (infer U)[]
  ? DeepReadonlyArray6541<U>
  : T extends object
  ? DeepReadonlyObject6541<T>
  : T;

interface DeepReadonlyArray6541<T> extends ReadonlyArray<DeepReadonly6541<T>> {}

type DeepReadonlyObject6541<T> = {
  readonly [P in keyof T]: DeepReadonly6541<T[P]>;
};

type UnionToIntersection6541<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6541<T> = UnionToIntersection6541<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6541<T extends unknown[], V> = [...T, V];

type TuplifyUnion6541<T, L = LastOf6541<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6541<TuplifyUnion6541<Exclude<T, L>>, L>;

type DeepPartial6541<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6541<T[P]> }
  : T;

type Paths6541<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6541<K, Paths6541<T[K], Prev6541[D]>> : never }[keyof T]
  : never;

type Prev6541 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6541<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6541 {
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

type ConfigPaths6541 = Paths6541<NestedConfig6541>;

interface HeavyProps6541 {
  config: DeepPartial6541<NestedConfig6541>;
  path?: ConfigPaths6541;
}

const HeavyComponent6541 = memo(function HeavyComponent6541({ config }: HeavyProps6541) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6541) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6541 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6541: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6541.displayName = 'HeavyComponent6541';
export default HeavyComponent6541;
