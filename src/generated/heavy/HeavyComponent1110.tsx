'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1110<T> = T extends (infer U)[]
  ? DeepReadonlyArray1110<U>
  : T extends object
  ? DeepReadonlyObject1110<T>
  : T;

interface DeepReadonlyArray1110<T> extends ReadonlyArray<DeepReadonly1110<T>> {}

type DeepReadonlyObject1110<T> = {
  readonly [P in keyof T]: DeepReadonly1110<T[P]>;
};

type UnionToIntersection1110<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1110<T> = UnionToIntersection1110<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1110<T extends unknown[], V> = [...T, V];

type TuplifyUnion1110<T, L = LastOf1110<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1110<TuplifyUnion1110<Exclude<T, L>>, L>;

type DeepPartial1110<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1110<T[P]> }
  : T;

type Paths1110<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1110<K, Paths1110<T[K], Prev1110[D]>> : never }[keyof T]
  : never;

type Prev1110 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1110<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1110 {
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

type ConfigPaths1110 = Paths1110<NestedConfig1110>;

interface HeavyProps1110 {
  config: DeepPartial1110<NestedConfig1110>;
  path?: ConfigPaths1110;
}

const HeavyComponent1110 = memo(function HeavyComponent1110({ config }: HeavyProps1110) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1110) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1110 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1110: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1110.displayName = 'HeavyComponent1110';
export default HeavyComponent1110;
