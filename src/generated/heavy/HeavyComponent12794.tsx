'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12794<T> = T extends (infer U)[]
  ? DeepReadonlyArray12794<U>
  : T extends object
  ? DeepReadonlyObject12794<T>
  : T;

interface DeepReadonlyArray12794<T> extends ReadonlyArray<DeepReadonly12794<T>> {}

type DeepReadonlyObject12794<T> = {
  readonly [P in keyof T]: DeepReadonly12794<T[P]>;
};

type UnionToIntersection12794<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12794<T> = UnionToIntersection12794<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12794<T extends unknown[], V> = [...T, V];

type TuplifyUnion12794<T, L = LastOf12794<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12794<TuplifyUnion12794<Exclude<T, L>>, L>;

type DeepPartial12794<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12794<T[P]> }
  : T;

type Paths12794<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12794<K, Paths12794<T[K], Prev12794[D]>> : never }[keyof T]
  : never;

type Prev12794 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12794<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12794 {
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

type ConfigPaths12794 = Paths12794<NestedConfig12794>;

interface HeavyProps12794 {
  config: DeepPartial12794<NestedConfig12794>;
  path?: ConfigPaths12794;
}

const HeavyComponent12794 = memo(function HeavyComponent12794({ config }: HeavyProps12794) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12794) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12794 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12794: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12794.displayName = 'HeavyComponent12794';
export default HeavyComponent12794;
