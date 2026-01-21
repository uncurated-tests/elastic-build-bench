'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13620<T> = T extends (infer U)[]
  ? DeepReadonlyArray13620<U>
  : T extends object
  ? DeepReadonlyObject13620<T>
  : T;

interface DeepReadonlyArray13620<T> extends ReadonlyArray<DeepReadonly13620<T>> {}

type DeepReadonlyObject13620<T> = {
  readonly [P in keyof T]: DeepReadonly13620<T[P]>;
};

type UnionToIntersection13620<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13620<T> = UnionToIntersection13620<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13620<T extends unknown[], V> = [...T, V];

type TuplifyUnion13620<T, L = LastOf13620<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13620<TuplifyUnion13620<Exclude<T, L>>, L>;

type DeepPartial13620<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13620<T[P]> }
  : T;

type Paths13620<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13620<K, Paths13620<T[K], Prev13620[D]>> : never }[keyof T]
  : never;

type Prev13620 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13620<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13620 {
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

type ConfigPaths13620 = Paths13620<NestedConfig13620>;

interface HeavyProps13620 {
  config: DeepPartial13620<NestedConfig13620>;
  path?: ConfigPaths13620;
}

const HeavyComponent13620 = memo(function HeavyComponent13620({ config }: HeavyProps13620) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13620) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13620 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13620: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13620.displayName = 'HeavyComponent13620';
export default HeavyComponent13620;
