'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1886<T> = T extends (infer U)[]
  ? DeepReadonlyArray1886<U>
  : T extends object
  ? DeepReadonlyObject1886<T>
  : T;

interface DeepReadonlyArray1886<T> extends ReadonlyArray<DeepReadonly1886<T>> {}

type DeepReadonlyObject1886<T> = {
  readonly [P in keyof T]: DeepReadonly1886<T[P]>;
};

type UnionToIntersection1886<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1886<T> = UnionToIntersection1886<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1886<T extends unknown[], V> = [...T, V];

type TuplifyUnion1886<T, L = LastOf1886<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1886<TuplifyUnion1886<Exclude<T, L>>, L>;

type DeepPartial1886<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1886<T[P]> }
  : T;

type Paths1886<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1886<K, Paths1886<T[K], Prev1886[D]>> : never }[keyof T]
  : never;

type Prev1886 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1886<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1886 {
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

type ConfigPaths1886 = Paths1886<NestedConfig1886>;

interface HeavyProps1886 {
  config: DeepPartial1886<NestedConfig1886>;
  path?: ConfigPaths1886;
}

const HeavyComponent1886 = memo(function HeavyComponent1886({ config }: HeavyProps1886) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1886) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1886 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1886: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1886.displayName = 'HeavyComponent1886';
export default HeavyComponent1886;
