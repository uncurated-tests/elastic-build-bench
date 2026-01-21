'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13183<T> = T extends (infer U)[]
  ? DeepReadonlyArray13183<U>
  : T extends object
  ? DeepReadonlyObject13183<T>
  : T;

interface DeepReadonlyArray13183<T> extends ReadonlyArray<DeepReadonly13183<T>> {}

type DeepReadonlyObject13183<T> = {
  readonly [P in keyof T]: DeepReadonly13183<T[P]>;
};

type UnionToIntersection13183<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13183<T> = UnionToIntersection13183<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13183<T extends unknown[], V> = [...T, V];

type TuplifyUnion13183<T, L = LastOf13183<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13183<TuplifyUnion13183<Exclude<T, L>>, L>;

type DeepPartial13183<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13183<T[P]> }
  : T;

type Paths13183<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13183<K, Paths13183<T[K], Prev13183[D]>> : never }[keyof T]
  : never;

type Prev13183 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13183<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13183 {
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

type ConfigPaths13183 = Paths13183<NestedConfig13183>;

interface HeavyProps13183 {
  config: DeepPartial13183<NestedConfig13183>;
  path?: ConfigPaths13183;
}

const HeavyComponent13183 = memo(function HeavyComponent13183({ config }: HeavyProps13183) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13183) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13183 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13183: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13183.displayName = 'HeavyComponent13183';
export default HeavyComponent13183;
