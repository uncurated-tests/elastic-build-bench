'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9878<T> = T extends (infer U)[]
  ? DeepReadonlyArray9878<U>
  : T extends object
  ? DeepReadonlyObject9878<T>
  : T;

interface DeepReadonlyArray9878<T> extends ReadonlyArray<DeepReadonly9878<T>> {}

type DeepReadonlyObject9878<T> = {
  readonly [P in keyof T]: DeepReadonly9878<T[P]>;
};

type UnionToIntersection9878<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9878<T> = UnionToIntersection9878<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9878<T extends unknown[], V> = [...T, V];

type TuplifyUnion9878<T, L = LastOf9878<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9878<TuplifyUnion9878<Exclude<T, L>>, L>;

type DeepPartial9878<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9878<T[P]> }
  : T;

type Paths9878<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9878<K, Paths9878<T[K], Prev9878[D]>> : never }[keyof T]
  : never;

type Prev9878 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9878<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9878 {
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

type ConfigPaths9878 = Paths9878<NestedConfig9878>;

interface HeavyProps9878 {
  config: DeepPartial9878<NestedConfig9878>;
  path?: ConfigPaths9878;
}

const HeavyComponent9878 = memo(function HeavyComponent9878({ config }: HeavyProps9878) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9878) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9878 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9878: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9878.displayName = 'HeavyComponent9878';
export default HeavyComponent9878;
