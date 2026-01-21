'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9120<T> = T extends (infer U)[]
  ? DeepReadonlyArray9120<U>
  : T extends object
  ? DeepReadonlyObject9120<T>
  : T;

interface DeepReadonlyArray9120<T> extends ReadonlyArray<DeepReadonly9120<T>> {}

type DeepReadonlyObject9120<T> = {
  readonly [P in keyof T]: DeepReadonly9120<T[P]>;
};

type UnionToIntersection9120<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9120<T> = UnionToIntersection9120<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9120<T extends unknown[], V> = [...T, V];

type TuplifyUnion9120<T, L = LastOf9120<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9120<TuplifyUnion9120<Exclude<T, L>>, L>;

type DeepPartial9120<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9120<T[P]> }
  : T;

type Paths9120<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9120<K, Paths9120<T[K], Prev9120[D]>> : never }[keyof T]
  : never;

type Prev9120 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9120<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9120 {
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

type ConfigPaths9120 = Paths9120<NestedConfig9120>;

interface HeavyProps9120 {
  config: DeepPartial9120<NestedConfig9120>;
  path?: ConfigPaths9120;
}

const HeavyComponent9120 = memo(function HeavyComponent9120({ config }: HeavyProps9120) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9120) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9120 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9120: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9120.displayName = 'HeavyComponent9120';
export default HeavyComponent9120;
