'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1248<T> = T extends (infer U)[]
  ? DeepReadonlyArray1248<U>
  : T extends object
  ? DeepReadonlyObject1248<T>
  : T;

interface DeepReadonlyArray1248<T> extends ReadonlyArray<DeepReadonly1248<T>> {}

type DeepReadonlyObject1248<T> = {
  readonly [P in keyof T]: DeepReadonly1248<T[P]>;
};

type UnionToIntersection1248<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1248<T> = UnionToIntersection1248<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1248<T extends unknown[], V> = [...T, V];

type TuplifyUnion1248<T, L = LastOf1248<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1248<TuplifyUnion1248<Exclude<T, L>>, L>;

type DeepPartial1248<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1248<T[P]> }
  : T;

type Paths1248<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1248<K, Paths1248<T[K], Prev1248[D]>> : never }[keyof T]
  : never;

type Prev1248 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1248<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1248 {
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

type ConfigPaths1248 = Paths1248<NestedConfig1248>;

interface HeavyProps1248 {
  config: DeepPartial1248<NestedConfig1248>;
  path?: ConfigPaths1248;
}

const HeavyComponent1248 = memo(function HeavyComponent1248({ config }: HeavyProps1248) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1248) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1248 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1248: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1248.displayName = 'HeavyComponent1248';
export default HeavyComponent1248;
