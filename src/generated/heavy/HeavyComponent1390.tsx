'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1390<T> = T extends (infer U)[]
  ? DeepReadonlyArray1390<U>
  : T extends object
  ? DeepReadonlyObject1390<T>
  : T;

interface DeepReadonlyArray1390<T> extends ReadonlyArray<DeepReadonly1390<T>> {}

type DeepReadonlyObject1390<T> = {
  readonly [P in keyof T]: DeepReadonly1390<T[P]>;
};

type UnionToIntersection1390<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1390<T> = UnionToIntersection1390<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1390<T extends unknown[], V> = [...T, V];

type TuplifyUnion1390<T, L = LastOf1390<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1390<TuplifyUnion1390<Exclude<T, L>>, L>;

type DeepPartial1390<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1390<T[P]> }
  : T;

type Paths1390<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1390<K, Paths1390<T[K], Prev1390[D]>> : never }[keyof T]
  : never;

type Prev1390 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1390<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1390 {
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

type ConfigPaths1390 = Paths1390<NestedConfig1390>;

interface HeavyProps1390 {
  config: DeepPartial1390<NestedConfig1390>;
  path?: ConfigPaths1390;
}

const HeavyComponent1390 = memo(function HeavyComponent1390({ config }: HeavyProps1390) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1390) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1390 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1390: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1390.displayName = 'HeavyComponent1390';
export default HeavyComponent1390;
