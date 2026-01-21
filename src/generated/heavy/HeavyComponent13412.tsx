'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13412<T> = T extends (infer U)[]
  ? DeepReadonlyArray13412<U>
  : T extends object
  ? DeepReadonlyObject13412<T>
  : T;

interface DeepReadonlyArray13412<T> extends ReadonlyArray<DeepReadonly13412<T>> {}

type DeepReadonlyObject13412<T> = {
  readonly [P in keyof T]: DeepReadonly13412<T[P]>;
};

type UnionToIntersection13412<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13412<T> = UnionToIntersection13412<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13412<T extends unknown[], V> = [...T, V];

type TuplifyUnion13412<T, L = LastOf13412<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13412<TuplifyUnion13412<Exclude<T, L>>, L>;

type DeepPartial13412<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13412<T[P]> }
  : T;

type Paths13412<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13412<K, Paths13412<T[K], Prev13412[D]>> : never }[keyof T]
  : never;

type Prev13412 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13412<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13412 {
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

type ConfigPaths13412 = Paths13412<NestedConfig13412>;

interface HeavyProps13412 {
  config: DeepPartial13412<NestedConfig13412>;
  path?: ConfigPaths13412;
}

const HeavyComponent13412 = memo(function HeavyComponent13412({ config }: HeavyProps13412) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13412) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13412 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13412: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13412.displayName = 'HeavyComponent13412';
export default HeavyComponent13412;
