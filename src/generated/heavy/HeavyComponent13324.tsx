'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13324<T> = T extends (infer U)[]
  ? DeepReadonlyArray13324<U>
  : T extends object
  ? DeepReadonlyObject13324<T>
  : T;

interface DeepReadonlyArray13324<T> extends ReadonlyArray<DeepReadonly13324<T>> {}

type DeepReadonlyObject13324<T> = {
  readonly [P in keyof T]: DeepReadonly13324<T[P]>;
};

type UnionToIntersection13324<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13324<T> = UnionToIntersection13324<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13324<T extends unknown[], V> = [...T, V];

type TuplifyUnion13324<T, L = LastOf13324<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13324<TuplifyUnion13324<Exclude<T, L>>, L>;

type DeepPartial13324<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13324<T[P]> }
  : T;

type Paths13324<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13324<K, Paths13324<T[K], Prev13324[D]>> : never }[keyof T]
  : never;

type Prev13324 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13324<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13324 {
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

type ConfigPaths13324 = Paths13324<NestedConfig13324>;

interface HeavyProps13324 {
  config: DeepPartial13324<NestedConfig13324>;
  path?: ConfigPaths13324;
}

const HeavyComponent13324 = memo(function HeavyComponent13324({ config }: HeavyProps13324) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13324) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13324 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13324: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13324.displayName = 'HeavyComponent13324';
export default HeavyComponent13324;
