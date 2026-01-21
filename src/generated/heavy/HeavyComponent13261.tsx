'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13261<T> = T extends (infer U)[]
  ? DeepReadonlyArray13261<U>
  : T extends object
  ? DeepReadonlyObject13261<T>
  : T;

interface DeepReadonlyArray13261<T> extends ReadonlyArray<DeepReadonly13261<T>> {}

type DeepReadonlyObject13261<T> = {
  readonly [P in keyof T]: DeepReadonly13261<T[P]>;
};

type UnionToIntersection13261<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13261<T> = UnionToIntersection13261<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13261<T extends unknown[], V> = [...T, V];

type TuplifyUnion13261<T, L = LastOf13261<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13261<TuplifyUnion13261<Exclude<T, L>>, L>;

type DeepPartial13261<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13261<T[P]> }
  : T;

type Paths13261<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13261<K, Paths13261<T[K], Prev13261[D]>> : never }[keyof T]
  : never;

type Prev13261 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13261<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13261 {
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

type ConfigPaths13261 = Paths13261<NestedConfig13261>;

interface HeavyProps13261 {
  config: DeepPartial13261<NestedConfig13261>;
  path?: ConfigPaths13261;
}

const HeavyComponent13261 = memo(function HeavyComponent13261({ config }: HeavyProps13261) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13261) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13261 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13261: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13261.displayName = 'HeavyComponent13261';
export default HeavyComponent13261;
