'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9377<T> = T extends (infer U)[]
  ? DeepReadonlyArray9377<U>
  : T extends object
  ? DeepReadonlyObject9377<T>
  : T;

interface DeepReadonlyArray9377<T> extends ReadonlyArray<DeepReadonly9377<T>> {}

type DeepReadonlyObject9377<T> = {
  readonly [P in keyof T]: DeepReadonly9377<T[P]>;
};

type UnionToIntersection9377<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9377<T> = UnionToIntersection9377<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9377<T extends unknown[], V> = [...T, V];

type TuplifyUnion9377<T, L = LastOf9377<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9377<TuplifyUnion9377<Exclude<T, L>>, L>;

type DeepPartial9377<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9377<T[P]> }
  : T;

type Paths9377<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9377<K, Paths9377<T[K], Prev9377[D]>> : never }[keyof T]
  : never;

type Prev9377 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9377<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9377 {
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

type ConfigPaths9377 = Paths9377<NestedConfig9377>;

interface HeavyProps9377 {
  config: DeepPartial9377<NestedConfig9377>;
  path?: ConfigPaths9377;
}

const HeavyComponent9377 = memo(function HeavyComponent9377({ config }: HeavyProps9377) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9377) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9377 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9377: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9377.displayName = 'HeavyComponent9377';
export default HeavyComponent9377;
