'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9097<T> = T extends (infer U)[]
  ? DeepReadonlyArray9097<U>
  : T extends object
  ? DeepReadonlyObject9097<T>
  : T;

interface DeepReadonlyArray9097<T> extends ReadonlyArray<DeepReadonly9097<T>> {}

type DeepReadonlyObject9097<T> = {
  readonly [P in keyof T]: DeepReadonly9097<T[P]>;
};

type UnionToIntersection9097<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9097<T> = UnionToIntersection9097<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9097<T extends unknown[], V> = [...T, V];

type TuplifyUnion9097<T, L = LastOf9097<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9097<TuplifyUnion9097<Exclude<T, L>>, L>;

type DeepPartial9097<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9097<T[P]> }
  : T;

type Paths9097<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9097<K, Paths9097<T[K], Prev9097[D]>> : never }[keyof T]
  : never;

type Prev9097 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9097<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9097 {
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

type ConfigPaths9097 = Paths9097<NestedConfig9097>;

interface HeavyProps9097 {
  config: DeepPartial9097<NestedConfig9097>;
  path?: ConfigPaths9097;
}

const HeavyComponent9097 = memo(function HeavyComponent9097({ config }: HeavyProps9097) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9097) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9097 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9097: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9097.displayName = 'HeavyComponent9097';
export default HeavyComponent9097;
