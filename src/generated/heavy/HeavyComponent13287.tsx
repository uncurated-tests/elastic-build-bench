'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13287<T> = T extends (infer U)[]
  ? DeepReadonlyArray13287<U>
  : T extends object
  ? DeepReadonlyObject13287<T>
  : T;

interface DeepReadonlyArray13287<T> extends ReadonlyArray<DeepReadonly13287<T>> {}

type DeepReadonlyObject13287<T> = {
  readonly [P in keyof T]: DeepReadonly13287<T[P]>;
};

type UnionToIntersection13287<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13287<T> = UnionToIntersection13287<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13287<T extends unknown[], V> = [...T, V];

type TuplifyUnion13287<T, L = LastOf13287<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13287<TuplifyUnion13287<Exclude<T, L>>, L>;

type DeepPartial13287<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13287<T[P]> }
  : T;

type Paths13287<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13287<K, Paths13287<T[K], Prev13287[D]>> : never }[keyof T]
  : never;

type Prev13287 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13287<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13287 {
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

type ConfigPaths13287 = Paths13287<NestedConfig13287>;

interface HeavyProps13287 {
  config: DeepPartial13287<NestedConfig13287>;
  path?: ConfigPaths13287;
}

const HeavyComponent13287 = memo(function HeavyComponent13287({ config }: HeavyProps13287) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13287) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13287 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13287: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13287.displayName = 'HeavyComponent13287';
export default HeavyComponent13287;
