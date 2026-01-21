'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13972<T> = T extends (infer U)[]
  ? DeepReadonlyArray13972<U>
  : T extends object
  ? DeepReadonlyObject13972<T>
  : T;

interface DeepReadonlyArray13972<T> extends ReadonlyArray<DeepReadonly13972<T>> {}

type DeepReadonlyObject13972<T> = {
  readonly [P in keyof T]: DeepReadonly13972<T[P]>;
};

type UnionToIntersection13972<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13972<T> = UnionToIntersection13972<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13972<T extends unknown[], V> = [...T, V];

type TuplifyUnion13972<T, L = LastOf13972<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13972<TuplifyUnion13972<Exclude<T, L>>, L>;

type DeepPartial13972<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13972<T[P]> }
  : T;

type Paths13972<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13972<K, Paths13972<T[K], Prev13972[D]>> : never }[keyof T]
  : never;

type Prev13972 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13972<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13972 {
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

type ConfigPaths13972 = Paths13972<NestedConfig13972>;

interface HeavyProps13972 {
  config: DeepPartial13972<NestedConfig13972>;
  path?: ConfigPaths13972;
}

const HeavyComponent13972 = memo(function HeavyComponent13972({ config }: HeavyProps13972) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13972) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13972 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13972: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13972.displayName = 'HeavyComponent13972';
export default HeavyComponent13972;
