'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1863<T> = T extends (infer U)[]
  ? DeepReadonlyArray1863<U>
  : T extends object
  ? DeepReadonlyObject1863<T>
  : T;

interface DeepReadonlyArray1863<T> extends ReadonlyArray<DeepReadonly1863<T>> {}

type DeepReadonlyObject1863<T> = {
  readonly [P in keyof T]: DeepReadonly1863<T[P]>;
};

type UnionToIntersection1863<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1863<T> = UnionToIntersection1863<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1863<T extends unknown[], V> = [...T, V];

type TuplifyUnion1863<T, L = LastOf1863<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1863<TuplifyUnion1863<Exclude<T, L>>, L>;

type DeepPartial1863<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1863<T[P]> }
  : T;

type Paths1863<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1863<K, Paths1863<T[K], Prev1863[D]>> : never }[keyof T]
  : never;

type Prev1863 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1863<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1863 {
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

type ConfigPaths1863 = Paths1863<NestedConfig1863>;

interface HeavyProps1863 {
  config: DeepPartial1863<NestedConfig1863>;
  path?: ConfigPaths1863;
}

const HeavyComponent1863 = memo(function HeavyComponent1863({ config }: HeavyProps1863) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1863) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1863 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1863: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1863.displayName = 'HeavyComponent1863';
export default HeavyComponent1863;
