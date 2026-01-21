'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13153<T> = T extends (infer U)[]
  ? DeepReadonlyArray13153<U>
  : T extends object
  ? DeepReadonlyObject13153<T>
  : T;

interface DeepReadonlyArray13153<T> extends ReadonlyArray<DeepReadonly13153<T>> {}

type DeepReadonlyObject13153<T> = {
  readonly [P in keyof T]: DeepReadonly13153<T[P]>;
};

type UnionToIntersection13153<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13153<T> = UnionToIntersection13153<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13153<T extends unknown[], V> = [...T, V];

type TuplifyUnion13153<T, L = LastOf13153<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13153<TuplifyUnion13153<Exclude<T, L>>, L>;

type DeepPartial13153<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13153<T[P]> }
  : T;

type Paths13153<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13153<K, Paths13153<T[K], Prev13153[D]>> : never }[keyof T]
  : never;

type Prev13153 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13153<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13153 {
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

type ConfigPaths13153 = Paths13153<NestedConfig13153>;

interface HeavyProps13153 {
  config: DeepPartial13153<NestedConfig13153>;
  path?: ConfigPaths13153;
}

const HeavyComponent13153 = memo(function HeavyComponent13153({ config }: HeavyProps13153) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13153) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13153 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13153: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13153.displayName = 'HeavyComponent13153';
export default HeavyComponent13153;
