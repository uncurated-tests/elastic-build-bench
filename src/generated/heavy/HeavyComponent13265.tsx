'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13265<T> = T extends (infer U)[]
  ? DeepReadonlyArray13265<U>
  : T extends object
  ? DeepReadonlyObject13265<T>
  : T;

interface DeepReadonlyArray13265<T> extends ReadonlyArray<DeepReadonly13265<T>> {}

type DeepReadonlyObject13265<T> = {
  readonly [P in keyof T]: DeepReadonly13265<T[P]>;
};

type UnionToIntersection13265<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13265<T> = UnionToIntersection13265<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13265<T extends unknown[], V> = [...T, V];

type TuplifyUnion13265<T, L = LastOf13265<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13265<TuplifyUnion13265<Exclude<T, L>>, L>;

type DeepPartial13265<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13265<T[P]> }
  : T;

type Paths13265<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13265<K, Paths13265<T[K], Prev13265[D]>> : never }[keyof T]
  : never;

type Prev13265 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13265<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13265 {
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

type ConfigPaths13265 = Paths13265<NestedConfig13265>;

interface HeavyProps13265 {
  config: DeepPartial13265<NestedConfig13265>;
  path?: ConfigPaths13265;
}

const HeavyComponent13265 = memo(function HeavyComponent13265({ config }: HeavyProps13265) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13265) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13265 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13265: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13265.displayName = 'HeavyComponent13265';
export default HeavyComponent13265;
