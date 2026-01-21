'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9477<T> = T extends (infer U)[]
  ? DeepReadonlyArray9477<U>
  : T extends object
  ? DeepReadonlyObject9477<T>
  : T;

interface DeepReadonlyArray9477<T> extends ReadonlyArray<DeepReadonly9477<T>> {}

type DeepReadonlyObject9477<T> = {
  readonly [P in keyof T]: DeepReadonly9477<T[P]>;
};

type UnionToIntersection9477<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9477<T> = UnionToIntersection9477<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9477<T extends unknown[], V> = [...T, V];

type TuplifyUnion9477<T, L = LastOf9477<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9477<TuplifyUnion9477<Exclude<T, L>>, L>;

type DeepPartial9477<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9477<T[P]> }
  : T;

type Paths9477<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9477<K, Paths9477<T[K], Prev9477[D]>> : never }[keyof T]
  : never;

type Prev9477 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9477<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9477 {
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

type ConfigPaths9477 = Paths9477<NestedConfig9477>;

interface HeavyProps9477 {
  config: DeepPartial9477<NestedConfig9477>;
  path?: ConfigPaths9477;
}

const HeavyComponent9477 = memo(function HeavyComponent9477({ config }: HeavyProps9477) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9477) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9477 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9477: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9477.displayName = 'HeavyComponent9477';
export default HeavyComponent9477;
