'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1283<T> = T extends (infer U)[]
  ? DeepReadonlyArray1283<U>
  : T extends object
  ? DeepReadonlyObject1283<T>
  : T;

interface DeepReadonlyArray1283<T> extends ReadonlyArray<DeepReadonly1283<T>> {}

type DeepReadonlyObject1283<T> = {
  readonly [P in keyof T]: DeepReadonly1283<T[P]>;
};

type UnionToIntersection1283<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1283<T> = UnionToIntersection1283<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1283<T extends unknown[], V> = [...T, V];

type TuplifyUnion1283<T, L = LastOf1283<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1283<TuplifyUnion1283<Exclude<T, L>>, L>;

type DeepPartial1283<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1283<T[P]> }
  : T;

type Paths1283<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1283<K, Paths1283<T[K], Prev1283[D]>> : never }[keyof T]
  : never;

type Prev1283 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1283<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1283 {
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

type ConfigPaths1283 = Paths1283<NestedConfig1283>;

interface HeavyProps1283 {
  config: DeepPartial1283<NestedConfig1283>;
  path?: ConfigPaths1283;
}

const HeavyComponent1283 = memo(function HeavyComponent1283({ config }: HeavyProps1283) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1283) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1283 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1283: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1283.displayName = 'HeavyComponent1283';
export default HeavyComponent1283;
