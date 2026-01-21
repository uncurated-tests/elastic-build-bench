'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4541<T> = T extends (infer U)[]
  ? DeepReadonlyArray4541<U>
  : T extends object
  ? DeepReadonlyObject4541<T>
  : T;

interface DeepReadonlyArray4541<T> extends ReadonlyArray<DeepReadonly4541<T>> {}

type DeepReadonlyObject4541<T> = {
  readonly [P in keyof T]: DeepReadonly4541<T[P]>;
};

type UnionToIntersection4541<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4541<T> = UnionToIntersection4541<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4541<T extends unknown[], V> = [...T, V];

type TuplifyUnion4541<T, L = LastOf4541<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4541<TuplifyUnion4541<Exclude<T, L>>, L>;

type DeepPartial4541<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4541<T[P]> }
  : T;

type Paths4541<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4541<K, Paths4541<T[K], Prev4541[D]>> : never }[keyof T]
  : never;

type Prev4541 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4541<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4541 {
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

type ConfigPaths4541 = Paths4541<NestedConfig4541>;

interface HeavyProps4541 {
  config: DeepPartial4541<NestedConfig4541>;
  path?: ConfigPaths4541;
}

const HeavyComponent4541 = memo(function HeavyComponent4541({ config }: HeavyProps4541) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4541) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4541 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4541: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4541.displayName = 'HeavyComponent4541';
export default HeavyComponent4541;
