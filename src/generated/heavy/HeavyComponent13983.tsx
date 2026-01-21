'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13983<T> = T extends (infer U)[]
  ? DeepReadonlyArray13983<U>
  : T extends object
  ? DeepReadonlyObject13983<T>
  : T;

interface DeepReadonlyArray13983<T> extends ReadonlyArray<DeepReadonly13983<T>> {}

type DeepReadonlyObject13983<T> = {
  readonly [P in keyof T]: DeepReadonly13983<T[P]>;
};

type UnionToIntersection13983<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13983<T> = UnionToIntersection13983<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13983<T extends unknown[], V> = [...T, V];

type TuplifyUnion13983<T, L = LastOf13983<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13983<TuplifyUnion13983<Exclude<T, L>>, L>;

type DeepPartial13983<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13983<T[P]> }
  : T;

type Paths13983<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13983<K, Paths13983<T[K], Prev13983[D]>> : never }[keyof T]
  : never;

type Prev13983 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13983<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13983 {
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

type ConfigPaths13983 = Paths13983<NestedConfig13983>;

interface HeavyProps13983 {
  config: DeepPartial13983<NestedConfig13983>;
  path?: ConfigPaths13983;
}

const HeavyComponent13983 = memo(function HeavyComponent13983({ config }: HeavyProps13983) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13983) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13983 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13983: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13983.displayName = 'HeavyComponent13983';
export default HeavyComponent13983;
