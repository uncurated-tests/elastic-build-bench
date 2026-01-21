'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13603<T> = T extends (infer U)[]
  ? DeepReadonlyArray13603<U>
  : T extends object
  ? DeepReadonlyObject13603<T>
  : T;

interface DeepReadonlyArray13603<T> extends ReadonlyArray<DeepReadonly13603<T>> {}

type DeepReadonlyObject13603<T> = {
  readonly [P in keyof T]: DeepReadonly13603<T[P]>;
};

type UnionToIntersection13603<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13603<T> = UnionToIntersection13603<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13603<T extends unknown[], V> = [...T, V];

type TuplifyUnion13603<T, L = LastOf13603<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13603<TuplifyUnion13603<Exclude<T, L>>, L>;

type DeepPartial13603<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13603<T[P]> }
  : T;

type Paths13603<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13603<K, Paths13603<T[K], Prev13603[D]>> : never }[keyof T]
  : never;

type Prev13603 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13603<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13603 {
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

type ConfigPaths13603 = Paths13603<NestedConfig13603>;

interface HeavyProps13603 {
  config: DeepPartial13603<NestedConfig13603>;
  path?: ConfigPaths13603;
}

const HeavyComponent13603 = memo(function HeavyComponent13603({ config }: HeavyProps13603) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13603) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13603 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13603: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13603.displayName = 'HeavyComponent13603';
export default HeavyComponent13603;
