'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9914<T> = T extends (infer U)[]
  ? DeepReadonlyArray9914<U>
  : T extends object
  ? DeepReadonlyObject9914<T>
  : T;

interface DeepReadonlyArray9914<T> extends ReadonlyArray<DeepReadonly9914<T>> {}

type DeepReadonlyObject9914<T> = {
  readonly [P in keyof T]: DeepReadonly9914<T[P]>;
};

type UnionToIntersection9914<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9914<T> = UnionToIntersection9914<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9914<T extends unknown[], V> = [...T, V];

type TuplifyUnion9914<T, L = LastOf9914<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9914<TuplifyUnion9914<Exclude<T, L>>, L>;

type DeepPartial9914<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9914<T[P]> }
  : T;

type Paths9914<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9914<K, Paths9914<T[K], Prev9914[D]>> : never }[keyof T]
  : never;

type Prev9914 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9914<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9914 {
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

type ConfigPaths9914 = Paths9914<NestedConfig9914>;

interface HeavyProps9914 {
  config: DeepPartial9914<NestedConfig9914>;
  path?: ConfigPaths9914;
}

const HeavyComponent9914 = memo(function HeavyComponent9914({ config }: HeavyProps9914) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9914) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9914 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9914: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9914.displayName = 'HeavyComponent9914';
export default HeavyComponent9914;
