'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1570<T> = T extends (infer U)[]
  ? DeepReadonlyArray1570<U>
  : T extends object
  ? DeepReadonlyObject1570<T>
  : T;

interface DeepReadonlyArray1570<T> extends ReadonlyArray<DeepReadonly1570<T>> {}

type DeepReadonlyObject1570<T> = {
  readonly [P in keyof T]: DeepReadonly1570<T[P]>;
};

type UnionToIntersection1570<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1570<T> = UnionToIntersection1570<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1570<T extends unknown[], V> = [...T, V];

type TuplifyUnion1570<T, L = LastOf1570<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1570<TuplifyUnion1570<Exclude<T, L>>, L>;

type DeepPartial1570<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1570<T[P]> }
  : T;

type Paths1570<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1570<K, Paths1570<T[K], Prev1570[D]>> : never }[keyof T]
  : never;

type Prev1570 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1570<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1570 {
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

type ConfigPaths1570 = Paths1570<NestedConfig1570>;

interface HeavyProps1570 {
  config: DeepPartial1570<NestedConfig1570>;
  path?: ConfigPaths1570;
}

const HeavyComponent1570 = memo(function HeavyComponent1570({ config }: HeavyProps1570) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1570) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1570 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1570: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1570.displayName = 'HeavyComponent1570';
export default HeavyComponent1570;
