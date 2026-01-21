'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1355<T> = T extends (infer U)[]
  ? DeepReadonlyArray1355<U>
  : T extends object
  ? DeepReadonlyObject1355<T>
  : T;

interface DeepReadonlyArray1355<T> extends ReadonlyArray<DeepReadonly1355<T>> {}

type DeepReadonlyObject1355<T> = {
  readonly [P in keyof T]: DeepReadonly1355<T[P]>;
};

type UnionToIntersection1355<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1355<T> = UnionToIntersection1355<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1355<T extends unknown[], V> = [...T, V];

type TuplifyUnion1355<T, L = LastOf1355<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1355<TuplifyUnion1355<Exclude<T, L>>, L>;

type DeepPartial1355<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1355<T[P]> }
  : T;

type Paths1355<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1355<K, Paths1355<T[K], Prev1355[D]>> : never }[keyof T]
  : never;

type Prev1355 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1355<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1355 {
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

type ConfigPaths1355 = Paths1355<NestedConfig1355>;

interface HeavyProps1355 {
  config: DeepPartial1355<NestedConfig1355>;
  path?: ConfigPaths1355;
}

const HeavyComponent1355 = memo(function HeavyComponent1355({ config }: HeavyProps1355) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1355) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1355 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1355: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1355.displayName = 'HeavyComponent1355';
export default HeavyComponent1355;
