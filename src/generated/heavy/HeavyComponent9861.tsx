'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9861<T> = T extends (infer U)[]
  ? DeepReadonlyArray9861<U>
  : T extends object
  ? DeepReadonlyObject9861<T>
  : T;

interface DeepReadonlyArray9861<T> extends ReadonlyArray<DeepReadonly9861<T>> {}

type DeepReadonlyObject9861<T> = {
  readonly [P in keyof T]: DeepReadonly9861<T[P]>;
};

type UnionToIntersection9861<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9861<T> = UnionToIntersection9861<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9861<T extends unknown[], V> = [...T, V];

type TuplifyUnion9861<T, L = LastOf9861<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9861<TuplifyUnion9861<Exclude<T, L>>, L>;

type DeepPartial9861<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9861<T[P]> }
  : T;

type Paths9861<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9861<K, Paths9861<T[K], Prev9861[D]>> : never }[keyof T]
  : never;

type Prev9861 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9861<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9861 {
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

type ConfigPaths9861 = Paths9861<NestedConfig9861>;

interface HeavyProps9861 {
  config: DeepPartial9861<NestedConfig9861>;
  path?: ConfigPaths9861;
}

const HeavyComponent9861 = memo(function HeavyComponent9861({ config }: HeavyProps9861) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9861) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9861 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9861: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9861.displayName = 'HeavyComponent9861';
export default HeavyComponent9861;
