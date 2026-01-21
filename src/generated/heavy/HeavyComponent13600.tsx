'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13600<T> = T extends (infer U)[]
  ? DeepReadonlyArray13600<U>
  : T extends object
  ? DeepReadonlyObject13600<T>
  : T;

interface DeepReadonlyArray13600<T> extends ReadonlyArray<DeepReadonly13600<T>> {}

type DeepReadonlyObject13600<T> = {
  readonly [P in keyof T]: DeepReadonly13600<T[P]>;
};

type UnionToIntersection13600<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13600<T> = UnionToIntersection13600<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13600<T extends unknown[], V> = [...T, V];

type TuplifyUnion13600<T, L = LastOf13600<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13600<TuplifyUnion13600<Exclude<T, L>>, L>;

type DeepPartial13600<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13600<T[P]> }
  : T;

type Paths13600<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13600<K, Paths13600<T[K], Prev13600[D]>> : never }[keyof T]
  : never;

type Prev13600 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13600<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13600 {
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

type ConfigPaths13600 = Paths13600<NestedConfig13600>;

interface HeavyProps13600 {
  config: DeepPartial13600<NestedConfig13600>;
  path?: ConfigPaths13600;
}

const HeavyComponent13600 = memo(function HeavyComponent13600({ config }: HeavyProps13600) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13600) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13600 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13600: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13600.displayName = 'HeavyComponent13600';
export default HeavyComponent13600;
