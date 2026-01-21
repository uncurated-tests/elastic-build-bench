'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1348<T> = T extends (infer U)[]
  ? DeepReadonlyArray1348<U>
  : T extends object
  ? DeepReadonlyObject1348<T>
  : T;

interface DeepReadonlyArray1348<T> extends ReadonlyArray<DeepReadonly1348<T>> {}

type DeepReadonlyObject1348<T> = {
  readonly [P in keyof T]: DeepReadonly1348<T[P]>;
};

type UnionToIntersection1348<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1348<T> = UnionToIntersection1348<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1348<T extends unknown[], V> = [...T, V];

type TuplifyUnion1348<T, L = LastOf1348<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1348<TuplifyUnion1348<Exclude<T, L>>, L>;

type DeepPartial1348<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1348<T[P]> }
  : T;

type Paths1348<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1348<K, Paths1348<T[K], Prev1348[D]>> : never }[keyof T]
  : never;

type Prev1348 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1348<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1348 {
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

type ConfigPaths1348 = Paths1348<NestedConfig1348>;

interface HeavyProps1348 {
  config: DeepPartial1348<NestedConfig1348>;
  path?: ConfigPaths1348;
}

const HeavyComponent1348 = memo(function HeavyComponent1348({ config }: HeavyProps1348) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1348) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1348 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1348: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1348.displayName = 'HeavyComponent1348';
export default HeavyComponent1348;
