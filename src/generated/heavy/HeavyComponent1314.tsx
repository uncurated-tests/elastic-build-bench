'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1314<T> = T extends (infer U)[]
  ? DeepReadonlyArray1314<U>
  : T extends object
  ? DeepReadonlyObject1314<T>
  : T;

interface DeepReadonlyArray1314<T> extends ReadonlyArray<DeepReadonly1314<T>> {}

type DeepReadonlyObject1314<T> = {
  readonly [P in keyof T]: DeepReadonly1314<T[P]>;
};

type UnionToIntersection1314<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1314<T> = UnionToIntersection1314<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1314<T extends unknown[], V> = [...T, V];

type TuplifyUnion1314<T, L = LastOf1314<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1314<TuplifyUnion1314<Exclude<T, L>>, L>;

type DeepPartial1314<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1314<T[P]> }
  : T;

type Paths1314<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1314<K, Paths1314<T[K], Prev1314[D]>> : never }[keyof T]
  : never;

type Prev1314 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1314<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1314 {
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

type ConfigPaths1314 = Paths1314<NestedConfig1314>;

interface HeavyProps1314 {
  config: DeepPartial1314<NestedConfig1314>;
  path?: ConfigPaths1314;
}

const HeavyComponent1314 = memo(function HeavyComponent1314({ config }: HeavyProps1314) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1314) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1314 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1314: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1314.displayName = 'HeavyComponent1314';
export default HeavyComponent1314;
