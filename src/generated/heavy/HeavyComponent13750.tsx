'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13750<T> = T extends (infer U)[]
  ? DeepReadonlyArray13750<U>
  : T extends object
  ? DeepReadonlyObject13750<T>
  : T;

interface DeepReadonlyArray13750<T> extends ReadonlyArray<DeepReadonly13750<T>> {}

type DeepReadonlyObject13750<T> = {
  readonly [P in keyof T]: DeepReadonly13750<T[P]>;
};

type UnionToIntersection13750<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13750<T> = UnionToIntersection13750<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13750<T extends unknown[], V> = [...T, V];

type TuplifyUnion13750<T, L = LastOf13750<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13750<TuplifyUnion13750<Exclude<T, L>>, L>;

type DeepPartial13750<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13750<T[P]> }
  : T;

type Paths13750<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13750<K, Paths13750<T[K], Prev13750[D]>> : never }[keyof T]
  : never;

type Prev13750 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13750<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13750 {
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

type ConfigPaths13750 = Paths13750<NestedConfig13750>;

interface HeavyProps13750 {
  config: DeepPartial13750<NestedConfig13750>;
  path?: ConfigPaths13750;
}

const HeavyComponent13750 = memo(function HeavyComponent13750({ config }: HeavyProps13750) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13750) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13750 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13750: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13750.displayName = 'HeavyComponent13750';
export default HeavyComponent13750;
