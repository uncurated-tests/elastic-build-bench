'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9853<T> = T extends (infer U)[]
  ? DeepReadonlyArray9853<U>
  : T extends object
  ? DeepReadonlyObject9853<T>
  : T;

interface DeepReadonlyArray9853<T> extends ReadonlyArray<DeepReadonly9853<T>> {}

type DeepReadonlyObject9853<T> = {
  readonly [P in keyof T]: DeepReadonly9853<T[P]>;
};

type UnionToIntersection9853<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9853<T> = UnionToIntersection9853<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9853<T extends unknown[], V> = [...T, V];

type TuplifyUnion9853<T, L = LastOf9853<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9853<TuplifyUnion9853<Exclude<T, L>>, L>;

type DeepPartial9853<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9853<T[P]> }
  : T;

type Paths9853<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9853<K, Paths9853<T[K], Prev9853[D]>> : never }[keyof T]
  : never;

type Prev9853 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9853<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9853 {
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

type ConfigPaths9853 = Paths9853<NestedConfig9853>;

interface HeavyProps9853 {
  config: DeepPartial9853<NestedConfig9853>;
  path?: ConfigPaths9853;
}

const HeavyComponent9853 = memo(function HeavyComponent9853({ config }: HeavyProps9853) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9853) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9853 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9853: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9853.displayName = 'HeavyComponent9853';
export default HeavyComponent9853;
