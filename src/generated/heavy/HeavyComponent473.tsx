'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly473<T> = T extends (infer U)[]
  ? DeepReadonlyArray473<U>
  : T extends object
  ? DeepReadonlyObject473<T>
  : T;

interface DeepReadonlyArray473<T> extends ReadonlyArray<DeepReadonly473<T>> {}

type DeepReadonlyObject473<T> = {
  readonly [P in keyof T]: DeepReadonly473<T[P]>;
};

type UnionToIntersection473<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf473<T> = UnionToIntersection473<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push473<T extends unknown[], V> = [...T, V];

type TuplifyUnion473<T, L = LastOf473<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push473<TuplifyUnion473<Exclude<T, L>>, L>;

type DeepPartial473<T> = T extends object
  ? { [P in keyof T]?: DeepPartial473<T[P]> }
  : T;

type Paths473<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join473<K, Paths473<T[K], Prev473[D]>> : never }[keyof T]
  : never;

type Prev473 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join473<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig473 {
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

type ConfigPaths473 = Paths473<NestedConfig473>;

interface HeavyProps473 {
  config: DeepPartial473<NestedConfig473>;
  path?: ConfigPaths473;
}

const HeavyComponent473 = memo(function HeavyComponent473({ config }: HeavyProps473) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 473) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-473 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H473: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent473.displayName = 'HeavyComponent473';
export default HeavyComponent473;
