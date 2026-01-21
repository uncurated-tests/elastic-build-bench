'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1746<T> = T extends (infer U)[]
  ? DeepReadonlyArray1746<U>
  : T extends object
  ? DeepReadonlyObject1746<T>
  : T;

interface DeepReadonlyArray1746<T> extends ReadonlyArray<DeepReadonly1746<T>> {}

type DeepReadonlyObject1746<T> = {
  readonly [P in keyof T]: DeepReadonly1746<T[P]>;
};

type UnionToIntersection1746<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1746<T> = UnionToIntersection1746<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1746<T extends unknown[], V> = [...T, V];

type TuplifyUnion1746<T, L = LastOf1746<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1746<TuplifyUnion1746<Exclude<T, L>>, L>;

type DeepPartial1746<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1746<T[P]> }
  : T;

type Paths1746<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1746<K, Paths1746<T[K], Prev1746[D]>> : never }[keyof T]
  : never;

type Prev1746 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1746<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1746 {
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

type ConfigPaths1746 = Paths1746<NestedConfig1746>;

interface HeavyProps1746 {
  config: DeepPartial1746<NestedConfig1746>;
  path?: ConfigPaths1746;
}

const HeavyComponent1746 = memo(function HeavyComponent1746({ config }: HeavyProps1746) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1746) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1746 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1746: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1746.displayName = 'HeavyComponent1746';
export default HeavyComponent1746;
