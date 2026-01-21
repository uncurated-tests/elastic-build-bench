'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1317<T> = T extends (infer U)[]
  ? DeepReadonlyArray1317<U>
  : T extends object
  ? DeepReadonlyObject1317<T>
  : T;

interface DeepReadonlyArray1317<T> extends ReadonlyArray<DeepReadonly1317<T>> {}

type DeepReadonlyObject1317<T> = {
  readonly [P in keyof T]: DeepReadonly1317<T[P]>;
};

type UnionToIntersection1317<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1317<T> = UnionToIntersection1317<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1317<T extends unknown[], V> = [...T, V];

type TuplifyUnion1317<T, L = LastOf1317<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1317<TuplifyUnion1317<Exclude<T, L>>, L>;

type DeepPartial1317<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1317<T[P]> }
  : T;

type Paths1317<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1317<K, Paths1317<T[K], Prev1317[D]>> : never }[keyof T]
  : never;

type Prev1317 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1317<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1317 {
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

type ConfigPaths1317 = Paths1317<NestedConfig1317>;

interface HeavyProps1317 {
  config: DeepPartial1317<NestedConfig1317>;
  path?: ConfigPaths1317;
}

const HeavyComponent1317 = memo(function HeavyComponent1317({ config }: HeavyProps1317) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1317) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1317 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1317: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1317.displayName = 'HeavyComponent1317';
export default HeavyComponent1317;
