'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13222<T> = T extends (infer U)[]
  ? DeepReadonlyArray13222<U>
  : T extends object
  ? DeepReadonlyObject13222<T>
  : T;

interface DeepReadonlyArray13222<T> extends ReadonlyArray<DeepReadonly13222<T>> {}

type DeepReadonlyObject13222<T> = {
  readonly [P in keyof T]: DeepReadonly13222<T[P]>;
};

type UnionToIntersection13222<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13222<T> = UnionToIntersection13222<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13222<T extends unknown[], V> = [...T, V];

type TuplifyUnion13222<T, L = LastOf13222<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13222<TuplifyUnion13222<Exclude<T, L>>, L>;

type DeepPartial13222<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13222<T[P]> }
  : T;

type Paths13222<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13222<K, Paths13222<T[K], Prev13222[D]>> : never }[keyof T]
  : never;

type Prev13222 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13222<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13222 {
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

type ConfigPaths13222 = Paths13222<NestedConfig13222>;

interface HeavyProps13222 {
  config: DeepPartial13222<NestedConfig13222>;
  path?: ConfigPaths13222;
}

const HeavyComponent13222 = memo(function HeavyComponent13222({ config }: HeavyProps13222) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13222) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13222 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13222: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13222.displayName = 'HeavyComponent13222';
export default HeavyComponent13222;
