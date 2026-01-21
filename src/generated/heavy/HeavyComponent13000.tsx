'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13000<T> = T extends (infer U)[]
  ? DeepReadonlyArray13000<U>
  : T extends object
  ? DeepReadonlyObject13000<T>
  : T;

interface DeepReadonlyArray13000<T> extends ReadonlyArray<DeepReadonly13000<T>> {}

type DeepReadonlyObject13000<T> = {
  readonly [P in keyof T]: DeepReadonly13000<T[P]>;
};

type UnionToIntersection13000<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13000<T> = UnionToIntersection13000<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13000<T extends unknown[], V> = [...T, V];

type TuplifyUnion13000<T, L = LastOf13000<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13000<TuplifyUnion13000<Exclude<T, L>>, L>;

type DeepPartial13000<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13000<T[P]> }
  : T;

type Paths13000<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13000<K, Paths13000<T[K], Prev13000[D]>> : never }[keyof T]
  : never;

type Prev13000 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13000<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13000 {
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

type ConfigPaths13000 = Paths13000<NestedConfig13000>;

interface HeavyProps13000 {
  config: DeepPartial13000<NestedConfig13000>;
  path?: ConfigPaths13000;
}

const HeavyComponent13000 = memo(function HeavyComponent13000({ config }: HeavyProps13000) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13000) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13000 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13000: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13000.displayName = 'HeavyComponent13000';
export default HeavyComponent13000;
