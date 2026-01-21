'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9080<T> = T extends (infer U)[]
  ? DeepReadonlyArray9080<U>
  : T extends object
  ? DeepReadonlyObject9080<T>
  : T;

interface DeepReadonlyArray9080<T> extends ReadonlyArray<DeepReadonly9080<T>> {}

type DeepReadonlyObject9080<T> = {
  readonly [P in keyof T]: DeepReadonly9080<T[P]>;
};

type UnionToIntersection9080<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9080<T> = UnionToIntersection9080<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9080<T extends unknown[], V> = [...T, V];

type TuplifyUnion9080<T, L = LastOf9080<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9080<TuplifyUnion9080<Exclude<T, L>>, L>;

type DeepPartial9080<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9080<T[P]> }
  : T;

type Paths9080<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9080<K, Paths9080<T[K], Prev9080[D]>> : never }[keyof T]
  : never;

type Prev9080 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9080<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9080 {
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

type ConfigPaths9080 = Paths9080<NestedConfig9080>;

interface HeavyProps9080 {
  config: DeepPartial9080<NestedConfig9080>;
  path?: ConfigPaths9080;
}

const HeavyComponent9080 = memo(function HeavyComponent9080({ config }: HeavyProps9080) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9080) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9080 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9080: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9080.displayName = 'HeavyComponent9080';
export default HeavyComponent9080;
