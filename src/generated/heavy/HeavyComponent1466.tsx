'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1466<T> = T extends (infer U)[]
  ? DeepReadonlyArray1466<U>
  : T extends object
  ? DeepReadonlyObject1466<T>
  : T;

interface DeepReadonlyArray1466<T> extends ReadonlyArray<DeepReadonly1466<T>> {}

type DeepReadonlyObject1466<T> = {
  readonly [P in keyof T]: DeepReadonly1466<T[P]>;
};

type UnionToIntersection1466<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1466<T> = UnionToIntersection1466<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1466<T extends unknown[], V> = [...T, V];

type TuplifyUnion1466<T, L = LastOf1466<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1466<TuplifyUnion1466<Exclude<T, L>>, L>;

type DeepPartial1466<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1466<T[P]> }
  : T;

type Paths1466<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1466<K, Paths1466<T[K], Prev1466[D]>> : never }[keyof T]
  : never;

type Prev1466 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1466<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1466 {
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

type ConfigPaths1466 = Paths1466<NestedConfig1466>;

interface HeavyProps1466 {
  config: DeepPartial1466<NestedConfig1466>;
  path?: ConfigPaths1466;
}

const HeavyComponent1466 = memo(function HeavyComponent1466({ config }: HeavyProps1466) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1466) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1466 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1466: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1466.displayName = 'HeavyComponent1466';
export default HeavyComponent1466;
