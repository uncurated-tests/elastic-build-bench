'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12427<T> = T extends (infer U)[]
  ? DeepReadonlyArray12427<U>
  : T extends object
  ? DeepReadonlyObject12427<T>
  : T;

interface DeepReadonlyArray12427<T> extends ReadonlyArray<DeepReadonly12427<T>> {}

type DeepReadonlyObject12427<T> = {
  readonly [P in keyof T]: DeepReadonly12427<T[P]>;
};

type UnionToIntersection12427<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12427<T> = UnionToIntersection12427<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12427<T extends unknown[], V> = [...T, V];

type TuplifyUnion12427<T, L = LastOf12427<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12427<TuplifyUnion12427<Exclude<T, L>>, L>;

type DeepPartial12427<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12427<T[P]> }
  : T;

type Paths12427<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12427<K, Paths12427<T[K], Prev12427[D]>> : never }[keyof T]
  : never;

type Prev12427 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12427<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12427 {
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

type ConfigPaths12427 = Paths12427<NestedConfig12427>;

interface HeavyProps12427 {
  config: DeepPartial12427<NestedConfig12427>;
  path?: ConfigPaths12427;
}

const HeavyComponent12427 = memo(function HeavyComponent12427({ config }: HeavyProps12427) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12427) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12427 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12427: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12427.displayName = 'HeavyComponent12427';
export default HeavyComponent12427;
