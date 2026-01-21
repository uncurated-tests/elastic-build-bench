'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1263<T> = T extends (infer U)[]
  ? DeepReadonlyArray1263<U>
  : T extends object
  ? DeepReadonlyObject1263<T>
  : T;

interface DeepReadonlyArray1263<T> extends ReadonlyArray<DeepReadonly1263<T>> {}

type DeepReadonlyObject1263<T> = {
  readonly [P in keyof T]: DeepReadonly1263<T[P]>;
};

type UnionToIntersection1263<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1263<T> = UnionToIntersection1263<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1263<T extends unknown[], V> = [...T, V];

type TuplifyUnion1263<T, L = LastOf1263<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1263<TuplifyUnion1263<Exclude<T, L>>, L>;

type DeepPartial1263<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1263<T[P]> }
  : T;

type Paths1263<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1263<K, Paths1263<T[K], Prev1263[D]>> : never }[keyof T]
  : never;

type Prev1263 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1263<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1263 {
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

type ConfigPaths1263 = Paths1263<NestedConfig1263>;

interface HeavyProps1263 {
  config: DeepPartial1263<NestedConfig1263>;
  path?: ConfigPaths1263;
}

const HeavyComponent1263 = memo(function HeavyComponent1263({ config }: HeavyProps1263) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1263) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1263 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1263: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1263.displayName = 'HeavyComponent1263';
export default HeavyComponent1263;
