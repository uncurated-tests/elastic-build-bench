'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1554<T> = T extends (infer U)[]
  ? DeepReadonlyArray1554<U>
  : T extends object
  ? DeepReadonlyObject1554<T>
  : T;

interface DeepReadonlyArray1554<T> extends ReadonlyArray<DeepReadonly1554<T>> {}

type DeepReadonlyObject1554<T> = {
  readonly [P in keyof T]: DeepReadonly1554<T[P]>;
};

type UnionToIntersection1554<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1554<T> = UnionToIntersection1554<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1554<T extends unknown[], V> = [...T, V];

type TuplifyUnion1554<T, L = LastOf1554<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1554<TuplifyUnion1554<Exclude<T, L>>, L>;

type DeepPartial1554<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1554<T[P]> }
  : T;

type Paths1554<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1554<K, Paths1554<T[K], Prev1554[D]>> : never }[keyof T]
  : never;

type Prev1554 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1554<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1554 {
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

type ConfigPaths1554 = Paths1554<NestedConfig1554>;

interface HeavyProps1554 {
  config: DeepPartial1554<NestedConfig1554>;
  path?: ConfigPaths1554;
}

const HeavyComponent1554 = memo(function HeavyComponent1554({ config }: HeavyProps1554) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1554) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1554 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1554: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1554.displayName = 'HeavyComponent1554';
export default HeavyComponent1554;
