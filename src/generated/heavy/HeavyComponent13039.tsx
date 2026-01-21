'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13039<T> = T extends (infer U)[]
  ? DeepReadonlyArray13039<U>
  : T extends object
  ? DeepReadonlyObject13039<T>
  : T;

interface DeepReadonlyArray13039<T> extends ReadonlyArray<DeepReadonly13039<T>> {}

type DeepReadonlyObject13039<T> = {
  readonly [P in keyof T]: DeepReadonly13039<T[P]>;
};

type UnionToIntersection13039<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13039<T> = UnionToIntersection13039<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13039<T extends unknown[], V> = [...T, V];

type TuplifyUnion13039<T, L = LastOf13039<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13039<TuplifyUnion13039<Exclude<T, L>>, L>;

type DeepPartial13039<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13039<T[P]> }
  : T;

type Paths13039<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13039<K, Paths13039<T[K], Prev13039[D]>> : never }[keyof T]
  : never;

type Prev13039 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13039<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13039 {
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

type ConfigPaths13039 = Paths13039<NestedConfig13039>;

interface HeavyProps13039 {
  config: DeepPartial13039<NestedConfig13039>;
  path?: ConfigPaths13039;
}

const HeavyComponent13039 = memo(function HeavyComponent13039({ config }: HeavyProps13039) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13039) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13039 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13039: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13039.displayName = 'HeavyComponent13039';
export default HeavyComponent13039;
