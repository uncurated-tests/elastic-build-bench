'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9864<T> = T extends (infer U)[]
  ? DeepReadonlyArray9864<U>
  : T extends object
  ? DeepReadonlyObject9864<T>
  : T;

interface DeepReadonlyArray9864<T> extends ReadonlyArray<DeepReadonly9864<T>> {}

type DeepReadonlyObject9864<T> = {
  readonly [P in keyof T]: DeepReadonly9864<T[P]>;
};

type UnionToIntersection9864<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9864<T> = UnionToIntersection9864<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9864<T extends unknown[], V> = [...T, V];

type TuplifyUnion9864<T, L = LastOf9864<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9864<TuplifyUnion9864<Exclude<T, L>>, L>;

type DeepPartial9864<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9864<T[P]> }
  : T;

type Paths9864<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9864<K, Paths9864<T[K], Prev9864[D]>> : never }[keyof T]
  : never;

type Prev9864 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9864<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9864 {
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

type ConfigPaths9864 = Paths9864<NestedConfig9864>;

interface HeavyProps9864 {
  config: DeepPartial9864<NestedConfig9864>;
  path?: ConfigPaths9864;
}

const HeavyComponent9864 = memo(function HeavyComponent9864({ config }: HeavyProps9864) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9864) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9864 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9864: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9864.displayName = 'HeavyComponent9864';
export default HeavyComponent9864;
