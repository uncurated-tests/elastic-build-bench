'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1416<T> = T extends (infer U)[]
  ? DeepReadonlyArray1416<U>
  : T extends object
  ? DeepReadonlyObject1416<T>
  : T;

interface DeepReadonlyArray1416<T> extends ReadonlyArray<DeepReadonly1416<T>> {}

type DeepReadonlyObject1416<T> = {
  readonly [P in keyof T]: DeepReadonly1416<T[P]>;
};

type UnionToIntersection1416<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1416<T> = UnionToIntersection1416<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1416<T extends unknown[], V> = [...T, V];

type TuplifyUnion1416<T, L = LastOf1416<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1416<TuplifyUnion1416<Exclude<T, L>>, L>;

type DeepPartial1416<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1416<T[P]> }
  : T;

type Paths1416<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1416<K, Paths1416<T[K], Prev1416[D]>> : never }[keyof T]
  : never;

type Prev1416 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1416<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1416 {
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

type ConfigPaths1416 = Paths1416<NestedConfig1416>;

interface HeavyProps1416 {
  config: DeepPartial1416<NestedConfig1416>;
  path?: ConfigPaths1416;
}

const HeavyComponent1416 = memo(function HeavyComponent1416({ config }: HeavyProps1416) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1416) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1416 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1416: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1416.displayName = 'HeavyComponent1416';
export default HeavyComponent1416;
