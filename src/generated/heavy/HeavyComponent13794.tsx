'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13794<T> = T extends (infer U)[]
  ? DeepReadonlyArray13794<U>
  : T extends object
  ? DeepReadonlyObject13794<T>
  : T;

interface DeepReadonlyArray13794<T> extends ReadonlyArray<DeepReadonly13794<T>> {}

type DeepReadonlyObject13794<T> = {
  readonly [P in keyof T]: DeepReadonly13794<T[P]>;
};

type UnionToIntersection13794<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13794<T> = UnionToIntersection13794<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13794<T extends unknown[], V> = [...T, V];

type TuplifyUnion13794<T, L = LastOf13794<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13794<TuplifyUnion13794<Exclude<T, L>>, L>;

type DeepPartial13794<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13794<T[P]> }
  : T;

type Paths13794<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13794<K, Paths13794<T[K], Prev13794[D]>> : never }[keyof T]
  : never;

type Prev13794 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13794<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13794 {
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

type ConfigPaths13794 = Paths13794<NestedConfig13794>;

interface HeavyProps13794 {
  config: DeepPartial13794<NestedConfig13794>;
  path?: ConfigPaths13794;
}

const HeavyComponent13794 = memo(function HeavyComponent13794({ config }: HeavyProps13794) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13794) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13794 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13794: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13794.displayName = 'HeavyComponent13794';
export default HeavyComponent13794;
