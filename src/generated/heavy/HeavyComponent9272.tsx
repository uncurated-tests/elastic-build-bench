'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9272<T> = T extends (infer U)[]
  ? DeepReadonlyArray9272<U>
  : T extends object
  ? DeepReadonlyObject9272<T>
  : T;

interface DeepReadonlyArray9272<T> extends ReadonlyArray<DeepReadonly9272<T>> {}

type DeepReadonlyObject9272<T> = {
  readonly [P in keyof T]: DeepReadonly9272<T[P]>;
};

type UnionToIntersection9272<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9272<T> = UnionToIntersection9272<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9272<T extends unknown[], V> = [...T, V];

type TuplifyUnion9272<T, L = LastOf9272<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9272<TuplifyUnion9272<Exclude<T, L>>, L>;

type DeepPartial9272<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9272<T[P]> }
  : T;

type Paths9272<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9272<K, Paths9272<T[K], Prev9272[D]>> : never }[keyof T]
  : never;

type Prev9272 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9272<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9272 {
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

type ConfigPaths9272 = Paths9272<NestedConfig9272>;

interface HeavyProps9272 {
  config: DeepPartial9272<NestedConfig9272>;
  path?: ConfigPaths9272;
}

const HeavyComponent9272 = memo(function HeavyComponent9272({ config }: HeavyProps9272) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9272) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9272 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9272: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9272.displayName = 'HeavyComponent9272';
export default HeavyComponent9272;
