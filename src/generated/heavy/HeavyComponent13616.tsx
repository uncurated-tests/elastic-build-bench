'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13616<T> = T extends (infer U)[]
  ? DeepReadonlyArray13616<U>
  : T extends object
  ? DeepReadonlyObject13616<T>
  : T;

interface DeepReadonlyArray13616<T> extends ReadonlyArray<DeepReadonly13616<T>> {}

type DeepReadonlyObject13616<T> = {
  readonly [P in keyof T]: DeepReadonly13616<T[P]>;
};

type UnionToIntersection13616<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13616<T> = UnionToIntersection13616<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13616<T extends unknown[], V> = [...T, V];

type TuplifyUnion13616<T, L = LastOf13616<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13616<TuplifyUnion13616<Exclude<T, L>>, L>;

type DeepPartial13616<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13616<T[P]> }
  : T;

type Paths13616<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13616<K, Paths13616<T[K], Prev13616[D]>> : never }[keyof T]
  : never;

type Prev13616 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13616<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13616 {
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

type ConfigPaths13616 = Paths13616<NestedConfig13616>;

interface HeavyProps13616 {
  config: DeepPartial13616<NestedConfig13616>;
  path?: ConfigPaths13616;
}

const HeavyComponent13616 = memo(function HeavyComponent13616({ config }: HeavyProps13616) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13616) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13616 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13616: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13616.displayName = 'HeavyComponent13616';
export default HeavyComponent13616;
