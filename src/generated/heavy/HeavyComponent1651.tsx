'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1651<T> = T extends (infer U)[]
  ? DeepReadonlyArray1651<U>
  : T extends object
  ? DeepReadonlyObject1651<T>
  : T;

interface DeepReadonlyArray1651<T> extends ReadonlyArray<DeepReadonly1651<T>> {}

type DeepReadonlyObject1651<T> = {
  readonly [P in keyof T]: DeepReadonly1651<T[P]>;
};

type UnionToIntersection1651<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1651<T> = UnionToIntersection1651<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1651<T extends unknown[], V> = [...T, V];

type TuplifyUnion1651<T, L = LastOf1651<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1651<TuplifyUnion1651<Exclude<T, L>>, L>;

type DeepPartial1651<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1651<T[P]> }
  : T;

type Paths1651<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1651<K, Paths1651<T[K], Prev1651[D]>> : never }[keyof T]
  : never;

type Prev1651 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1651<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1651 {
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

type ConfigPaths1651 = Paths1651<NestedConfig1651>;

interface HeavyProps1651 {
  config: DeepPartial1651<NestedConfig1651>;
  path?: ConfigPaths1651;
}

const HeavyComponent1651 = memo(function HeavyComponent1651({ config }: HeavyProps1651) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1651) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1651 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1651: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1651.displayName = 'HeavyComponent1651';
export default HeavyComponent1651;
