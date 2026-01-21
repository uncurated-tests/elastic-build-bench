'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9378<T> = T extends (infer U)[]
  ? DeepReadonlyArray9378<U>
  : T extends object
  ? DeepReadonlyObject9378<T>
  : T;

interface DeepReadonlyArray9378<T> extends ReadonlyArray<DeepReadonly9378<T>> {}

type DeepReadonlyObject9378<T> = {
  readonly [P in keyof T]: DeepReadonly9378<T[P]>;
};

type UnionToIntersection9378<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9378<T> = UnionToIntersection9378<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9378<T extends unknown[], V> = [...T, V];

type TuplifyUnion9378<T, L = LastOf9378<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9378<TuplifyUnion9378<Exclude<T, L>>, L>;

type DeepPartial9378<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9378<T[P]> }
  : T;

type Paths9378<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9378<K, Paths9378<T[K], Prev9378[D]>> : never }[keyof T]
  : never;

type Prev9378 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9378<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9378 {
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

type ConfigPaths9378 = Paths9378<NestedConfig9378>;

interface HeavyProps9378 {
  config: DeepPartial9378<NestedConfig9378>;
  path?: ConfigPaths9378;
}

const HeavyComponent9378 = memo(function HeavyComponent9378({ config }: HeavyProps9378) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9378) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9378 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9378: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9378.displayName = 'HeavyComponent9378';
export default HeavyComponent9378;
