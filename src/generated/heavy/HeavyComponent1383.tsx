'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1383<T> = T extends (infer U)[]
  ? DeepReadonlyArray1383<U>
  : T extends object
  ? DeepReadonlyObject1383<T>
  : T;

interface DeepReadonlyArray1383<T> extends ReadonlyArray<DeepReadonly1383<T>> {}

type DeepReadonlyObject1383<T> = {
  readonly [P in keyof T]: DeepReadonly1383<T[P]>;
};

type UnionToIntersection1383<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1383<T> = UnionToIntersection1383<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1383<T extends unknown[], V> = [...T, V];

type TuplifyUnion1383<T, L = LastOf1383<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1383<TuplifyUnion1383<Exclude<T, L>>, L>;

type DeepPartial1383<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1383<T[P]> }
  : T;

type Paths1383<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1383<K, Paths1383<T[K], Prev1383[D]>> : never }[keyof T]
  : never;

type Prev1383 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1383<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1383 {
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

type ConfigPaths1383 = Paths1383<NestedConfig1383>;

interface HeavyProps1383 {
  config: DeepPartial1383<NestedConfig1383>;
  path?: ConfigPaths1383;
}

const HeavyComponent1383 = memo(function HeavyComponent1383({ config }: HeavyProps1383) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1383) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1383 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1383: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1383.displayName = 'HeavyComponent1383';
export default HeavyComponent1383;
