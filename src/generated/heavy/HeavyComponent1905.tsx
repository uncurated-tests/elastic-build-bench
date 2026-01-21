'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1905<T> = T extends (infer U)[]
  ? DeepReadonlyArray1905<U>
  : T extends object
  ? DeepReadonlyObject1905<T>
  : T;

interface DeepReadonlyArray1905<T> extends ReadonlyArray<DeepReadonly1905<T>> {}

type DeepReadonlyObject1905<T> = {
  readonly [P in keyof T]: DeepReadonly1905<T[P]>;
};

type UnionToIntersection1905<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1905<T> = UnionToIntersection1905<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1905<T extends unknown[], V> = [...T, V];

type TuplifyUnion1905<T, L = LastOf1905<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1905<TuplifyUnion1905<Exclude<T, L>>, L>;

type DeepPartial1905<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1905<T[P]> }
  : T;

type Paths1905<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1905<K, Paths1905<T[K], Prev1905[D]>> : never }[keyof T]
  : never;

type Prev1905 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1905<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1905 {
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

type ConfigPaths1905 = Paths1905<NestedConfig1905>;

interface HeavyProps1905 {
  config: DeepPartial1905<NestedConfig1905>;
  path?: ConfigPaths1905;
}

const HeavyComponent1905 = memo(function HeavyComponent1905({ config }: HeavyProps1905) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1905) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1905 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1905: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1905.displayName = 'HeavyComponent1905';
export default HeavyComponent1905;
