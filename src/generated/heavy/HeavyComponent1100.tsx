'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1100<T> = T extends (infer U)[]
  ? DeepReadonlyArray1100<U>
  : T extends object
  ? DeepReadonlyObject1100<T>
  : T;

interface DeepReadonlyArray1100<T> extends ReadonlyArray<DeepReadonly1100<T>> {}

type DeepReadonlyObject1100<T> = {
  readonly [P in keyof T]: DeepReadonly1100<T[P]>;
};

type UnionToIntersection1100<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1100<T> = UnionToIntersection1100<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1100<T extends unknown[], V> = [...T, V];

type TuplifyUnion1100<T, L = LastOf1100<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1100<TuplifyUnion1100<Exclude<T, L>>, L>;

type DeepPartial1100<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1100<T[P]> }
  : T;

type Paths1100<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1100<K, Paths1100<T[K], Prev1100[D]>> : never }[keyof T]
  : never;

type Prev1100 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1100<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1100 {
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

type ConfigPaths1100 = Paths1100<NestedConfig1100>;

interface HeavyProps1100 {
  config: DeepPartial1100<NestedConfig1100>;
  path?: ConfigPaths1100;
}

const HeavyComponent1100 = memo(function HeavyComponent1100({ config }: HeavyProps1100) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1100) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1100 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1100: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1100.displayName = 'HeavyComponent1100';
export default HeavyComponent1100;
