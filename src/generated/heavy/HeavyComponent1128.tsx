'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1128<T> = T extends (infer U)[]
  ? DeepReadonlyArray1128<U>
  : T extends object
  ? DeepReadonlyObject1128<T>
  : T;

interface DeepReadonlyArray1128<T> extends ReadonlyArray<DeepReadonly1128<T>> {}

type DeepReadonlyObject1128<T> = {
  readonly [P in keyof T]: DeepReadonly1128<T[P]>;
};

type UnionToIntersection1128<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1128<T> = UnionToIntersection1128<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1128<T extends unknown[], V> = [...T, V];

type TuplifyUnion1128<T, L = LastOf1128<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1128<TuplifyUnion1128<Exclude<T, L>>, L>;

type DeepPartial1128<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1128<T[P]> }
  : T;

type Paths1128<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1128<K, Paths1128<T[K], Prev1128[D]>> : never }[keyof T]
  : never;

type Prev1128 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1128<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1128 {
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

type ConfigPaths1128 = Paths1128<NestedConfig1128>;

interface HeavyProps1128 {
  config: DeepPartial1128<NestedConfig1128>;
  path?: ConfigPaths1128;
}

const HeavyComponent1128 = memo(function HeavyComponent1128({ config }: HeavyProps1128) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1128) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1128 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1128: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1128.displayName = 'HeavyComponent1128';
export default HeavyComponent1128;
