'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9413<T> = T extends (infer U)[]
  ? DeepReadonlyArray9413<U>
  : T extends object
  ? DeepReadonlyObject9413<T>
  : T;

interface DeepReadonlyArray9413<T> extends ReadonlyArray<DeepReadonly9413<T>> {}

type DeepReadonlyObject9413<T> = {
  readonly [P in keyof T]: DeepReadonly9413<T[P]>;
};

type UnionToIntersection9413<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9413<T> = UnionToIntersection9413<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9413<T extends unknown[], V> = [...T, V];

type TuplifyUnion9413<T, L = LastOf9413<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9413<TuplifyUnion9413<Exclude<T, L>>, L>;

type DeepPartial9413<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9413<T[P]> }
  : T;

type Paths9413<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9413<K, Paths9413<T[K], Prev9413[D]>> : never }[keyof T]
  : never;

type Prev9413 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9413<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9413 {
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

type ConfigPaths9413 = Paths9413<NestedConfig9413>;

interface HeavyProps9413 {
  config: DeepPartial9413<NestedConfig9413>;
  path?: ConfigPaths9413;
}

const HeavyComponent9413 = memo(function HeavyComponent9413({ config }: HeavyProps9413) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9413) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9413 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9413: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9413.displayName = 'HeavyComponent9413';
export default HeavyComponent9413;
