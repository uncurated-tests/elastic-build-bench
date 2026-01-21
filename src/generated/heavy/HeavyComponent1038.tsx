'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1038<T> = T extends (infer U)[]
  ? DeepReadonlyArray1038<U>
  : T extends object
  ? DeepReadonlyObject1038<T>
  : T;

interface DeepReadonlyArray1038<T> extends ReadonlyArray<DeepReadonly1038<T>> {}

type DeepReadonlyObject1038<T> = {
  readonly [P in keyof T]: DeepReadonly1038<T[P]>;
};

type UnionToIntersection1038<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1038<T> = UnionToIntersection1038<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1038<T extends unknown[], V> = [...T, V];

type TuplifyUnion1038<T, L = LastOf1038<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1038<TuplifyUnion1038<Exclude<T, L>>, L>;

type DeepPartial1038<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1038<T[P]> }
  : T;

type Paths1038<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1038<K, Paths1038<T[K], Prev1038[D]>> : never }[keyof T]
  : never;

type Prev1038 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1038<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1038 {
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

type ConfigPaths1038 = Paths1038<NestedConfig1038>;

interface HeavyProps1038 {
  config: DeepPartial1038<NestedConfig1038>;
  path?: ConfigPaths1038;
}

const HeavyComponent1038 = memo(function HeavyComponent1038({ config }: HeavyProps1038) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1038) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1038 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1038: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1038.displayName = 'HeavyComponent1038';
export default HeavyComponent1038;
