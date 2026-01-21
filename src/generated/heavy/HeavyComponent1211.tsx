'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1211<T> = T extends (infer U)[]
  ? DeepReadonlyArray1211<U>
  : T extends object
  ? DeepReadonlyObject1211<T>
  : T;

interface DeepReadonlyArray1211<T> extends ReadonlyArray<DeepReadonly1211<T>> {}

type DeepReadonlyObject1211<T> = {
  readonly [P in keyof T]: DeepReadonly1211<T[P]>;
};

type UnionToIntersection1211<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1211<T> = UnionToIntersection1211<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1211<T extends unknown[], V> = [...T, V];

type TuplifyUnion1211<T, L = LastOf1211<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1211<TuplifyUnion1211<Exclude<T, L>>, L>;

type DeepPartial1211<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1211<T[P]> }
  : T;

type Paths1211<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1211<K, Paths1211<T[K], Prev1211[D]>> : never }[keyof T]
  : never;

type Prev1211 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1211<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1211 {
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

type ConfigPaths1211 = Paths1211<NestedConfig1211>;

interface HeavyProps1211 {
  config: DeepPartial1211<NestedConfig1211>;
  path?: ConfigPaths1211;
}

const HeavyComponent1211 = memo(function HeavyComponent1211({ config }: HeavyProps1211) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1211) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1211 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1211: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1211.displayName = 'HeavyComponent1211';
export default HeavyComponent1211;
