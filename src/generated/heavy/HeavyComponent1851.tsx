'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1851<T> = T extends (infer U)[]
  ? DeepReadonlyArray1851<U>
  : T extends object
  ? DeepReadonlyObject1851<T>
  : T;

interface DeepReadonlyArray1851<T> extends ReadonlyArray<DeepReadonly1851<T>> {}

type DeepReadonlyObject1851<T> = {
  readonly [P in keyof T]: DeepReadonly1851<T[P]>;
};

type UnionToIntersection1851<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1851<T> = UnionToIntersection1851<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1851<T extends unknown[], V> = [...T, V];

type TuplifyUnion1851<T, L = LastOf1851<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1851<TuplifyUnion1851<Exclude<T, L>>, L>;

type DeepPartial1851<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1851<T[P]> }
  : T;

type Paths1851<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1851<K, Paths1851<T[K], Prev1851[D]>> : never }[keyof T]
  : never;

type Prev1851 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1851<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1851 {
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

type ConfigPaths1851 = Paths1851<NestedConfig1851>;

interface HeavyProps1851 {
  config: DeepPartial1851<NestedConfig1851>;
  path?: ConfigPaths1851;
}

const HeavyComponent1851 = memo(function HeavyComponent1851({ config }: HeavyProps1851) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1851) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1851 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1851: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1851.displayName = 'HeavyComponent1851';
export default HeavyComponent1851;
