'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13803<T> = T extends (infer U)[]
  ? DeepReadonlyArray13803<U>
  : T extends object
  ? DeepReadonlyObject13803<T>
  : T;

interface DeepReadonlyArray13803<T> extends ReadonlyArray<DeepReadonly13803<T>> {}

type DeepReadonlyObject13803<T> = {
  readonly [P in keyof T]: DeepReadonly13803<T[P]>;
};

type UnionToIntersection13803<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13803<T> = UnionToIntersection13803<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13803<T extends unknown[], V> = [...T, V];

type TuplifyUnion13803<T, L = LastOf13803<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13803<TuplifyUnion13803<Exclude<T, L>>, L>;

type DeepPartial13803<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13803<T[P]> }
  : T;

type Paths13803<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13803<K, Paths13803<T[K], Prev13803[D]>> : never }[keyof T]
  : never;

type Prev13803 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13803<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13803 {
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

type ConfigPaths13803 = Paths13803<NestedConfig13803>;

interface HeavyProps13803 {
  config: DeepPartial13803<NestedConfig13803>;
  path?: ConfigPaths13803;
}

const HeavyComponent13803 = memo(function HeavyComponent13803({ config }: HeavyProps13803) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13803) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13803 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13803: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13803.displayName = 'HeavyComponent13803';
export default HeavyComponent13803;
