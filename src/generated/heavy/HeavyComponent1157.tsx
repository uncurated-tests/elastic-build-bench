'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1157<T> = T extends (infer U)[]
  ? DeepReadonlyArray1157<U>
  : T extends object
  ? DeepReadonlyObject1157<T>
  : T;

interface DeepReadonlyArray1157<T> extends ReadonlyArray<DeepReadonly1157<T>> {}

type DeepReadonlyObject1157<T> = {
  readonly [P in keyof T]: DeepReadonly1157<T[P]>;
};

type UnionToIntersection1157<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1157<T> = UnionToIntersection1157<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1157<T extends unknown[], V> = [...T, V];

type TuplifyUnion1157<T, L = LastOf1157<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1157<TuplifyUnion1157<Exclude<T, L>>, L>;

type DeepPartial1157<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1157<T[P]> }
  : T;

type Paths1157<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1157<K, Paths1157<T[K], Prev1157[D]>> : never }[keyof T]
  : never;

type Prev1157 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1157<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1157 {
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

type ConfigPaths1157 = Paths1157<NestedConfig1157>;

interface HeavyProps1157 {
  config: DeepPartial1157<NestedConfig1157>;
  path?: ConfigPaths1157;
}

const HeavyComponent1157 = memo(function HeavyComponent1157({ config }: HeavyProps1157) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1157) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1157 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1157: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1157.displayName = 'HeavyComponent1157';
export default HeavyComponent1157;
