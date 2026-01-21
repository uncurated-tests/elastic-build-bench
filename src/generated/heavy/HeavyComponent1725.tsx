'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1725<T> = T extends (infer U)[]
  ? DeepReadonlyArray1725<U>
  : T extends object
  ? DeepReadonlyObject1725<T>
  : T;

interface DeepReadonlyArray1725<T> extends ReadonlyArray<DeepReadonly1725<T>> {}

type DeepReadonlyObject1725<T> = {
  readonly [P in keyof T]: DeepReadonly1725<T[P]>;
};

type UnionToIntersection1725<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1725<T> = UnionToIntersection1725<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1725<T extends unknown[], V> = [...T, V];

type TuplifyUnion1725<T, L = LastOf1725<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1725<TuplifyUnion1725<Exclude<T, L>>, L>;

type DeepPartial1725<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1725<T[P]> }
  : T;

type Paths1725<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1725<K, Paths1725<T[K], Prev1725[D]>> : never }[keyof T]
  : never;

type Prev1725 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1725<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1725 {
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

type ConfigPaths1725 = Paths1725<NestedConfig1725>;

interface HeavyProps1725 {
  config: DeepPartial1725<NestedConfig1725>;
  path?: ConfigPaths1725;
}

const HeavyComponent1725 = memo(function HeavyComponent1725({ config }: HeavyProps1725) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1725) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1725 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1725: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1725.displayName = 'HeavyComponent1725';
export default HeavyComponent1725;
