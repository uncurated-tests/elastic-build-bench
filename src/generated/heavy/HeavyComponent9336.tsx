'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9336<T> = T extends (infer U)[]
  ? DeepReadonlyArray9336<U>
  : T extends object
  ? DeepReadonlyObject9336<T>
  : T;

interface DeepReadonlyArray9336<T> extends ReadonlyArray<DeepReadonly9336<T>> {}

type DeepReadonlyObject9336<T> = {
  readonly [P in keyof T]: DeepReadonly9336<T[P]>;
};

type UnionToIntersection9336<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9336<T> = UnionToIntersection9336<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9336<T extends unknown[], V> = [...T, V];

type TuplifyUnion9336<T, L = LastOf9336<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9336<TuplifyUnion9336<Exclude<T, L>>, L>;

type DeepPartial9336<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9336<T[P]> }
  : T;

type Paths9336<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9336<K, Paths9336<T[K], Prev9336[D]>> : never }[keyof T]
  : never;

type Prev9336 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9336<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9336 {
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

type ConfigPaths9336 = Paths9336<NestedConfig9336>;

interface HeavyProps9336 {
  config: DeepPartial9336<NestedConfig9336>;
  path?: ConfigPaths9336;
}

const HeavyComponent9336 = memo(function HeavyComponent9336({ config }: HeavyProps9336) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9336) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9336 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9336: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9336.displayName = 'HeavyComponent9336';
export default HeavyComponent9336;
