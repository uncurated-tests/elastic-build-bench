'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1648<T> = T extends (infer U)[]
  ? DeepReadonlyArray1648<U>
  : T extends object
  ? DeepReadonlyObject1648<T>
  : T;

interface DeepReadonlyArray1648<T> extends ReadonlyArray<DeepReadonly1648<T>> {}

type DeepReadonlyObject1648<T> = {
  readonly [P in keyof T]: DeepReadonly1648<T[P]>;
};

type UnionToIntersection1648<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1648<T> = UnionToIntersection1648<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1648<T extends unknown[], V> = [...T, V];

type TuplifyUnion1648<T, L = LastOf1648<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1648<TuplifyUnion1648<Exclude<T, L>>, L>;

type DeepPartial1648<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1648<T[P]> }
  : T;

type Paths1648<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1648<K, Paths1648<T[K], Prev1648[D]>> : never }[keyof T]
  : never;

type Prev1648 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1648<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1648 {
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

type ConfigPaths1648 = Paths1648<NestedConfig1648>;

interface HeavyProps1648 {
  config: DeepPartial1648<NestedConfig1648>;
  path?: ConfigPaths1648;
}

const HeavyComponent1648 = memo(function HeavyComponent1648({ config }: HeavyProps1648) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1648) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1648 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1648: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1648.displayName = 'HeavyComponent1648';
export default HeavyComponent1648;
