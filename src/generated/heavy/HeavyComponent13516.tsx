'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13516<T> = T extends (infer U)[]
  ? DeepReadonlyArray13516<U>
  : T extends object
  ? DeepReadonlyObject13516<T>
  : T;

interface DeepReadonlyArray13516<T> extends ReadonlyArray<DeepReadonly13516<T>> {}

type DeepReadonlyObject13516<T> = {
  readonly [P in keyof T]: DeepReadonly13516<T[P]>;
};

type UnionToIntersection13516<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13516<T> = UnionToIntersection13516<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13516<T extends unknown[], V> = [...T, V];

type TuplifyUnion13516<T, L = LastOf13516<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13516<TuplifyUnion13516<Exclude<T, L>>, L>;

type DeepPartial13516<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13516<T[P]> }
  : T;

type Paths13516<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13516<K, Paths13516<T[K], Prev13516[D]>> : never }[keyof T]
  : never;

type Prev13516 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13516<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13516 {
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

type ConfigPaths13516 = Paths13516<NestedConfig13516>;

interface HeavyProps13516 {
  config: DeepPartial13516<NestedConfig13516>;
  path?: ConfigPaths13516;
}

const HeavyComponent13516 = memo(function HeavyComponent13516({ config }: HeavyProps13516) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13516) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13516 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13516: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13516.displayName = 'HeavyComponent13516';
export default HeavyComponent13516;
