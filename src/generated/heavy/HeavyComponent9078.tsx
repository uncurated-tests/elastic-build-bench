'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9078<T> = T extends (infer U)[]
  ? DeepReadonlyArray9078<U>
  : T extends object
  ? DeepReadonlyObject9078<T>
  : T;

interface DeepReadonlyArray9078<T> extends ReadonlyArray<DeepReadonly9078<T>> {}

type DeepReadonlyObject9078<T> = {
  readonly [P in keyof T]: DeepReadonly9078<T[P]>;
};

type UnionToIntersection9078<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9078<T> = UnionToIntersection9078<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9078<T extends unknown[], V> = [...T, V];

type TuplifyUnion9078<T, L = LastOf9078<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9078<TuplifyUnion9078<Exclude<T, L>>, L>;

type DeepPartial9078<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9078<T[P]> }
  : T;

type Paths9078<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9078<K, Paths9078<T[K], Prev9078[D]>> : never }[keyof T]
  : never;

type Prev9078 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9078<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9078 {
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

type ConfigPaths9078 = Paths9078<NestedConfig9078>;

interface HeavyProps9078 {
  config: DeepPartial9078<NestedConfig9078>;
  path?: ConfigPaths9078;
}

const HeavyComponent9078 = memo(function HeavyComponent9078({ config }: HeavyProps9078) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9078) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9078 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9078: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9078.displayName = 'HeavyComponent9078';
export default HeavyComponent9078;
