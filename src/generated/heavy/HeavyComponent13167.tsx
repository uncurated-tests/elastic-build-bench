'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13167<T> = T extends (infer U)[]
  ? DeepReadonlyArray13167<U>
  : T extends object
  ? DeepReadonlyObject13167<T>
  : T;

interface DeepReadonlyArray13167<T> extends ReadonlyArray<DeepReadonly13167<T>> {}

type DeepReadonlyObject13167<T> = {
  readonly [P in keyof T]: DeepReadonly13167<T[P]>;
};

type UnionToIntersection13167<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13167<T> = UnionToIntersection13167<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13167<T extends unknown[], V> = [...T, V];

type TuplifyUnion13167<T, L = LastOf13167<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13167<TuplifyUnion13167<Exclude<T, L>>, L>;

type DeepPartial13167<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13167<T[P]> }
  : T;

type Paths13167<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13167<K, Paths13167<T[K], Prev13167[D]>> : never }[keyof T]
  : never;

type Prev13167 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13167<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13167 {
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

type ConfigPaths13167 = Paths13167<NestedConfig13167>;

interface HeavyProps13167 {
  config: DeepPartial13167<NestedConfig13167>;
  path?: ConfigPaths13167;
}

const HeavyComponent13167 = memo(function HeavyComponent13167({ config }: HeavyProps13167) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13167) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13167 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13167: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13167.displayName = 'HeavyComponent13167';
export default HeavyComponent13167;
