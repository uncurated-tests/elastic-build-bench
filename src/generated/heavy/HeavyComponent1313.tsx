'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1313<T> = T extends (infer U)[]
  ? DeepReadonlyArray1313<U>
  : T extends object
  ? DeepReadonlyObject1313<T>
  : T;

interface DeepReadonlyArray1313<T> extends ReadonlyArray<DeepReadonly1313<T>> {}

type DeepReadonlyObject1313<T> = {
  readonly [P in keyof T]: DeepReadonly1313<T[P]>;
};

type UnionToIntersection1313<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1313<T> = UnionToIntersection1313<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1313<T extends unknown[], V> = [...T, V];

type TuplifyUnion1313<T, L = LastOf1313<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1313<TuplifyUnion1313<Exclude<T, L>>, L>;

type DeepPartial1313<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1313<T[P]> }
  : T;

type Paths1313<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1313<K, Paths1313<T[K], Prev1313[D]>> : never }[keyof T]
  : never;

type Prev1313 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1313<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1313 {
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

type ConfigPaths1313 = Paths1313<NestedConfig1313>;

interface HeavyProps1313 {
  config: DeepPartial1313<NestedConfig1313>;
  path?: ConfigPaths1313;
}

const HeavyComponent1313 = memo(function HeavyComponent1313({ config }: HeavyProps1313) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1313) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1313 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1313: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1313.displayName = 'HeavyComponent1313';
export default HeavyComponent1313;
