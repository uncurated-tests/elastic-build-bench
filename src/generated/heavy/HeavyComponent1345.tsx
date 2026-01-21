'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1345<T> = T extends (infer U)[]
  ? DeepReadonlyArray1345<U>
  : T extends object
  ? DeepReadonlyObject1345<T>
  : T;

interface DeepReadonlyArray1345<T> extends ReadonlyArray<DeepReadonly1345<T>> {}

type DeepReadonlyObject1345<T> = {
  readonly [P in keyof T]: DeepReadonly1345<T[P]>;
};

type UnionToIntersection1345<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1345<T> = UnionToIntersection1345<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1345<T extends unknown[], V> = [...T, V];

type TuplifyUnion1345<T, L = LastOf1345<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1345<TuplifyUnion1345<Exclude<T, L>>, L>;

type DeepPartial1345<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1345<T[P]> }
  : T;

type Paths1345<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1345<K, Paths1345<T[K], Prev1345[D]>> : never }[keyof T]
  : never;

type Prev1345 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1345<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1345 {
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

type ConfigPaths1345 = Paths1345<NestedConfig1345>;

interface HeavyProps1345 {
  config: DeepPartial1345<NestedConfig1345>;
  path?: ConfigPaths1345;
}

const HeavyComponent1345 = memo(function HeavyComponent1345({ config }: HeavyProps1345) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1345) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1345 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1345: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1345.displayName = 'HeavyComponent1345';
export default HeavyComponent1345;
