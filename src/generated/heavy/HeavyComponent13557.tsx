'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13557<T> = T extends (infer U)[]
  ? DeepReadonlyArray13557<U>
  : T extends object
  ? DeepReadonlyObject13557<T>
  : T;

interface DeepReadonlyArray13557<T> extends ReadonlyArray<DeepReadonly13557<T>> {}

type DeepReadonlyObject13557<T> = {
  readonly [P in keyof T]: DeepReadonly13557<T[P]>;
};

type UnionToIntersection13557<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13557<T> = UnionToIntersection13557<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13557<T extends unknown[], V> = [...T, V];

type TuplifyUnion13557<T, L = LastOf13557<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13557<TuplifyUnion13557<Exclude<T, L>>, L>;

type DeepPartial13557<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13557<T[P]> }
  : T;

type Paths13557<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13557<K, Paths13557<T[K], Prev13557[D]>> : never }[keyof T]
  : never;

type Prev13557 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13557<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13557 {
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

type ConfigPaths13557 = Paths13557<NestedConfig13557>;

interface HeavyProps13557 {
  config: DeepPartial13557<NestedConfig13557>;
  path?: ConfigPaths13557;
}

const HeavyComponent13557 = memo(function HeavyComponent13557({ config }: HeavyProps13557) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13557) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13557 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13557: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13557.displayName = 'HeavyComponent13557';
export default HeavyComponent13557;
