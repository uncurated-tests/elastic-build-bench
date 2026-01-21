'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9160<T> = T extends (infer U)[]
  ? DeepReadonlyArray9160<U>
  : T extends object
  ? DeepReadonlyObject9160<T>
  : T;

interface DeepReadonlyArray9160<T> extends ReadonlyArray<DeepReadonly9160<T>> {}

type DeepReadonlyObject9160<T> = {
  readonly [P in keyof T]: DeepReadonly9160<T[P]>;
};

type UnionToIntersection9160<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9160<T> = UnionToIntersection9160<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9160<T extends unknown[], V> = [...T, V];

type TuplifyUnion9160<T, L = LastOf9160<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9160<TuplifyUnion9160<Exclude<T, L>>, L>;

type DeepPartial9160<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9160<T[P]> }
  : T;

type Paths9160<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9160<K, Paths9160<T[K], Prev9160[D]>> : never }[keyof T]
  : never;

type Prev9160 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9160<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9160 {
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

type ConfigPaths9160 = Paths9160<NestedConfig9160>;

interface HeavyProps9160 {
  config: DeepPartial9160<NestedConfig9160>;
  path?: ConfigPaths9160;
}

const HeavyComponent9160 = memo(function HeavyComponent9160({ config }: HeavyProps9160) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9160) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9160 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9160: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9160.displayName = 'HeavyComponent9160';
export default HeavyComponent9160;
