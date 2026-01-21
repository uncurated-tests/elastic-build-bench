'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13887<T> = T extends (infer U)[]
  ? DeepReadonlyArray13887<U>
  : T extends object
  ? DeepReadonlyObject13887<T>
  : T;

interface DeepReadonlyArray13887<T> extends ReadonlyArray<DeepReadonly13887<T>> {}

type DeepReadonlyObject13887<T> = {
  readonly [P in keyof T]: DeepReadonly13887<T[P]>;
};

type UnionToIntersection13887<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13887<T> = UnionToIntersection13887<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13887<T extends unknown[], V> = [...T, V];

type TuplifyUnion13887<T, L = LastOf13887<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13887<TuplifyUnion13887<Exclude<T, L>>, L>;

type DeepPartial13887<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13887<T[P]> }
  : T;

type Paths13887<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13887<K, Paths13887<T[K], Prev13887[D]>> : never }[keyof T]
  : never;

type Prev13887 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13887<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13887 {
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

type ConfigPaths13887 = Paths13887<NestedConfig13887>;

interface HeavyProps13887 {
  config: DeepPartial13887<NestedConfig13887>;
  path?: ConfigPaths13887;
}

const HeavyComponent13887 = memo(function HeavyComponent13887({ config }: HeavyProps13887) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13887) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13887 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13887: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13887.displayName = 'HeavyComponent13887';
export default HeavyComponent13887;
