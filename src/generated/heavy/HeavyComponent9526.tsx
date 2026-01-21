'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9526<T> = T extends (infer U)[]
  ? DeepReadonlyArray9526<U>
  : T extends object
  ? DeepReadonlyObject9526<T>
  : T;

interface DeepReadonlyArray9526<T> extends ReadonlyArray<DeepReadonly9526<T>> {}

type DeepReadonlyObject9526<T> = {
  readonly [P in keyof T]: DeepReadonly9526<T[P]>;
};

type UnionToIntersection9526<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9526<T> = UnionToIntersection9526<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9526<T extends unknown[], V> = [...T, V];

type TuplifyUnion9526<T, L = LastOf9526<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9526<TuplifyUnion9526<Exclude<T, L>>, L>;

type DeepPartial9526<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9526<T[P]> }
  : T;

type Paths9526<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9526<K, Paths9526<T[K], Prev9526[D]>> : never }[keyof T]
  : never;

type Prev9526 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9526<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9526 {
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

type ConfigPaths9526 = Paths9526<NestedConfig9526>;

interface HeavyProps9526 {
  config: DeepPartial9526<NestedConfig9526>;
  path?: ConfigPaths9526;
}

const HeavyComponent9526 = memo(function HeavyComponent9526({ config }: HeavyProps9526) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9526) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9526 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9526: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9526.displayName = 'HeavyComponent9526';
export default HeavyComponent9526;
