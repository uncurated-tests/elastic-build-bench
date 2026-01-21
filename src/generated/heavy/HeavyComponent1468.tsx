'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1468<T> = T extends (infer U)[]
  ? DeepReadonlyArray1468<U>
  : T extends object
  ? DeepReadonlyObject1468<T>
  : T;

interface DeepReadonlyArray1468<T> extends ReadonlyArray<DeepReadonly1468<T>> {}

type DeepReadonlyObject1468<T> = {
  readonly [P in keyof T]: DeepReadonly1468<T[P]>;
};

type UnionToIntersection1468<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1468<T> = UnionToIntersection1468<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1468<T extends unknown[], V> = [...T, V];

type TuplifyUnion1468<T, L = LastOf1468<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1468<TuplifyUnion1468<Exclude<T, L>>, L>;

type DeepPartial1468<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1468<T[P]> }
  : T;

type Paths1468<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1468<K, Paths1468<T[K], Prev1468[D]>> : never }[keyof T]
  : never;

type Prev1468 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1468<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1468 {
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

type ConfigPaths1468 = Paths1468<NestedConfig1468>;

interface HeavyProps1468 {
  config: DeepPartial1468<NestedConfig1468>;
  path?: ConfigPaths1468;
}

const HeavyComponent1468 = memo(function HeavyComponent1468({ config }: HeavyProps1468) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1468) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1468 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1468: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1468.displayName = 'HeavyComponent1468';
export default HeavyComponent1468;
