'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1402<T> = T extends (infer U)[]
  ? DeepReadonlyArray1402<U>
  : T extends object
  ? DeepReadonlyObject1402<T>
  : T;

interface DeepReadonlyArray1402<T> extends ReadonlyArray<DeepReadonly1402<T>> {}

type DeepReadonlyObject1402<T> = {
  readonly [P in keyof T]: DeepReadonly1402<T[P]>;
};

type UnionToIntersection1402<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1402<T> = UnionToIntersection1402<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1402<T extends unknown[], V> = [...T, V];

type TuplifyUnion1402<T, L = LastOf1402<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1402<TuplifyUnion1402<Exclude<T, L>>, L>;

type DeepPartial1402<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1402<T[P]> }
  : T;

type Paths1402<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1402<K, Paths1402<T[K], Prev1402[D]>> : never }[keyof T]
  : never;

type Prev1402 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1402<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1402 {
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

type ConfigPaths1402 = Paths1402<NestedConfig1402>;

interface HeavyProps1402 {
  config: DeepPartial1402<NestedConfig1402>;
  path?: ConfigPaths1402;
}

const HeavyComponent1402 = memo(function HeavyComponent1402({ config }: HeavyProps1402) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1402) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1402 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1402: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1402.displayName = 'HeavyComponent1402';
export default HeavyComponent1402;
