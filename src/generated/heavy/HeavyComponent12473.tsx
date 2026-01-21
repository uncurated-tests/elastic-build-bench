'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12473<T> = T extends (infer U)[]
  ? DeepReadonlyArray12473<U>
  : T extends object
  ? DeepReadonlyObject12473<T>
  : T;

interface DeepReadonlyArray12473<T> extends ReadonlyArray<DeepReadonly12473<T>> {}

type DeepReadonlyObject12473<T> = {
  readonly [P in keyof T]: DeepReadonly12473<T[P]>;
};

type UnionToIntersection12473<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12473<T> = UnionToIntersection12473<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12473<T extends unknown[], V> = [...T, V];

type TuplifyUnion12473<T, L = LastOf12473<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12473<TuplifyUnion12473<Exclude<T, L>>, L>;

type DeepPartial12473<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12473<T[P]> }
  : T;

type Paths12473<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12473<K, Paths12473<T[K], Prev12473[D]>> : never }[keyof T]
  : never;

type Prev12473 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12473<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12473 {
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

type ConfigPaths12473 = Paths12473<NestedConfig12473>;

interface HeavyProps12473 {
  config: DeepPartial12473<NestedConfig12473>;
  path?: ConfigPaths12473;
}

const HeavyComponent12473 = memo(function HeavyComponent12473({ config }: HeavyProps12473) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12473) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12473 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12473: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12473.displayName = 'HeavyComponent12473';
export default HeavyComponent12473;
