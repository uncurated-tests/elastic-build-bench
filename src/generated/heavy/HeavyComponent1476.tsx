'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1476<T> = T extends (infer U)[]
  ? DeepReadonlyArray1476<U>
  : T extends object
  ? DeepReadonlyObject1476<T>
  : T;

interface DeepReadonlyArray1476<T> extends ReadonlyArray<DeepReadonly1476<T>> {}

type DeepReadonlyObject1476<T> = {
  readonly [P in keyof T]: DeepReadonly1476<T[P]>;
};

type UnionToIntersection1476<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1476<T> = UnionToIntersection1476<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1476<T extends unknown[], V> = [...T, V];

type TuplifyUnion1476<T, L = LastOf1476<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1476<TuplifyUnion1476<Exclude<T, L>>, L>;

type DeepPartial1476<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1476<T[P]> }
  : T;

type Paths1476<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1476<K, Paths1476<T[K], Prev1476[D]>> : never }[keyof T]
  : never;

type Prev1476 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1476<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1476 {
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

type ConfigPaths1476 = Paths1476<NestedConfig1476>;

interface HeavyProps1476 {
  config: DeepPartial1476<NestedConfig1476>;
  path?: ConfigPaths1476;
}

const HeavyComponent1476 = memo(function HeavyComponent1476({ config }: HeavyProps1476) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1476) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1476 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1476: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1476.displayName = 'HeavyComponent1476';
export default HeavyComponent1476;
