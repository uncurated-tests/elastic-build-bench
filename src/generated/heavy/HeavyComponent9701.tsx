'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9701<T> = T extends (infer U)[]
  ? DeepReadonlyArray9701<U>
  : T extends object
  ? DeepReadonlyObject9701<T>
  : T;

interface DeepReadonlyArray9701<T> extends ReadonlyArray<DeepReadonly9701<T>> {}

type DeepReadonlyObject9701<T> = {
  readonly [P in keyof T]: DeepReadonly9701<T[P]>;
};

type UnionToIntersection9701<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9701<T> = UnionToIntersection9701<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9701<T extends unknown[], V> = [...T, V];

type TuplifyUnion9701<T, L = LastOf9701<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9701<TuplifyUnion9701<Exclude<T, L>>, L>;

type DeepPartial9701<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9701<T[P]> }
  : T;

type Paths9701<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9701<K, Paths9701<T[K], Prev9701[D]>> : never }[keyof T]
  : never;

type Prev9701 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9701<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9701 {
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

type ConfigPaths9701 = Paths9701<NestedConfig9701>;

interface HeavyProps9701 {
  config: DeepPartial9701<NestedConfig9701>;
  path?: ConfigPaths9701;
}

const HeavyComponent9701 = memo(function HeavyComponent9701({ config }: HeavyProps9701) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9701) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9701 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9701: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9701.displayName = 'HeavyComponent9701';
export default HeavyComponent9701;
