'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13944<T> = T extends (infer U)[]
  ? DeepReadonlyArray13944<U>
  : T extends object
  ? DeepReadonlyObject13944<T>
  : T;

interface DeepReadonlyArray13944<T> extends ReadonlyArray<DeepReadonly13944<T>> {}

type DeepReadonlyObject13944<T> = {
  readonly [P in keyof T]: DeepReadonly13944<T[P]>;
};

type UnionToIntersection13944<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13944<T> = UnionToIntersection13944<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13944<T extends unknown[], V> = [...T, V];

type TuplifyUnion13944<T, L = LastOf13944<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13944<TuplifyUnion13944<Exclude<T, L>>, L>;

type DeepPartial13944<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13944<T[P]> }
  : T;

type Paths13944<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13944<K, Paths13944<T[K], Prev13944[D]>> : never }[keyof T]
  : never;

type Prev13944 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13944<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13944 {
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

type ConfigPaths13944 = Paths13944<NestedConfig13944>;

interface HeavyProps13944 {
  config: DeepPartial13944<NestedConfig13944>;
  path?: ConfigPaths13944;
}

const HeavyComponent13944 = memo(function HeavyComponent13944({ config }: HeavyProps13944) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13944) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13944 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13944: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13944.displayName = 'HeavyComponent13944';
export default HeavyComponent13944;
