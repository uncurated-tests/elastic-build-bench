'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1867<T> = T extends (infer U)[]
  ? DeepReadonlyArray1867<U>
  : T extends object
  ? DeepReadonlyObject1867<T>
  : T;

interface DeepReadonlyArray1867<T> extends ReadonlyArray<DeepReadonly1867<T>> {}

type DeepReadonlyObject1867<T> = {
  readonly [P in keyof T]: DeepReadonly1867<T[P]>;
};

type UnionToIntersection1867<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1867<T> = UnionToIntersection1867<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1867<T extends unknown[], V> = [...T, V];

type TuplifyUnion1867<T, L = LastOf1867<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1867<TuplifyUnion1867<Exclude<T, L>>, L>;

type DeepPartial1867<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1867<T[P]> }
  : T;

type Paths1867<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1867<K, Paths1867<T[K], Prev1867[D]>> : never }[keyof T]
  : never;

type Prev1867 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1867<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1867 {
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

type ConfigPaths1867 = Paths1867<NestedConfig1867>;

interface HeavyProps1867 {
  config: DeepPartial1867<NestedConfig1867>;
  path?: ConfigPaths1867;
}

const HeavyComponent1867 = memo(function HeavyComponent1867({ config }: HeavyProps1867) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1867) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1867 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1867: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1867.displayName = 'HeavyComponent1867';
export default HeavyComponent1867;
