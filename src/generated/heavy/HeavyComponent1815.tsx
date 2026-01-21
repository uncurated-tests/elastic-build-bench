'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1815<T> = T extends (infer U)[]
  ? DeepReadonlyArray1815<U>
  : T extends object
  ? DeepReadonlyObject1815<T>
  : T;

interface DeepReadonlyArray1815<T> extends ReadonlyArray<DeepReadonly1815<T>> {}

type DeepReadonlyObject1815<T> = {
  readonly [P in keyof T]: DeepReadonly1815<T[P]>;
};

type UnionToIntersection1815<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1815<T> = UnionToIntersection1815<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1815<T extends unknown[], V> = [...T, V];

type TuplifyUnion1815<T, L = LastOf1815<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1815<TuplifyUnion1815<Exclude<T, L>>, L>;

type DeepPartial1815<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1815<T[P]> }
  : T;

type Paths1815<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1815<K, Paths1815<T[K], Prev1815[D]>> : never }[keyof T]
  : never;

type Prev1815 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1815<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1815 {
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

type ConfigPaths1815 = Paths1815<NestedConfig1815>;

interface HeavyProps1815 {
  config: DeepPartial1815<NestedConfig1815>;
  path?: ConfigPaths1815;
}

const HeavyComponent1815 = memo(function HeavyComponent1815({ config }: HeavyProps1815) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1815) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1815 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1815: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1815.displayName = 'HeavyComponent1815';
export default HeavyComponent1815;
