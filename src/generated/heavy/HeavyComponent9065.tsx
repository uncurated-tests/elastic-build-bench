'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9065<T> = T extends (infer U)[]
  ? DeepReadonlyArray9065<U>
  : T extends object
  ? DeepReadonlyObject9065<T>
  : T;

interface DeepReadonlyArray9065<T> extends ReadonlyArray<DeepReadonly9065<T>> {}

type DeepReadonlyObject9065<T> = {
  readonly [P in keyof T]: DeepReadonly9065<T[P]>;
};

type UnionToIntersection9065<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9065<T> = UnionToIntersection9065<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9065<T extends unknown[], V> = [...T, V];

type TuplifyUnion9065<T, L = LastOf9065<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9065<TuplifyUnion9065<Exclude<T, L>>, L>;

type DeepPartial9065<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9065<T[P]> }
  : T;

type Paths9065<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9065<K, Paths9065<T[K], Prev9065[D]>> : never }[keyof T]
  : never;

type Prev9065 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9065<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9065 {
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

type ConfigPaths9065 = Paths9065<NestedConfig9065>;

interface HeavyProps9065 {
  config: DeepPartial9065<NestedConfig9065>;
  path?: ConfigPaths9065;
}

const HeavyComponent9065 = memo(function HeavyComponent9065({ config }: HeavyProps9065) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9065) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9065 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9065: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9065.displayName = 'HeavyComponent9065';
export default HeavyComponent9065;
