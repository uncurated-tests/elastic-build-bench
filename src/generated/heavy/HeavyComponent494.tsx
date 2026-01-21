'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly494<T> = T extends (infer U)[]
  ? DeepReadonlyArray494<U>
  : T extends object
  ? DeepReadonlyObject494<T>
  : T;

interface DeepReadonlyArray494<T> extends ReadonlyArray<DeepReadonly494<T>> {}

type DeepReadonlyObject494<T> = {
  readonly [P in keyof T]: DeepReadonly494<T[P]>;
};

type UnionToIntersection494<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf494<T> = UnionToIntersection494<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push494<T extends unknown[], V> = [...T, V];

type TuplifyUnion494<T, L = LastOf494<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push494<TuplifyUnion494<Exclude<T, L>>, L>;

type DeepPartial494<T> = T extends object
  ? { [P in keyof T]?: DeepPartial494<T[P]> }
  : T;

type Paths494<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join494<K, Paths494<T[K], Prev494[D]>> : never }[keyof T]
  : never;

type Prev494 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join494<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig494 {
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

type ConfigPaths494 = Paths494<NestedConfig494>;

interface HeavyProps494 {
  config: DeepPartial494<NestedConfig494>;
  path?: ConfigPaths494;
}

const HeavyComponent494 = memo(function HeavyComponent494({ config }: HeavyProps494) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 494) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-494 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H494: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent494.displayName = 'HeavyComponent494';
export default HeavyComponent494;
