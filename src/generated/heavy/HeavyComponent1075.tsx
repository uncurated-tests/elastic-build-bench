'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1075<T> = T extends (infer U)[]
  ? DeepReadonlyArray1075<U>
  : T extends object
  ? DeepReadonlyObject1075<T>
  : T;

interface DeepReadonlyArray1075<T> extends ReadonlyArray<DeepReadonly1075<T>> {}

type DeepReadonlyObject1075<T> = {
  readonly [P in keyof T]: DeepReadonly1075<T[P]>;
};

type UnionToIntersection1075<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1075<T> = UnionToIntersection1075<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1075<T extends unknown[], V> = [...T, V];

type TuplifyUnion1075<T, L = LastOf1075<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1075<TuplifyUnion1075<Exclude<T, L>>, L>;

type DeepPartial1075<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1075<T[P]> }
  : T;

type Paths1075<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1075<K, Paths1075<T[K], Prev1075[D]>> : never }[keyof T]
  : never;

type Prev1075 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1075<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1075 {
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

type ConfigPaths1075 = Paths1075<NestedConfig1075>;

interface HeavyProps1075 {
  config: DeepPartial1075<NestedConfig1075>;
  path?: ConfigPaths1075;
}

const HeavyComponent1075 = memo(function HeavyComponent1075({ config }: HeavyProps1075) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1075) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1075 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1075: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1075.displayName = 'HeavyComponent1075';
export default HeavyComponent1075;
