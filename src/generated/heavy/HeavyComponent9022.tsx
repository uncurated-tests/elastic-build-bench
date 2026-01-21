'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9022<T> = T extends (infer U)[]
  ? DeepReadonlyArray9022<U>
  : T extends object
  ? DeepReadonlyObject9022<T>
  : T;

interface DeepReadonlyArray9022<T> extends ReadonlyArray<DeepReadonly9022<T>> {}

type DeepReadonlyObject9022<T> = {
  readonly [P in keyof T]: DeepReadonly9022<T[P]>;
};

type UnionToIntersection9022<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9022<T> = UnionToIntersection9022<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9022<T extends unknown[], V> = [...T, V];

type TuplifyUnion9022<T, L = LastOf9022<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9022<TuplifyUnion9022<Exclude<T, L>>, L>;

type DeepPartial9022<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9022<T[P]> }
  : T;

type Paths9022<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9022<K, Paths9022<T[K], Prev9022[D]>> : never }[keyof T]
  : never;

type Prev9022 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9022<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9022 {
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

type ConfigPaths9022 = Paths9022<NestedConfig9022>;

interface HeavyProps9022 {
  config: DeepPartial9022<NestedConfig9022>;
  path?: ConfigPaths9022;
}

const HeavyComponent9022 = memo(function HeavyComponent9022({ config }: HeavyProps9022) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9022) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9022 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9022: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9022.displayName = 'HeavyComponent9022';
export default HeavyComponent9022;
