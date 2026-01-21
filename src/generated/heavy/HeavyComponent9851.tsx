'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9851<T> = T extends (infer U)[]
  ? DeepReadonlyArray9851<U>
  : T extends object
  ? DeepReadonlyObject9851<T>
  : T;

interface DeepReadonlyArray9851<T> extends ReadonlyArray<DeepReadonly9851<T>> {}

type DeepReadonlyObject9851<T> = {
  readonly [P in keyof T]: DeepReadonly9851<T[P]>;
};

type UnionToIntersection9851<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9851<T> = UnionToIntersection9851<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9851<T extends unknown[], V> = [...T, V];

type TuplifyUnion9851<T, L = LastOf9851<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9851<TuplifyUnion9851<Exclude<T, L>>, L>;

type DeepPartial9851<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9851<T[P]> }
  : T;

type Paths9851<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9851<K, Paths9851<T[K], Prev9851[D]>> : never }[keyof T]
  : never;

type Prev9851 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9851<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9851 {
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

type ConfigPaths9851 = Paths9851<NestedConfig9851>;

interface HeavyProps9851 {
  config: DeepPartial9851<NestedConfig9851>;
  path?: ConfigPaths9851;
}

const HeavyComponent9851 = memo(function HeavyComponent9851({ config }: HeavyProps9851) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9851) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9851 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9851: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9851.displayName = 'HeavyComponent9851';
export default HeavyComponent9851;
