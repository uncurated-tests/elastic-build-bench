'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13888<T> = T extends (infer U)[]
  ? DeepReadonlyArray13888<U>
  : T extends object
  ? DeepReadonlyObject13888<T>
  : T;

interface DeepReadonlyArray13888<T> extends ReadonlyArray<DeepReadonly13888<T>> {}

type DeepReadonlyObject13888<T> = {
  readonly [P in keyof T]: DeepReadonly13888<T[P]>;
};

type UnionToIntersection13888<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13888<T> = UnionToIntersection13888<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13888<T extends unknown[], V> = [...T, V];

type TuplifyUnion13888<T, L = LastOf13888<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13888<TuplifyUnion13888<Exclude<T, L>>, L>;

type DeepPartial13888<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13888<T[P]> }
  : T;

type Paths13888<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13888<K, Paths13888<T[K], Prev13888[D]>> : never }[keyof T]
  : never;

type Prev13888 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13888<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13888 {
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

type ConfigPaths13888 = Paths13888<NestedConfig13888>;

interface HeavyProps13888 {
  config: DeepPartial13888<NestedConfig13888>;
  path?: ConfigPaths13888;
}

const HeavyComponent13888 = memo(function HeavyComponent13888({ config }: HeavyProps13888) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13888) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13888 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13888: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13888.displayName = 'HeavyComponent13888';
export default HeavyComponent13888;
