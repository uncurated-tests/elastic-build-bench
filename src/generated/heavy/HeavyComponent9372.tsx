'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9372<T> = T extends (infer U)[]
  ? DeepReadonlyArray9372<U>
  : T extends object
  ? DeepReadonlyObject9372<T>
  : T;

interface DeepReadonlyArray9372<T> extends ReadonlyArray<DeepReadonly9372<T>> {}

type DeepReadonlyObject9372<T> = {
  readonly [P in keyof T]: DeepReadonly9372<T[P]>;
};

type UnionToIntersection9372<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9372<T> = UnionToIntersection9372<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9372<T extends unknown[], V> = [...T, V];

type TuplifyUnion9372<T, L = LastOf9372<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9372<TuplifyUnion9372<Exclude<T, L>>, L>;

type DeepPartial9372<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9372<T[P]> }
  : T;

type Paths9372<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9372<K, Paths9372<T[K], Prev9372[D]>> : never }[keyof T]
  : never;

type Prev9372 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9372<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9372 {
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

type ConfigPaths9372 = Paths9372<NestedConfig9372>;

interface HeavyProps9372 {
  config: DeepPartial9372<NestedConfig9372>;
  path?: ConfigPaths9372;
}

const HeavyComponent9372 = memo(function HeavyComponent9372({ config }: HeavyProps9372) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9372) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9372 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9372: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9372.displayName = 'HeavyComponent9372';
export default HeavyComponent9372;
