'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9118<T> = T extends (infer U)[]
  ? DeepReadonlyArray9118<U>
  : T extends object
  ? DeepReadonlyObject9118<T>
  : T;

interface DeepReadonlyArray9118<T> extends ReadonlyArray<DeepReadonly9118<T>> {}

type DeepReadonlyObject9118<T> = {
  readonly [P in keyof T]: DeepReadonly9118<T[P]>;
};

type UnionToIntersection9118<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9118<T> = UnionToIntersection9118<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9118<T extends unknown[], V> = [...T, V];

type TuplifyUnion9118<T, L = LastOf9118<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9118<TuplifyUnion9118<Exclude<T, L>>, L>;

type DeepPartial9118<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9118<T[P]> }
  : T;

type Paths9118<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9118<K, Paths9118<T[K], Prev9118[D]>> : never }[keyof T]
  : never;

type Prev9118 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9118<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9118 {
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

type ConfigPaths9118 = Paths9118<NestedConfig9118>;

interface HeavyProps9118 {
  config: DeepPartial9118<NestedConfig9118>;
  path?: ConfigPaths9118;
}

const HeavyComponent9118 = memo(function HeavyComponent9118({ config }: HeavyProps9118) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9118) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9118 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9118: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9118.displayName = 'HeavyComponent9118';
export default HeavyComponent9118;
