'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13178<T> = T extends (infer U)[]
  ? DeepReadonlyArray13178<U>
  : T extends object
  ? DeepReadonlyObject13178<T>
  : T;

interface DeepReadonlyArray13178<T> extends ReadonlyArray<DeepReadonly13178<T>> {}

type DeepReadonlyObject13178<T> = {
  readonly [P in keyof T]: DeepReadonly13178<T[P]>;
};

type UnionToIntersection13178<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13178<T> = UnionToIntersection13178<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13178<T extends unknown[], V> = [...T, V];

type TuplifyUnion13178<T, L = LastOf13178<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13178<TuplifyUnion13178<Exclude<T, L>>, L>;

type DeepPartial13178<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13178<T[P]> }
  : T;

type Paths13178<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13178<K, Paths13178<T[K], Prev13178[D]>> : never }[keyof T]
  : never;

type Prev13178 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13178<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13178 {
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

type ConfigPaths13178 = Paths13178<NestedConfig13178>;

interface HeavyProps13178 {
  config: DeepPartial13178<NestedConfig13178>;
  path?: ConfigPaths13178;
}

const HeavyComponent13178 = memo(function HeavyComponent13178({ config }: HeavyProps13178) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13178) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13178 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13178: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13178.displayName = 'HeavyComponent13178';
export default HeavyComponent13178;
