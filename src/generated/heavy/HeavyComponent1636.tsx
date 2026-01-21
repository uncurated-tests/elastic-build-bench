'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1636<T> = T extends (infer U)[]
  ? DeepReadonlyArray1636<U>
  : T extends object
  ? DeepReadonlyObject1636<T>
  : T;

interface DeepReadonlyArray1636<T> extends ReadonlyArray<DeepReadonly1636<T>> {}

type DeepReadonlyObject1636<T> = {
  readonly [P in keyof T]: DeepReadonly1636<T[P]>;
};

type UnionToIntersection1636<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1636<T> = UnionToIntersection1636<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1636<T extends unknown[], V> = [...T, V];

type TuplifyUnion1636<T, L = LastOf1636<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1636<TuplifyUnion1636<Exclude<T, L>>, L>;

type DeepPartial1636<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1636<T[P]> }
  : T;

type Paths1636<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1636<K, Paths1636<T[K], Prev1636[D]>> : never }[keyof T]
  : never;

type Prev1636 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1636<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1636 {
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

type ConfigPaths1636 = Paths1636<NestedConfig1636>;

interface HeavyProps1636 {
  config: DeepPartial1636<NestedConfig1636>;
  path?: ConfigPaths1636;
}

const HeavyComponent1636 = memo(function HeavyComponent1636({ config }: HeavyProps1636) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1636) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1636 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1636: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1636.displayName = 'HeavyComponent1636';
export default HeavyComponent1636;
