'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1578<T> = T extends (infer U)[]
  ? DeepReadonlyArray1578<U>
  : T extends object
  ? DeepReadonlyObject1578<T>
  : T;

interface DeepReadonlyArray1578<T> extends ReadonlyArray<DeepReadonly1578<T>> {}

type DeepReadonlyObject1578<T> = {
  readonly [P in keyof T]: DeepReadonly1578<T[P]>;
};

type UnionToIntersection1578<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1578<T> = UnionToIntersection1578<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1578<T extends unknown[], V> = [...T, V];

type TuplifyUnion1578<T, L = LastOf1578<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1578<TuplifyUnion1578<Exclude<T, L>>, L>;

type DeepPartial1578<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1578<T[P]> }
  : T;

type Paths1578<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1578<K, Paths1578<T[K], Prev1578[D]>> : never }[keyof T]
  : never;

type Prev1578 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1578<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1578 {
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

type ConfigPaths1578 = Paths1578<NestedConfig1578>;

interface HeavyProps1578 {
  config: DeepPartial1578<NestedConfig1578>;
  path?: ConfigPaths1578;
}

const HeavyComponent1578 = memo(function HeavyComponent1578({ config }: HeavyProps1578) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1578) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1578 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1578: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1578.displayName = 'HeavyComponent1578';
export default HeavyComponent1578;
