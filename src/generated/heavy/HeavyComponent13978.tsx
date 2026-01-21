'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13978<T> = T extends (infer U)[]
  ? DeepReadonlyArray13978<U>
  : T extends object
  ? DeepReadonlyObject13978<T>
  : T;

interface DeepReadonlyArray13978<T> extends ReadonlyArray<DeepReadonly13978<T>> {}

type DeepReadonlyObject13978<T> = {
  readonly [P in keyof T]: DeepReadonly13978<T[P]>;
};

type UnionToIntersection13978<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13978<T> = UnionToIntersection13978<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13978<T extends unknown[], V> = [...T, V];

type TuplifyUnion13978<T, L = LastOf13978<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13978<TuplifyUnion13978<Exclude<T, L>>, L>;

type DeepPartial13978<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13978<T[P]> }
  : T;

type Paths13978<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13978<K, Paths13978<T[K], Prev13978[D]>> : never }[keyof T]
  : never;

type Prev13978 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13978<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13978 {
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

type ConfigPaths13978 = Paths13978<NestedConfig13978>;

interface HeavyProps13978 {
  config: DeepPartial13978<NestedConfig13978>;
  path?: ConfigPaths13978;
}

const HeavyComponent13978 = memo(function HeavyComponent13978({ config }: HeavyProps13978) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13978) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13978 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13978: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13978.displayName = 'HeavyComponent13978';
export default HeavyComponent13978;
