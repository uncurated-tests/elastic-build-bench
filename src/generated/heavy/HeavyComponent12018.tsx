'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12018<T> = T extends (infer U)[]
  ? DeepReadonlyArray12018<U>
  : T extends object
  ? DeepReadonlyObject12018<T>
  : T;

interface DeepReadonlyArray12018<T> extends ReadonlyArray<DeepReadonly12018<T>> {}

type DeepReadonlyObject12018<T> = {
  readonly [P in keyof T]: DeepReadonly12018<T[P]>;
};

type UnionToIntersection12018<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12018<T> = UnionToIntersection12018<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12018<T extends unknown[], V> = [...T, V];

type TuplifyUnion12018<T, L = LastOf12018<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12018<TuplifyUnion12018<Exclude<T, L>>, L>;

type DeepPartial12018<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12018<T[P]> }
  : T;

type Paths12018<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12018<K, Paths12018<T[K], Prev12018[D]>> : never }[keyof T]
  : never;

type Prev12018 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12018<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12018 {
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

type ConfigPaths12018 = Paths12018<NestedConfig12018>;

interface HeavyProps12018 {
  config: DeepPartial12018<NestedConfig12018>;
  path?: ConfigPaths12018;
}

const HeavyComponent12018 = memo(function HeavyComponent12018({ config }: HeavyProps12018) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12018) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12018 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12018: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12018.displayName = 'HeavyComponent12018';
export default HeavyComponent12018;
