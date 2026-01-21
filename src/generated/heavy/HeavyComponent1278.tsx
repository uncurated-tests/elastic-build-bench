'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1278<T> = T extends (infer U)[]
  ? DeepReadonlyArray1278<U>
  : T extends object
  ? DeepReadonlyObject1278<T>
  : T;

interface DeepReadonlyArray1278<T> extends ReadonlyArray<DeepReadonly1278<T>> {}

type DeepReadonlyObject1278<T> = {
  readonly [P in keyof T]: DeepReadonly1278<T[P]>;
};

type UnionToIntersection1278<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1278<T> = UnionToIntersection1278<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1278<T extends unknown[], V> = [...T, V];

type TuplifyUnion1278<T, L = LastOf1278<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1278<TuplifyUnion1278<Exclude<T, L>>, L>;

type DeepPartial1278<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1278<T[P]> }
  : T;

type Paths1278<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1278<K, Paths1278<T[K], Prev1278[D]>> : never }[keyof T]
  : never;

type Prev1278 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1278<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1278 {
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

type ConfigPaths1278 = Paths1278<NestedConfig1278>;

interface HeavyProps1278 {
  config: DeepPartial1278<NestedConfig1278>;
  path?: ConfigPaths1278;
}

const HeavyComponent1278 = memo(function HeavyComponent1278({ config }: HeavyProps1278) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1278) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1278 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1278: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1278.displayName = 'HeavyComponent1278';
export default HeavyComponent1278;
