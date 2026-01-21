'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13494<T> = T extends (infer U)[]
  ? DeepReadonlyArray13494<U>
  : T extends object
  ? DeepReadonlyObject13494<T>
  : T;

interface DeepReadonlyArray13494<T> extends ReadonlyArray<DeepReadonly13494<T>> {}

type DeepReadonlyObject13494<T> = {
  readonly [P in keyof T]: DeepReadonly13494<T[P]>;
};

type UnionToIntersection13494<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13494<T> = UnionToIntersection13494<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13494<T extends unknown[], V> = [...T, V];

type TuplifyUnion13494<T, L = LastOf13494<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13494<TuplifyUnion13494<Exclude<T, L>>, L>;

type DeepPartial13494<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13494<T[P]> }
  : T;

type Paths13494<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13494<K, Paths13494<T[K], Prev13494[D]>> : never }[keyof T]
  : never;

type Prev13494 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13494<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13494 {
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

type ConfigPaths13494 = Paths13494<NestedConfig13494>;

interface HeavyProps13494 {
  config: DeepPartial13494<NestedConfig13494>;
  path?: ConfigPaths13494;
}

const HeavyComponent13494 = memo(function HeavyComponent13494({ config }: HeavyProps13494) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13494) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13494 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13494: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13494.displayName = 'HeavyComponent13494';
export default HeavyComponent13494;
