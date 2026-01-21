'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1785<T> = T extends (infer U)[]
  ? DeepReadonlyArray1785<U>
  : T extends object
  ? DeepReadonlyObject1785<T>
  : T;

interface DeepReadonlyArray1785<T> extends ReadonlyArray<DeepReadonly1785<T>> {}

type DeepReadonlyObject1785<T> = {
  readonly [P in keyof T]: DeepReadonly1785<T[P]>;
};

type UnionToIntersection1785<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1785<T> = UnionToIntersection1785<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1785<T extends unknown[], V> = [...T, V];

type TuplifyUnion1785<T, L = LastOf1785<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1785<TuplifyUnion1785<Exclude<T, L>>, L>;

type DeepPartial1785<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1785<T[P]> }
  : T;

type Paths1785<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1785<K, Paths1785<T[K], Prev1785[D]>> : never }[keyof T]
  : never;

type Prev1785 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1785<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1785 {
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

type ConfigPaths1785 = Paths1785<NestedConfig1785>;

interface HeavyProps1785 {
  config: DeepPartial1785<NestedConfig1785>;
  path?: ConfigPaths1785;
}

const HeavyComponent1785 = memo(function HeavyComponent1785({ config }: HeavyProps1785) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1785) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1785 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1785: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1785.displayName = 'HeavyComponent1785';
export default HeavyComponent1785;
