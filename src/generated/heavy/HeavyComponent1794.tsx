'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1794<T> = T extends (infer U)[]
  ? DeepReadonlyArray1794<U>
  : T extends object
  ? DeepReadonlyObject1794<T>
  : T;

interface DeepReadonlyArray1794<T> extends ReadonlyArray<DeepReadonly1794<T>> {}

type DeepReadonlyObject1794<T> = {
  readonly [P in keyof T]: DeepReadonly1794<T[P]>;
};

type UnionToIntersection1794<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1794<T> = UnionToIntersection1794<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1794<T extends unknown[], V> = [...T, V];

type TuplifyUnion1794<T, L = LastOf1794<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1794<TuplifyUnion1794<Exclude<T, L>>, L>;

type DeepPartial1794<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1794<T[P]> }
  : T;

type Paths1794<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1794<K, Paths1794<T[K], Prev1794[D]>> : never }[keyof T]
  : never;

type Prev1794 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1794<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1794 {
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

type ConfigPaths1794 = Paths1794<NestedConfig1794>;

interface HeavyProps1794 {
  config: DeepPartial1794<NestedConfig1794>;
  path?: ConfigPaths1794;
}

const HeavyComponent1794 = memo(function HeavyComponent1794({ config }: HeavyProps1794) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1794) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1794 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1794: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1794.displayName = 'HeavyComponent1794';
export default HeavyComponent1794;
