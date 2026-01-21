'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1657<T> = T extends (infer U)[]
  ? DeepReadonlyArray1657<U>
  : T extends object
  ? DeepReadonlyObject1657<T>
  : T;

interface DeepReadonlyArray1657<T> extends ReadonlyArray<DeepReadonly1657<T>> {}

type DeepReadonlyObject1657<T> = {
  readonly [P in keyof T]: DeepReadonly1657<T[P]>;
};

type UnionToIntersection1657<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1657<T> = UnionToIntersection1657<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1657<T extends unknown[], V> = [...T, V];

type TuplifyUnion1657<T, L = LastOf1657<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1657<TuplifyUnion1657<Exclude<T, L>>, L>;

type DeepPartial1657<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1657<T[P]> }
  : T;

type Paths1657<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1657<K, Paths1657<T[K], Prev1657[D]>> : never }[keyof T]
  : never;

type Prev1657 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1657<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1657 {
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

type ConfigPaths1657 = Paths1657<NestedConfig1657>;

interface HeavyProps1657 {
  config: DeepPartial1657<NestedConfig1657>;
  path?: ConfigPaths1657;
}

const HeavyComponent1657 = memo(function HeavyComponent1657({ config }: HeavyProps1657) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1657) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1657 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1657: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1657.displayName = 'HeavyComponent1657';
export default HeavyComponent1657;
