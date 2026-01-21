'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1294<T> = T extends (infer U)[]
  ? DeepReadonlyArray1294<U>
  : T extends object
  ? DeepReadonlyObject1294<T>
  : T;

interface DeepReadonlyArray1294<T> extends ReadonlyArray<DeepReadonly1294<T>> {}

type DeepReadonlyObject1294<T> = {
  readonly [P in keyof T]: DeepReadonly1294<T[P]>;
};

type UnionToIntersection1294<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1294<T> = UnionToIntersection1294<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1294<T extends unknown[], V> = [...T, V];

type TuplifyUnion1294<T, L = LastOf1294<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1294<TuplifyUnion1294<Exclude<T, L>>, L>;

type DeepPartial1294<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1294<T[P]> }
  : T;

type Paths1294<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1294<K, Paths1294<T[K], Prev1294[D]>> : never }[keyof T]
  : never;

type Prev1294 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1294<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1294 {
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

type ConfigPaths1294 = Paths1294<NestedConfig1294>;

interface HeavyProps1294 {
  config: DeepPartial1294<NestedConfig1294>;
  path?: ConfigPaths1294;
}

const HeavyComponent1294 = memo(function HeavyComponent1294({ config }: HeavyProps1294) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1294) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1294 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1294: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1294.displayName = 'HeavyComponent1294';
export default HeavyComponent1294;
