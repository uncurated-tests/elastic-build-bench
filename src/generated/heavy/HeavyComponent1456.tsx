'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1456<T> = T extends (infer U)[]
  ? DeepReadonlyArray1456<U>
  : T extends object
  ? DeepReadonlyObject1456<T>
  : T;

interface DeepReadonlyArray1456<T> extends ReadonlyArray<DeepReadonly1456<T>> {}

type DeepReadonlyObject1456<T> = {
  readonly [P in keyof T]: DeepReadonly1456<T[P]>;
};

type UnionToIntersection1456<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1456<T> = UnionToIntersection1456<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1456<T extends unknown[], V> = [...T, V];

type TuplifyUnion1456<T, L = LastOf1456<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1456<TuplifyUnion1456<Exclude<T, L>>, L>;

type DeepPartial1456<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1456<T[P]> }
  : T;

type Paths1456<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1456<K, Paths1456<T[K], Prev1456[D]>> : never }[keyof T]
  : never;

type Prev1456 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1456<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1456 {
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

type ConfigPaths1456 = Paths1456<NestedConfig1456>;

interface HeavyProps1456 {
  config: DeepPartial1456<NestedConfig1456>;
  path?: ConfigPaths1456;
}

const HeavyComponent1456 = memo(function HeavyComponent1456({ config }: HeavyProps1456) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1456) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1456 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1456: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1456.displayName = 'HeavyComponent1456';
export default HeavyComponent1456;
