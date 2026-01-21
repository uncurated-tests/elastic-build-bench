'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1558<T> = T extends (infer U)[]
  ? DeepReadonlyArray1558<U>
  : T extends object
  ? DeepReadonlyObject1558<T>
  : T;

interface DeepReadonlyArray1558<T> extends ReadonlyArray<DeepReadonly1558<T>> {}

type DeepReadonlyObject1558<T> = {
  readonly [P in keyof T]: DeepReadonly1558<T[P]>;
};

type UnionToIntersection1558<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1558<T> = UnionToIntersection1558<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1558<T extends unknown[], V> = [...T, V];

type TuplifyUnion1558<T, L = LastOf1558<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1558<TuplifyUnion1558<Exclude<T, L>>, L>;

type DeepPartial1558<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1558<T[P]> }
  : T;

type Paths1558<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1558<K, Paths1558<T[K], Prev1558[D]>> : never }[keyof T]
  : never;

type Prev1558 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1558<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1558 {
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

type ConfigPaths1558 = Paths1558<NestedConfig1558>;

interface HeavyProps1558 {
  config: DeepPartial1558<NestedConfig1558>;
  path?: ConfigPaths1558;
}

const HeavyComponent1558 = memo(function HeavyComponent1558({ config }: HeavyProps1558) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1558) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1558 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1558: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1558.displayName = 'HeavyComponent1558';
export default HeavyComponent1558;
