'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1783<T> = T extends (infer U)[]
  ? DeepReadonlyArray1783<U>
  : T extends object
  ? DeepReadonlyObject1783<T>
  : T;

interface DeepReadonlyArray1783<T> extends ReadonlyArray<DeepReadonly1783<T>> {}

type DeepReadonlyObject1783<T> = {
  readonly [P in keyof T]: DeepReadonly1783<T[P]>;
};

type UnionToIntersection1783<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1783<T> = UnionToIntersection1783<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1783<T extends unknown[], V> = [...T, V];

type TuplifyUnion1783<T, L = LastOf1783<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1783<TuplifyUnion1783<Exclude<T, L>>, L>;

type DeepPartial1783<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1783<T[P]> }
  : T;

type Paths1783<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1783<K, Paths1783<T[K], Prev1783[D]>> : never }[keyof T]
  : never;

type Prev1783 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1783<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1783 {
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

type ConfigPaths1783 = Paths1783<NestedConfig1783>;

interface HeavyProps1783 {
  config: DeepPartial1783<NestedConfig1783>;
  path?: ConfigPaths1783;
}

const HeavyComponent1783 = memo(function HeavyComponent1783({ config }: HeavyProps1783) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1783) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1783 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1783: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1783.displayName = 'HeavyComponent1783';
export default HeavyComponent1783;
