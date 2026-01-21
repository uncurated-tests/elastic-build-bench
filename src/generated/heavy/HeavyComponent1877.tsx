'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1877<T> = T extends (infer U)[]
  ? DeepReadonlyArray1877<U>
  : T extends object
  ? DeepReadonlyObject1877<T>
  : T;

interface DeepReadonlyArray1877<T> extends ReadonlyArray<DeepReadonly1877<T>> {}

type DeepReadonlyObject1877<T> = {
  readonly [P in keyof T]: DeepReadonly1877<T[P]>;
};

type UnionToIntersection1877<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1877<T> = UnionToIntersection1877<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1877<T extends unknown[], V> = [...T, V];

type TuplifyUnion1877<T, L = LastOf1877<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1877<TuplifyUnion1877<Exclude<T, L>>, L>;

type DeepPartial1877<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1877<T[P]> }
  : T;

type Paths1877<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1877<K, Paths1877<T[K], Prev1877[D]>> : never }[keyof T]
  : never;

type Prev1877 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1877<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1877 {
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

type ConfigPaths1877 = Paths1877<NestedConfig1877>;

interface HeavyProps1877 {
  config: DeepPartial1877<NestedConfig1877>;
  path?: ConfigPaths1877;
}

const HeavyComponent1877 = memo(function HeavyComponent1877({ config }: HeavyProps1877) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1877) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1877 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1877: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1877.displayName = 'HeavyComponent1877';
export default HeavyComponent1877;
