'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1603<T> = T extends (infer U)[]
  ? DeepReadonlyArray1603<U>
  : T extends object
  ? DeepReadonlyObject1603<T>
  : T;

interface DeepReadonlyArray1603<T> extends ReadonlyArray<DeepReadonly1603<T>> {}

type DeepReadonlyObject1603<T> = {
  readonly [P in keyof T]: DeepReadonly1603<T[P]>;
};

type UnionToIntersection1603<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1603<T> = UnionToIntersection1603<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1603<T extends unknown[], V> = [...T, V];

type TuplifyUnion1603<T, L = LastOf1603<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1603<TuplifyUnion1603<Exclude<T, L>>, L>;

type DeepPartial1603<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1603<T[P]> }
  : T;

type Paths1603<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1603<K, Paths1603<T[K], Prev1603[D]>> : never }[keyof T]
  : never;

type Prev1603 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1603<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1603 {
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

type ConfigPaths1603 = Paths1603<NestedConfig1603>;

interface HeavyProps1603 {
  config: DeepPartial1603<NestedConfig1603>;
  path?: ConfigPaths1603;
}

const HeavyComponent1603 = memo(function HeavyComponent1603({ config }: HeavyProps1603) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1603) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1603 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1603: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1603.displayName = 'HeavyComponent1603';
export default HeavyComponent1603;
