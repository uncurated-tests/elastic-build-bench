'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13032<T> = T extends (infer U)[]
  ? DeepReadonlyArray13032<U>
  : T extends object
  ? DeepReadonlyObject13032<T>
  : T;

interface DeepReadonlyArray13032<T> extends ReadonlyArray<DeepReadonly13032<T>> {}

type DeepReadonlyObject13032<T> = {
  readonly [P in keyof T]: DeepReadonly13032<T[P]>;
};

type UnionToIntersection13032<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13032<T> = UnionToIntersection13032<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13032<T extends unknown[], V> = [...T, V];

type TuplifyUnion13032<T, L = LastOf13032<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13032<TuplifyUnion13032<Exclude<T, L>>, L>;

type DeepPartial13032<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13032<T[P]> }
  : T;

type Paths13032<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13032<K, Paths13032<T[K], Prev13032[D]>> : never }[keyof T]
  : never;

type Prev13032 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13032<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13032 {
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

type ConfigPaths13032 = Paths13032<NestedConfig13032>;

interface HeavyProps13032 {
  config: DeepPartial13032<NestedConfig13032>;
  path?: ConfigPaths13032;
}

const HeavyComponent13032 = memo(function HeavyComponent13032({ config }: HeavyProps13032) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13032) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13032 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13032: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13032.displayName = 'HeavyComponent13032';
export default HeavyComponent13032;
