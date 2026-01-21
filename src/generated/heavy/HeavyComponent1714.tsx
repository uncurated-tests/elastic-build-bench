'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1714<T> = T extends (infer U)[]
  ? DeepReadonlyArray1714<U>
  : T extends object
  ? DeepReadonlyObject1714<T>
  : T;

interface DeepReadonlyArray1714<T> extends ReadonlyArray<DeepReadonly1714<T>> {}

type DeepReadonlyObject1714<T> = {
  readonly [P in keyof T]: DeepReadonly1714<T[P]>;
};

type UnionToIntersection1714<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1714<T> = UnionToIntersection1714<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1714<T extends unknown[], V> = [...T, V];

type TuplifyUnion1714<T, L = LastOf1714<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1714<TuplifyUnion1714<Exclude<T, L>>, L>;

type DeepPartial1714<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1714<T[P]> }
  : T;

type Paths1714<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1714<K, Paths1714<T[K], Prev1714[D]>> : never }[keyof T]
  : never;

type Prev1714 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1714<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1714 {
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

type ConfigPaths1714 = Paths1714<NestedConfig1714>;

interface HeavyProps1714 {
  config: DeepPartial1714<NestedConfig1714>;
  path?: ConfigPaths1714;
}

const HeavyComponent1714 = memo(function HeavyComponent1714({ config }: HeavyProps1714) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1714) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1714 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1714: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1714.displayName = 'HeavyComponent1714';
export default HeavyComponent1714;
