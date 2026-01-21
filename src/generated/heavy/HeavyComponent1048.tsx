'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1048<T> = T extends (infer U)[]
  ? DeepReadonlyArray1048<U>
  : T extends object
  ? DeepReadonlyObject1048<T>
  : T;

interface DeepReadonlyArray1048<T> extends ReadonlyArray<DeepReadonly1048<T>> {}

type DeepReadonlyObject1048<T> = {
  readonly [P in keyof T]: DeepReadonly1048<T[P]>;
};

type UnionToIntersection1048<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1048<T> = UnionToIntersection1048<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1048<T extends unknown[], V> = [...T, V];

type TuplifyUnion1048<T, L = LastOf1048<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1048<TuplifyUnion1048<Exclude<T, L>>, L>;

type DeepPartial1048<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1048<T[P]> }
  : T;

type Paths1048<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1048<K, Paths1048<T[K], Prev1048[D]>> : never }[keyof T]
  : never;

type Prev1048 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1048<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1048 {
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

type ConfigPaths1048 = Paths1048<NestedConfig1048>;

interface HeavyProps1048 {
  config: DeepPartial1048<NestedConfig1048>;
  path?: ConfigPaths1048;
}

const HeavyComponent1048 = memo(function HeavyComponent1048({ config }: HeavyProps1048) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1048) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1048 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1048: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1048.displayName = 'HeavyComponent1048';
export default HeavyComponent1048;
