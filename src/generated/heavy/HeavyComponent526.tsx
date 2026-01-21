'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly526<T> = T extends (infer U)[]
  ? DeepReadonlyArray526<U>
  : T extends object
  ? DeepReadonlyObject526<T>
  : T;

interface DeepReadonlyArray526<T> extends ReadonlyArray<DeepReadonly526<T>> {}

type DeepReadonlyObject526<T> = {
  readonly [P in keyof T]: DeepReadonly526<T[P]>;
};

type UnionToIntersection526<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf526<T> = UnionToIntersection526<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push526<T extends unknown[], V> = [...T, V];

type TuplifyUnion526<T, L = LastOf526<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push526<TuplifyUnion526<Exclude<T, L>>, L>;

type DeepPartial526<T> = T extends object
  ? { [P in keyof T]?: DeepPartial526<T[P]> }
  : T;

type Paths526<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join526<K, Paths526<T[K], Prev526[D]>> : never }[keyof T]
  : never;

type Prev526 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join526<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig526 {
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

type ConfigPaths526 = Paths526<NestedConfig526>;

interface HeavyProps526 {
  config: DeepPartial526<NestedConfig526>;
  path?: ConfigPaths526;
}

const HeavyComponent526 = memo(function HeavyComponent526({ config }: HeavyProps526) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 526) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-526 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H526: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent526.displayName = 'HeavyComponent526';
export default HeavyComponent526;
