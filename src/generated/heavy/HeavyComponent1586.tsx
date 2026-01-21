'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1586<T> = T extends (infer U)[]
  ? DeepReadonlyArray1586<U>
  : T extends object
  ? DeepReadonlyObject1586<T>
  : T;

interface DeepReadonlyArray1586<T> extends ReadonlyArray<DeepReadonly1586<T>> {}

type DeepReadonlyObject1586<T> = {
  readonly [P in keyof T]: DeepReadonly1586<T[P]>;
};

type UnionToIntersection1586<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1586<T> = UnionToIntersection1586<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1586<T extends unknown[], V> = [...T, V];

type TuplifyUnion1586<T, L = LastOf1586<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1586<TuplifyUnion1586<Exclude<T, L>>, L>;

type DeepPartial1586<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1586<T[P]> }
  : T;

type Paths1586<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1586<K, Paths1586<T[K], Prev1586[D]>> : never }[keyof T]
  : never;

type Prev1586 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1586<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1586 {
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

type ConfigPaths1586 = Paths1586<NestedConfig1586>;

interface HeavyProps1586 {
  config: DeepPartial1586<NestedConfig1586>;
  path?: ConfigPaths1586;
}

const HeavyComponent1586 = memo(function HeavyComponent1586({ config }: HeavyProps1586) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1586) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1586 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1586: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1586.displayName = 'HeavyComponent1586';
export default HeavyComponent1586;
