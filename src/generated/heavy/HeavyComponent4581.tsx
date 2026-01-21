'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4581<T> = T extends (infer U)[]
  ? DeepReadonlyArray4581<U>
  : T extends object
  ? DeepReadonlyObject4581<T>
  : T;

interface DeepReadonlyArray4581<T> extends ReadonlyArray<DeepReadonly4581<T>> {}

type DeepReadonlyObject4581<T> = {
  readonly [P in keyof T]: DeepReadonly4581<T[P]>;
};

type UnionToIntersection4581<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4581<T> = UnionToIntersection4581<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4581<T extends unknown[], V> = [...T, V];

type TuplifyUnion4581<T, L = LastOf4581<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4581<TuplifyUnion4581<Exclude<T, L>>, L>;

type DeepPartial4581<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4581<T[P]> }
  : T;

type Paths4581<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4581<K, Paths4581<T[K], Prev4581[D]>> : never }[keyof T]
  : never;

type Prev4581 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4581<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4581 {
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

type ConfigPaths4581 = Paths4581<NestedConfig4581>;

interface HeavyProps4581 {
  config: DeepPartial4581<NestedConfig4581>;
  path?: ConfigPaths4581;
}

const HeavyComponent4581 = memo(function HeavyComponent4581({ config }: HeavyProps4581) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4581) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4581 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4581: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4581.displayName = 'HeavyComponent4581';
export default HeavyComponent4581;
