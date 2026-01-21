'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9946<T> = T extends (infer U)[]
  ? DeepReadonlyArray9946<U>
  : T extends object
  ? DeepReadonlyObject9946<T>
  : T;

interface DeepReadonlyArray9946<T> extends ReadonlyArray<DeepReadonly9946<T>> {}

type DeepReadonlyObject9946<T> = {
  readonly [P in keyof T]: DeepReadonly9946<T[P]>;
};

type UnionToIntersection9946<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9946<T> = UnionToIntersection9946<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9946<T extends unknown[], V> = [...T, V];

type TuplifyUnion9946<T, L = LastOf9946<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9946<TuplifyUnion9946<Exclude<T, L>>, L>;

type DeepPartial9946<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9946<T[P]> }
  : T;

type Paths9946<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9946<K, Paths9946<T[K], Prev9946[D]>> : never }[keyof T]
  : never;

type Prev9946 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9946<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9946 {
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

type ConfigPaths9946 = Paths9946<NestedConfig9946>;

interface HeavyProps9946 {
  config: DeepPartial9946<NestedConfig9946>;
  path?: ConfigPaths9946;
}

const HeavyComponent9946 = memo(function HeavyComponent9946({ config }: HeavyProps9946) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9946) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9946 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9946: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9946.displayName = 'HeavyComponent9946';
export default HeavyComponent9946;
