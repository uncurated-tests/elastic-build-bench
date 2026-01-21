'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1875<T> = T extends (infer U)[]
  ? DeepReadonlyArray1875<U>
  : T extends object
  ? DeepReadonlyObject1875<T>
  : T;

interface DeepReadonlyArray1875<T> extends ReadonlyArray<DeepReadonly1875<T>> {}

type DeepReadonlyObject1875<T> = {
  readonly [P in keyof T]: DeepReadonly1875<T[P]>;
};

type UnionToIntersection1875<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1875<T> = UnionToIntersection1875<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1875<T extends unknown[], V> = [...T, V];

type TuplifyUnion1875<T, L = LastOf1875<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1875<TuplifyUnion1875<Exclude<T, L>>, L>;

type DeepPartial1875<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1875<T[P]> }
  : T;

type Paths1875<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1875<K, Paths1875<T[K], Prev1875[D]>> : never }[keyof T]
  : never;

type Prev1875 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1875<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1875 {
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

type ConfigPaths1875 = Paths1875<NestedConfig1875>;

interface HeavyProps1875 {
  config: DeepPartial1875<NestedConfig1875>;
  path?: ConfigPaths1875;
}

const HeavyComponent1875 = memo(function HeavyComponent1875({ config }: HeavyProps1875) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1875) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1875 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1875: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1875.displayName = 'HeavyComponent1875';
export default HeavyComponent1875;
