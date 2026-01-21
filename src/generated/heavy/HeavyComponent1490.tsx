'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1490<T> = T extends (infer U)[]
  ? DeepReadonlyArray1490<U>
  : T extends object
  ? DeepReadonlyObject1490<T>
  : T;

interface DeepReadonlyArray1490<T> extends ReadonlyArray<DeepReadonly1490<T>> {}

type DeepReadonlyObject1490<T> = {
  readonly [P in keyof T]: DeepReadonly1490<T[P]>;
};

type UnionToIntersection1490<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1490<T> = UnionToIntersection1490<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1490<T extends unknown[], V> = [...T, V];

type TuplifyUnion1490<T, L = LastOf1490<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1490<TuplifyUnion1490<Exclude<T, L>>, L>;

type DeepPartial1490<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1490<T[P]> }
  : T;

type Paths1490<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1490<K, Paths1490<T[K], Prev1490[D]>> : never }[keyof T]
  : never;

type Prev1490 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1490<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1490 {
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

type ConfigPaths1490 = Paths1490<NestedConfig1490>;

interface HeavyProps1490 {
  config: DeepPartial1490<NestedConfig1490>;
  path?: ConfigPaths1490;
}

const HeavyComponent1490 = memo(function HeavyComponent1490({ config }: HeavyProps1490) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1490) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1490 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1490: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1490.displayName = 'HeavyComponent1490';
export default HeavyComponent1490;
