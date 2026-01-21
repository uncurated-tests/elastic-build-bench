'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1169<T> = T extends (infer U)[]
  ? DeepReadonlyArray1169<U>
  : T extends object
  ? DeepReadonlyObject1169<T>
  : T;

interface DeepReadonlyArray1169<T> extends ReadonlyArray<DeepReadonly1169<T>> {}

type DeepReadonlyObject1169<T> = {
  readonly [P in keyof T]: DeepReadonly1169<T[P]>;
};

type UnionToIntersection1169<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1169<T> = UnionToIntersection1169<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1169<T extends unknown[], V> = [...T, V];

type TuplifyUnion1169<T, L = LastOf1169<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1169<TuplifyUnion1169<Exclude<T, L>>, L>;

type DeepPartial1169<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1169<T[P]> }
  : T;

type Paths1169<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1169<K, Paths1169<T[K], Prev1169[D]>> : never }[keyof T]
  : never;

type Prev1169 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1169<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1169 {
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

type ConfigPaths1169 = Paths1169<NestedConfig1169>;

interface HeavyProps1169 {
  config: DeepPartial1169<NestedConfig1169>;
  path?: ConfigPaths1169;
}

const HeavyComponent1169 = memo(function HeavyComponent1169({ config }: HeavyProps1169) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1169) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1169 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1169: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1169.displayName = 'HeavyComponent1169';
export default HeavyComponent1169;
