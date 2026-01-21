'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1769<T> = T extends (infer U)[]
  ? DeepReadonlyArray1769<U>
  : T extends object
  ? DeepReadonlyObject1769<T>
  : T;

interface DeepReadonlyArray1769<T> extends ReadonlyArray<DeepReadonly1769<T>> {}

type DeepReadonlyObject1769<T> = {
  readonly [P in keyof T]: DeepReadonly1769<T[P]>;
};

type UnionToIntersection1769<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1769<T> = UnionToIntersection1769<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1769<T extends unknown[], V> = [...T, V];

type TuplifyUnion1769<T, L = LastOf1769<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1769<TuplifyUnion1769<Exclude<T, L>>, L>;

type DeepPartial1769<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1769<T[P]> }
  : T;

type Paths1769<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1769<K, Paths1769<T[K], Prev1769[D]>> : never }[keyof T]
  : never;

type Prev1769 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1769<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1769 {
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

type ConfigPaths1769 = Paths1769<NestedConfig1769>;

interface HeavyProps1769 {
  config: DeepPartial1769<NestedConfig1769>;
  path?: ConfigPaths1769;
}

const HeavyComponent1769 = memo(function HeavyComponent1769({ config }: HeavyProps1769) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1769) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1769 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1769: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1769.displayName = 'HeavyComponent1769';
export default HeavyComponent1769;
