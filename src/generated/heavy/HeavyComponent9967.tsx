'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9967<T> = T extends (infer U)[]
  ? DeepReadonlyArray9967<U>
  : T extends object
  ? DeepReadonlyObject9967<T>
  : T;

interface DeepReadonlyArray9967<T> extends ReadonlyArray<DeepReadonly9967<T>> {}

type DeepReadonlyObject9967<T> = {
  readonly [P in keyof T]: DeepReadonly9967<T[P]>;
};

type UnionToIntersection9967<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9967<T> = UnionToIntersection9967<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9967<T extends unknown[], V> = [...T, V];

type TuplifyUnion9967<T, L = LastOf9967<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9967<TuplifyUnion9967<Exclude<T, L>>, L>;

type DeepPartial9967<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9967<T[P]> }
  : T;

type Paths9967<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9967<K, Paths9967<T[K], Prev9967[D]>> : never }[keyof T]
  : never;

type Prev9967 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9967<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9967 {
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

type ConfigPaths9967 = Paths9967<NestedConfig9967>;

interface HeavyProps9967 {
  config: DeepPartial9967<NestedConfig9967>;
  path?: ConfigPaths9967;
}

const HeavyComponent9967 = memo(function HeavyComponent9967({ config }: HeavyProps9967) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9967) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9967 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9967: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9967.displayName = 'HeavyComponent9967';
export default HeavyComponent9967;
