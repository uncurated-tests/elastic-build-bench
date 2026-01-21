'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9053<T> = T extends (infer U)[]
  ? DeepReadonlyArray9053<U>
  : T extends object
  ? DeepReadonlyObject9053<T>
  : T;

interface DeepReadonlyArray9053<T> extends ReadonlyArray<DeepReadonly9053<T>> {}

type DeepReadonlyObject9053<T> = {
  readonly [P in keyof T]: DeepReadonly9053<T[P]>;
};

type UnionToIntersection9053<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9053<T> = UnionToIntersection9053<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9053<T extends unknown[], V> = [...T, V];

type TuplifyUnion9053<T, L = LastOf9053<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9053<TuplifyUnion9053<Exclude<T, L>>, L>;

type DeepPartial9053<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9053<T[P]> }
  : T;

type Paths9053<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9053<K, Paths9053<T[K], Prev9053[D]>> : never }[keyof T]
  : never;

type Prev9053 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9053<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9053 {
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

type ConfigPaths9053 = Paths9053<NestedConfig9053>;

interface HeavyProps9053 {
  config: DeepPartial9053<NestedConfig9053>;
  path?: ConfigPaths9053;
}

const HeavyComponent9053 = memo(function HeavyComponent9053({ config }: HeavyProps9053) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9053) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9053 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9053: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9053.displayName = 'HeavyComponent9053';
export default HeavyComponent9053;
