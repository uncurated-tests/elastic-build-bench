'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1102<T> = T extends (infer U)[]
  ? DeepReadonlyArray1102<U>
  : T extends object
  ? DeepReadonlyObject1102<T>
  : T;

interface DeepReadonlyArray1102<T> extends ReadonlyArray<DeepReadonly1102<T>> {}

type DeepReadonlyObject1102<T> = {
  readonly [P in keyof T]: DeepReadonly1102<T[P]>;
};

type UnionToIntersection1102<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1102<T> = UnionToIntersection1102<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1102<T extends unknown[], V> = [...T, V];

type TuplifyUnion1102<T, L = LastOf1102<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1102<TuplifyUnion1102<Exclude<T, L>>, L>;

type DeepPartial1102<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1102<T[P]> }
  : T;

type Paths1102<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1102<K, Paths1102<T[K], Prev1102[D]>> : never }[keyof T]
  : never;

type Prev1102 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1102<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1102 {
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

type ConfigPaths1102 = Paths1102<NestedConfig1102>;

interface HeavyProps1102 {
  config: DeepPartial1102<NestedConfig1102>;
  path?: ConfigPaths1102;
}

const HeavyComponent1102 = memo(function HeavyComponent1102({ config }: HeavyProps1102) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1102) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1102 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1102: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1102.displayName = 'HeavyComponent1102';
export default HeavyComponent1102;
