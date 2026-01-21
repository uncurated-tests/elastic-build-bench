'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1551<T> = T extends (infer U)[]
  ? DeepReadonlyArray1551<U>
  : T extends object
  ? DeepReadonlyObject1551<T>
  : T;

interface DeepReadonlyArray1551<T> extends ReadonlyArray<DeepReadonly1551<T>> {}

type DeepReadonlyObject1551<T> = {
  readonly [P in keyof T]: DeepReadonly1551<T[P]>;
};

type UnionToIntersection1551<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1551<T> = UnionToIntersection1551<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1551<T extends unknown[], V> = [...T, V];

type TuplifyUnion1551<T, L = LastOf1551<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1551<TuplifyUnion1551<Exclude<T, L>>, L>;

type DeepPartial1551<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1551<T[P]> }
  : T;

type Paths1551<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1551<K, Paths1551<T[K], Prev1551[D]>> : never }[keyof T]
  : never;

type Prev1551 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1551<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1551 {
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

type ConfigPaths1551 = Paths1551<NestedConfig1551>;

interface HeavyProps1551 {
  config: DeepPartial1551<NestedConfig1551>;
  path?: ConfigPaths1551;
}

const HeavyComponent1551 = memo(function HeavyComponent1551({ config }: HeavyProps1551) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1551) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1551 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1551: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1551.displayName = 'HeavyComponent1551';
export default HeavyComponent1551;
