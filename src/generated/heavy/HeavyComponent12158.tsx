'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12158<T> = T extends (infer U)[]
  ? DeepReadonlyArray12158<U>
  : T extends object
  ? DeepReadonlyObject12158<T>
  : T;

interface DeepReadonlyArray12158<T> extends ReadonlyArray<DeepReadonly12158<T>> {}

type DeepReadonlyObject12158<T> = {
  readonly [P in keyof T]: DeepReadonly12158<T[P]>;
};

type UnionToIntersection12158<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12158<T> = UnionToIntersection12158<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12158<T extends unknown[], V> = [...T, V];

type TuplifyUnion12158<T, L = LastOf12158<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12158<TuplifyUnion12158<Exclude<T, L>>, L>;

type DeepPartial12158<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12158<T[P]> }
  : T;

type Paths12158<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12158<K, Paths12158<T[K], Prev12158[D]>> : never }[keyof T]
  : never;

type Prev12158 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12158<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12158 {
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

type ConfigPaths12158 = Paths12158<NestedConfig12158>;

interface HeavyProps12158 {
  config: DeepPartial12158<NestedConfig12158>;
  path?: ConfigPaths12158;
}

const HeavyComponent12158 = memo(function HeavyComponent12158({ config }: HeavyProps12158) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12158) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12158 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12158: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12158.displayName = 'HeavyComponent12158';
export default HeavyComponent12158;
