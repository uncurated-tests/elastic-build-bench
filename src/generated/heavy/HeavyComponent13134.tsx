'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13134<T> = T extends (infer U)[]
  ? DeepReadonlyArray13134<U>
  : T extends object
  ? DeepReadonlyObject13134<T>
  : T;

interface DeepReadonlyArray13134<T> extends ReadonlyArray<DeepReadonly13134<T>> {}

type DeepReadonlyObject13134<T> = {
  readonly [P in keyof T]: DeepReadonly13134<T[P]>;
};

type UnionToIntersection13134<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13134<T> = UnionToIntersection13134<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13134<T extends unknown[], V> = [...T, V];

type TuplifyUnion13134<T, L = LastOf13134<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13134<TuplifyUnion13134<Exclude<T, L>>, L>;

type DeepPartial13134<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13134<T[P]> }
  : T;

type Paths13134<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13134<K, Paths13134<T[K], Prev13134[D]>> : never }[keyof T]
  : never;

type Prev13134 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13134<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13134 {
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

type ConfigPaths13134 = Paths13134<NestedConfig13134>;

interface HeavyProps13134 {
  config: DeepPartial13134<NestedConfig13134>;
  path?: ConfigPaths13134;
}

const HeavyComponent13134 = memo(function HeavyComponent13134({ config }: HeavyProps13134) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13134) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13134 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13134: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13134.displayName = 'HeavyComponent13134';
export default HeavyComponent13134;
