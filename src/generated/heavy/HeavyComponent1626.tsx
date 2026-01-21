'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1626<T> = T extends (infer U)[]
  ? DeepReadonlyArray1626<U>
  : T extends object
  ? DeepReadonlyObject1626<T>
  : T;

interface DeepReadonlyArray1626<T> extends ReadonlyArray<DeepReadonly1626<T>> {}

type DeepReadonlyObject1626<T> = {
  readonly [P in keyof T]: DeepReadonly1626<T[P]>;
};

type UnionToIntersection1626<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1626<T> = UnionToIntersection1626<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1626<T extends unknown[], V> = [...T, V];

type TuplifyUnion1626<T, L = LastOf1626<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1626<TuplifyUnion1626<Exclude<T, L>>, L>;

type DeepPartial1626<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1626<T[P]> }
  : T;

type Paths1626<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1626<K, Paths1626<T[K], Prev1626[D]>> : never }[keyof T]
  : never;

type Prev1626 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1626<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1626 {
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

type ConfigPaths1626 = Paths1626<NestedConfig1626>;

interface HeavyProps1626 {
  config: DeepPartial1626<NestedConfig1626>;
  path?: ConfigPaths1626;
}

const HeavyComponent1626 = memo(function HeavyComponent1626({ config }: HeavyProps1626) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1626) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1626 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1626: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1626.displayName = 'HeavyComponent1626';
export default HeavyComponent1626;
