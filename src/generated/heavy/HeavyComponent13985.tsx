'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13985<T> = T extends (infer U)[]
  ? DeepReadonlyArray13985<U>
  : T extends object
  ? DeepReadonlyObject13985<T>
  : T;

interface DeepReadonlyArray13985<T> extends ReadonlyArray<DeepReadonly13985<T>> {}

type DeepReadonlyObject13985<T> = {
  readonly [P in keyof T]: DeepReadonly13985<T[P]>;
};

type UnionToIntersection13985<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13985<T> = UnionToIntersection13985<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13985<T extends unknown[], V> = [...T, V];

type TuplifyUnion13985<T, L = LastOf13985<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13985<TuplifyUnion13985<Exclude<T, L>>, L>;

type DeepPartial13985<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13985<T[P]> }
  : T;

type Paths13985<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13985<K, Paths13985<T[K], Prev13985[D]>> : never }[keyof T]
  : never;

type Prev13985 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13985<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13985 {
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

type ConfigPaths13985 = Paths13985<NestedConfig13985>;

interface HeavyProps13985 {
  config: DeepPartial13985<NestedConfig13985>;
  path?: ConfigPaths13985;
}

const HeavyComponent13985 = memo(function HeavyComponent13985({ config }: HeavyProps13985) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13985) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13985 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13985: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13985.displayName = 'HeavyComponent13985';
export default HeavyComponent13985;
