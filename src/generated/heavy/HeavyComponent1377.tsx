'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1377<T> = T extends (infer U)[]
  ? DeepReadonlyArray1377<U>
  : T extends object
  ? DeepReadonlyObject1377<T>
  : T;

interface DeepReadonlyArray1377<T> extends ReadonlyArray<DeepReadonly1377<T>> {}

type DeepReadonlyObject1377<T> = {
  readonly [P in keyof T]: DeepReadonly1377<T[P]>;
};

type UnionToIntersection1377<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1377<T> = UnionToIntersection1377<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1377<T extends unknown[], V> = [...T, V];

type TuplifyUnion1377<T, L = LastOf1377<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1377<TuplifyUnion1377<Exclude<T, L>>, L>;

type DeepPartial1377<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1377<T[P]> }
  : T;

type Paths1377<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1377<K, Paths1377<T[K], Prev1377[D]>> : never }[keyof T]
  : never;

type Prev1377 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1377<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1377 {
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

type ConfigPaths1377 = Paths1377<NestedConfig1377>;

interface HeavyProps1377 {
  config: DeepPartial1377<NestedConfig1377>;
  path?: ConfigPaths1377;
}

const HeavyComponent1377 = memo(function HeavyComponent1377({ config }: HeavyProps1377) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1377) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1377 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1377: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1377.displayName = 'HeavyComponent1377';
export default HeavyComponent1377;
