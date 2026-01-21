'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9141<T> = T extends (infer U)[]
  ? DeepReadonlyArray9141<U>
  : T extends object
  ? DeepReadonlyObject9141<T>
  : T;

interface DeepReadonlyArray9141<T> extends ReadonlyArray<DeepReadonly9141<T>> {}

type DeepReadonlyObject9141<T> = {
  readonly [P in keyof T]: DeepReadonly9141<T[P]>;
};

type UnionToIntersection9141<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9141<T> = UnionToIntersection9141<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9141<T extends unknown[], V> = [...T, V];

type TuplifyUnion9141<T, L = LastOf9141<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9141<TuplifyUnion9141<Exclude<T, L>>, L>;

type DeepPartial9141<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9141<T[P]> }
  : T;

type Paths9141<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9141<K, Paths9141<T[K], Prev9141[D]>> : never }[keyof T]
  : never;

type Prev9141 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9141<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9141 {
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

type ConfigPaths9141 = Paths9141<NestedConfig9141>;

interface HeavyProps9141 {
  config: DeepPartial9141<NestedConfig9141>;
  path?: ConfigPaths9141;
}

const HeavyComponent9141 = memo(function HeavyComponent9141({ config }: HeavyProps9141) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9141) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9141 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9141: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9141.displayName = 'HeavyComponent9141';
export default HeavyComponent9141;
