'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly0<T> = T extends (infer U)[]
  ? DeepReadonlyArray0<U>
  : T extends object
  ? DeepReadonlyObject0<T>
  : T;

interface DeepReadonlyArray0<T> extends ReadonlyArray<DeepReadonly0<T>> {}

type DeepReadonlyObject0<T> = {
  readonly [P in keyof T]: DeepReadonly0<T[P]>;
};

type UnionToIntersection0<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf0<T> = UnionToIntersection0<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push0<T extends unknown[], V> = [...T, V];

type TuplifyUnion0<T, L = LastOf0<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push0<TuplifyUnion0<Exclude<T, L>>, L>;

type DeepPartial0<T> = T extends object
  ? { [P in keyof T]?: DeepPartial0<T[P]> }
  : T;

type Paths0<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join0<K, Paths0<T[K], Prev0[D]>> : never }[keyof T]
  : never;

type Prev0 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join0<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig0 {
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

type ConfigPaths0 = Paths0<NestedConfig0>;

interface HeavyProps0 {
  config: DeepPartial0<NestedConfig0>;
  path?: ConfigPaths0;
}

const HeavyComponent0 = memo(function HeavyComponent0({ config }: HeavyProps0) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 0) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-0 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H0: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent0.displayName = 'HeavyComponent0';
export default HeavyComponent0;
