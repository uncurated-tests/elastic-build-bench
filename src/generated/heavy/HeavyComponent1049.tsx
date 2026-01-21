'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1049<T> = T extends (infer U)[]
  ? DeepReadonlyArray1049<U>
  : T extends object
  ? DeepReadonlyObject1049<T>
  : T;

interface DeepReadonlyArray1049<T> extends ReadonlyArray<DeepReadonly1049<T>> {}

type DeepReadonlyObject1049<T> = {
  readonly [P in keyof T]: DeepReadonly1049<T[P]>;
};

type UnionToIntersection1049<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1049<T> = UnionToIntersection1049<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1049<T extends unknown[], V> = [...T, V];

type TuplifyUnion1049<T, L = LastOf1049<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1049<TuplifyUnion1049<Exclude<T, L>>, L>;

type DeepPartial1049<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1049<T[P]> }
  : T;

type Paths1049<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1049<K, Paths1049<T[K], Prev1049[D]>> : never }[keyof T]
  : never;

type Prev1049 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1049<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1049 {
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

type ConfigPaths1049 = Paths1049<NestedConfig1049>;

interface HeavyProps1049 {
  config: DeepPartial1049<NestedConfig1049>;
  path?: ConfigPaths1049;
}

const HeavyComponent1049 = memo(function HeavyComponent1049({ config }: HeavyProps1049) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1049) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1049 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1049: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1049.displayName = 'HeavyComponent1049';
export default HeavyComponent1049;
