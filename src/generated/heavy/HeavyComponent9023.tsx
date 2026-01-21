'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9023<T> = T extends (infer U)[]
  ? DeepReadonlyArray9023<U>
  : T extends object
  ? DeepReadonlyObject9023<T>
  : T;

interface DeepReadonlyArray9023<T> extends ReadonlyArray<DeepReadonly9023<T>> {}

type DeepReadonlyObject9023<T> = {
  readonly [P in keyof T]: DeepReadonly9023<T[P]>;
};

type UnionToIntersection9023<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9023<T> = UnionToIntersection9023<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9023<T extends unknown[], V> = [...T, V];

type TuplifyUnion9023<T, L = LastOf9023<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9023<TuplifyUnion9023<Exclude<T, L>>, L>;

type DeepPartial9023<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9023<T[P]> }
  : T;

type Paths9023<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9023<K, Paths9023<T[K], Prev9023[D]>> : never }[keyof T]
  : never;

type Prev9023 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9023<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9023 {
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

type ConfigPaths9023 = Paths9023<NestedConfig9023>;

interface HeavyProps9023 {
  config: DeepPartial9023<NestedConfig9023>;
  path?: ConfigPaths9023;
}

const HeavyComponent9023 = memo(function HeavyComponent9023({ config }: HeavyProps9023) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9023) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9023 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9023: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9023.displayName = 'HeavyComponent9023';
export default HeavyComponent9023;
