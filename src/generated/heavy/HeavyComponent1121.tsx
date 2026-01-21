'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1121<T> = T extends (infer U)[]
  ? DeepReadonlyArray1121<U>
  : T extends object
  ? DeepReadonlyObject1121<T>
  : T;

interface DeepReadonlyArray1121<T> extends ReadonlyArray<DeepReadonly1121<T>> {}

type DeepReadonlyObject1121<T> = {
  readonly [P in keyof T]: DeepReadonly1121<T[P]>;
};

type UnionToIntersection1121<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1121<T> = UnionToIntersection1121<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1121<T extends unknown[], V> = [...T, V];

type TuplifyUnion1121<T, L = LastOf1121<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1121<TuplifyUnion1121<Exclude<T, L>>, L>;

type DeepPartial1121<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1121<T[P]> }
  : T;

type Paths1121<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1121<K, Paths1121<T[K], Prev1121[D]>> : never }[keyof T]
  : never;

type Prev1121 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1121<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1121 {
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

type ConfigPaths1121 = Paths1121<NestedConfig1121>;

interface HeavyProps1121 {
  config: DeepPartial1121<NestedConfig1121>;
  path?: ConfigPaths1121;
}

const HeavyComponent1121 = memo(function HeavyComponent1121({ config }: HeavyProps1121) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1121) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1121 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1121: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1121.displayName = 'HeavyComponent1121';
export default HeavyComponent1121;
