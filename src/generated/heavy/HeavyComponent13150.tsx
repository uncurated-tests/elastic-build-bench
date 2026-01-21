'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13150<T> = T extends (infer U)[]
  ? DeepReadonlyArray13150<U>
  : T extends object
  ? DeepReadonlyObject13150<T>
  : T;

interface DeepReadonlyArray13150<T> extends ReadonlyArray<DeepReadonly13150<T>> {}

type DeepReadonlyObject13150<T> = {
  readonly [P in keyof T]: DeepReadonly13150<T[P]>;
};

type UnionToIntersection13150<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13150<T> = UnionToIntersection13150<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13150<T extends unknown[], V> = [...T, V];

type TuplifyUnion13150<T, L = LastOf13150<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13150<TuplifyUnion13150<Exclude<T, L>>, L>;

type DeepPartial13150<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13150<T[P]> }
  : T;

type Paths13150<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13150<K, Paths13150<T[K], Prev13150[D]>> : never }[keyof T]
  : never;

type Prev13150 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13150<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13150 {
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

type ConfigPaths13150 = Paths13150<NestedConfig13150>;

interface HeavyProps13150 {
  config: DeepPartial13150<NestedConfig13150>;
  path?: ConfigPaths13150;
}

const HeavyComponent13150 = memo(function HeavyComponent13150({ config }: HeavyProps13150) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13150) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13150 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13150: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13150.displayName = 'HeavyComponent13150';
export default HeavyComponent13150;
