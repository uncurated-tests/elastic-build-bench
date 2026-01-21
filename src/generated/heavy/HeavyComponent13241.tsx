'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13241<T> = T extends (infer U)[]
  ? DeepReadonlyArray13241<U>
  : T extends object
  ? DeepReadonlyObject13241<T>
  : T;

interface DeepReadonlyArray13241<T> extends ReadonlyArray<DeepReadonly13241<T>> {}

type DeepReadonlyObject13241<T> = {
  readonly [P in keyof T]: DeepReadonly13241<T[P]>;
};

type UnionToIntersection13241<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13241<T> = UnionToIntersection13241<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13241<T extends unknown[], V> = [...T, V];

type TuplifyUnion13241<T, L = LastOf13241<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13241<TuplifyUnion13241<Exclude<T, L>>, L>;

type DeepPartial13241<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13241<T[P]> }
  : T;

type Paths13241<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13241<K, Paths13241<T[K], Prev13241[D]>> : never }[keyof T]
  : never;

type Prev13241 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13241<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13241 {
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

type ConfigPaths13241 = Paths13241<NestedConfig13241>;

interface HeavyProps13241 {
  config: DeepPartial13241<NestedConfig13241>;
  path?: ConfigPaths13241;
}

const HeavyComponent13241 = memo(function HeavyComponent13241({ config }: HeavyProps13241) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13241) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13241 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13241: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13241.displayName = 'HeavyComponent13241';
export default HeavyComponent13241;
