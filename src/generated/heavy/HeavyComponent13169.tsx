'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13169<T> = T extends (infer U)[]
  ? DeepReadonlyArray13169<U>
  : T extends object
  ? DeepReadonlyObject13169<T>
  : T;

interface DeepReadonlyArray13169<T> extends ReadonlyArray<DeepReadonly13169<T>> {}

type DeepReadonlyObject13169<T> = {
  readonly [P in keyof T]: DeepReadonly13169<T[P]>;
};

type UnionToIntersection13169<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13169<T> = UnionToIntersection13169<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13169<T extends unknown[], V> = [...T, V];

type TuplifyUnion13169<T, L = LastOf13169<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13169<TuplifyUnion13169<Exclude<T, L>>, L>;

type DeepPartial13169<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13169<T[P]> }
  : T;

type Paths13169<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13169<K, Paths13169<T[K], Prev13169[D]>> : never }[keyof T]
  : never;

type Prev13169 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13169<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13169 {
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

type ConfigPaths13169 = Paths13169<NestedConfig13169>;

interface HeavyProps13169 {
  config: DeepPartial13169<NestedConfig13169>;
  path?: ConfigPaths13169;
}

const HeavyComponent13169 = memo(function HeavyComponent13169({ config }: HeavyProps13169) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13169) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13169 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13169: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13169.displayName = 'HeavyComponent13169';
export default HeavyComponent13169;
