'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1782<T> = T extends (infer U)[]
  ? DeepReadonlyArray1782<U>
  : T extends object
  ? DeepReadonlyObject1782<T>
  : T;

interface DeepReadonlyArray1782<T> extends ReadonlyArray<DeepReadonly1782<T>> {}

type DeepReadonlyObject1782<T> = {
  readonly [P in keyof T]: DeepReadonly1782<T[P]>;
};

type UnionToIntersection1782<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1782<T> = UnionToIntersection1782<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1782<T extends unknown[], V> = [...T, V];

type TuplifyUnion1782<T, L = LastOf1782<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1782<TuplifyUnion1782<Exclude<T, L>>, L>;

type DeepPartial1782<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1782<T[P]> }
  : T;

type Paths1782<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1782<K, Paths1782<T[K], Prev1782[D]>> : never }[keyof T]
  : never;

type Prev1782 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1782<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1782 {
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

type ConfigPaths1782 = Paths1782<NestedConfig1782>;

interface HeavyProps1782 {
  config: DeepPartial1782<NestedConfig1782>;
  path?: ConfigPaths1782;
}

const HeavyComponent1782 = memo(function HeavyComponent1782({ config }: HeavyProps1782) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1782) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1782 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1782: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1782.displayName = 'HeavyComponent1782';
export default HeavyComponent1782;
