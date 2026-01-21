'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13808<T> = T extends (infer U)[]
  ? DeepReadonlyArray13808<U>
  : T extends object
  ? DeepReadonlyObject13808<T>
  : T;

interface DeepReadonlyArray13808<T> extends ReadonlyArray<DeepReadonly13808<T>> {}

type DeepReadonlyObject13808<T> = {
  readonly [P in keyof T]: DeepReadonly13808<T[P]>;
};

type UnionToIntersection13808<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13808<T> = UnionToIntersection13808<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13808<T extends unknown[], V> = [...T, V];

type TuplifyUnion13808<T, L = LastOf13808<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13808<TuplifyUnion13808<Exclude<T, L>>, L>;

type DeepPartial13808<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13808<T[P]> }
  : T;

type Paths13808<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13808<K, Paths13808<T[K], Prev13808[D]>> : never }[keyof T]
  : never;

type Prev13808 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13808<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13808 {
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

type ConfigPaths13808 = Paths13808<NestedConfig13808>;

interface HeavyProps13808 {
  config: DeepPartial13808<NestedConfig13808>;
  path?: ConfigPaths13808;
}

const HeavyComponent13808 = memo(function HeavyComponent13808({ config }: HeavyProps13808) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13808) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13808 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13808: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13808.displayName = 'HeavyComponent13808';
export default HeavyComponent13808;
