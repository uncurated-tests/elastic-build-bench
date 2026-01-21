'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1002<T> = T extends (infer U)[]
  ? DeepReadonlyArray1002<U>
  : T extends object
  ? DeepReadonlyObject1002<T>
  : T;

interface DeepReadonlyArray1002<T> extends ReadonlyArray<DeepReadonly1002<T>> {}

type DeepReadonlyObject1002<T> = {
  readonly [P in keyof T]: DeepReadonly1002<T[P]>;
};

type UnionToIntersection1002<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1002<T> = UnionToIntersection1002<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1002<T extends unknown[], V> = [...T, V];

type TuplifyUnion1002<T, L = LastOf1002<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1002<TuplifyUnion1002<Exclude<T, L>>, L>;

type DeepPartial1002<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1002<T[P]> }
  : T;

type Paths1002<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1002<K, Paths1002<T[K], Prev1002[D]>> : never }[keyof T]
  : never;

type Prev1002 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1002<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1002 {
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

type ConfigPaths1002 = Paths1002<NestedConfig1002>;

interface HeavyProps1002 {
  config: DeepPartial1002<NestedConfig1002>;
  path?: ConfigPaths1002;
}

const HeavyComponent1002 = memo(function HeavyComponent1002({ config }: HeavyProps1002) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1002) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1002 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1002: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1002.displayName = 'HeavyComponent1002';
export default HeavyComponent1002;
