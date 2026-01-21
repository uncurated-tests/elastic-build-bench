'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1393<T> = T extends (infer U)[]
  ? DeepReadonlyArray1393<U>
  : T extends object
  ? DeepReadonlyObject1393<T>
  : T;

interface DeepReadonlyArray1393<T> extends ReadonlyArray<DeepReadonly1393<T>> {}

type DeepReadonlyObject1393<T> = {
  readonly [P in keyof T]: DeepReadonly1393<T[P]>;
};

type UnionToIntersection1393<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1393<T> = UnionToIntersection1393<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1393<T extends unknown[], V> = [...T, V];

type TuplifyUnion1393<T, L = LastOf1393<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1393<TuplifyUnion1393<Exclude<T, L>>, L>;

type DeepPartial1393<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1393<T[P]> }
  : T;

type Paths1393<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1393<K, Paths1393<T[K], Prev1393[D]>> : never }[keyof T]
  : never;

type Prev1393 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1393<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1393 {
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

type ConfigPaths1393 = Paths1393<NestedConfig1393>;

interface HeavyProps1393 {
  config: DeepPartial1393<NestedConfig1393>;
  path?: ConfigPaths1393;
}

const HeavyComponent1393 = memo(function HeavyComponent1393({ config }: HeavyProps1393) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1393) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1393 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1393: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1393.displayName = 'HeavyComponent1393';
export default HeavyComponent1393;
