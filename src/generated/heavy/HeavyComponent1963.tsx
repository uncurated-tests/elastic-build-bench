'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1963<T> = T extends (infer U)[]
  ? DeepReadonlyArray1963<U>
  : T extends object
  ? DeepReadonlyObject1963<T>
  : T;

interface DeepReadonlyArray1963<T> extends ReadonlyArray<DeepReadonly1963<T>> {}

type DeepReadonlyObject1963<T> = {
  readonly [P in keyof T]: DeepReadonly1963<T[P]>;
};

type UnionToIntersection1963<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1963<T> = UnionToIntersection1963<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1963<T extends unknown[], V> = [...T, V];

type TuplifyUnion1963<T, L = LastOf1963<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1963<TuplifyUnion1963<Exclude<T, L>>, L>;

type DeepPartial1963<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1963<T[P]> }
  : T;

type Paths1963<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1963<K, Paths1963<T[K], Prev1963[D]>> : never }[keyof T]
  : never;

type Prev1963 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1963<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1963 {
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

type ConfigPaths1963 = Paths1963<NestedConfig1963>;

interface HeavyProps1963 {
  config: DeepPartial1963<NestedConfig1963>;
  path?: ConfigPaths1963;
}

const HeavyComponent1963 = memo(function HeavyComponent1963({ config }: HeavyProps1963) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1963) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1963 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1963: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1963.displayName = 'HeavyComponent1963';
export default HeavyComponent1963;
