'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1152<T> = T extends (infer U)[]
  ? DeepReadonlyArray1152<U>
  : T extends object
  ? DeepReadonlyObject1152<T>
  : T;

interface DeepReadonlyArray1152<T> extends ReadonlyArray<DeepReadonly1152<T>> {}

type DeepReadonlyObject1152<T> = {
  readonly [P in keyof T]: DeepReadonly1152<T[P]>;
};

type UnionToIntersection1152<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1152<T> = UnionToIntersection1152<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1152<T extends unknown[], V> = [...T, V];

type TuplifyUnion1152<T, L = LastOf1152<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1152<TuplifyUnion1152<Exclude<T, L>>, L>;

type DeepPartial1152<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1152<T[P]> }
  : T;

type Paths1152<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1152<K, Paths1152<T[K], Prev1152[D]>> : never }[keyof T]
  : never;

type Prev1152 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1152<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1152 {
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

type ConfigPaths1152 = Paths1152<NestedConfig1152>;

interface HeavyProps1152 {
  config: DeepPartial1152<NestedConfig1152>;
  path?: ConfigPaths1152;
}

const HeavyComponent1152 = memo(function HeavyComponent1152({ config }: HeavyProps1152) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1152) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1152 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1152: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1152.displayName = 'HeavyComponent1152';
export default HeavyComponent1152;
