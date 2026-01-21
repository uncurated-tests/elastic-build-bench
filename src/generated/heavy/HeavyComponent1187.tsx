'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1187<T> = T extends (infer U)[]
  ? DeepReadonlyArray1187<U>
  : T extends object
  ? DeepReadonlyObject1187<T>
  : T;

interface DeepReadonlyArray1187<T> extends ReadonlyArray<DeepReadonly1187<T>> {}

type DeepReadonlyObject1187<T> = {
  readonly [P in keyof T]: DeepReadonly1187<T[P]>;
};

type UnionToIntersection1187<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1187<T> = UnionToIntersection1187<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1187<T extends unknown[], V> = [...T, V];

type TuplifyUnion1187<T, L = LastOf1187<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1187<TuplifyUnion1187<Exclude<T, L>>, L>;

type DeepPartial1187<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1187<T[P]> }
  : T;

type Paths1187<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1187<K, Paths1187<T[K], Prev1187[D]>> : never }[keyof T]
  : never;

type Prev1187 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1187<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1187 {
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

type ConfigPaths1187 = Paths1187<NestedConfig1187>;

interface HeavyProps1187 {
  config: DeepPartial1187<NestedConfig1187>;
  path?: ConfigPaths1187;
}

const HeavyComponent1187 = memo(function HeavyComponent1187({ config }: HeavyProps1187) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1187) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1187 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1187: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1187.displayName = 'HeavyComponent1187';
export default HeavyComponent1187;
