'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1844<T> = T extends (infer U)[]
  ? DeepReadonlyArray1844<U>
  : T extends object
  ? DeepReadonlyObject1844<T>
  : T;

interface DeepReadonlyArray1844<T> extends ReadonlyArray<DeepReadonly1844<T>> {}

type DeepReadonlyObject1844<T> = {
  readonly [P in keyof T]: DeepReadonly1844<T[P]>;
};

type UnionToIntersection1844<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1844<T> = UnionToIntersection1844<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1844<T extends unknown[], V> = [...T, V];

type TuplifyUnion1844<T, L = LastOf1844<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1844<TuplifyUnion1844<Exclude<T, L>>, L>;

type DeepPartial1844<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1844<T[P]> }
  : T;

type Paths1844<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1844<K, Paths1844<T[K], Prev1844[D]>> : never }[keyof T]
  : never;

type Prev1844 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1844<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1844 {
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

type ConfigPaths1844 = Paths1844<NestedConfig1844>;

interface HeavyProps1844 {
  config: DeepPartial1844<NestedConfig1844>;
  path?: ConfigPaths1844;
}

const HeavyComponent1844 = memo(function HeavyComponent1844({ config }: HeavyProps1844) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1844) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1844 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1844: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1844.displayName = 'HeavyComponent1844';
export default HeavyComponent1844;
