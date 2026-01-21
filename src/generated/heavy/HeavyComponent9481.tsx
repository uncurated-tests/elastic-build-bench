'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9481<T> = T extends (infer U)[]
  ? DeepReadonlyArray9481<U>
  : T extends object
  ? DeepReadonlyObject9481<T>
  : T;

interface DeepReadonlyArray9481<T> extends ReadonlyArray<DeepReadonly9481<T>> {}

type DeepReadonlyObject9481<T> = {
  readonly [P in keyof T]: DeepReadonly9481<T[P]>;
};

type UnionToIntersection9481<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9481<T> = UnionToIntersection9481<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9481<T extends unknown[], V> = [...T, V];

type TuplifyUnion9481<T, L = LastOf9481<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9481<TuplifyUnion9481<Exclude<T, L>>, L>;

type DeepPartial9481<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9481<T[P]> }
  : T;

type Paths9481<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9481<K, Paths9481<T[K], Prev9481[D]>> : never }[keyof T]
  : never;

type Prev9481 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9481<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9481 {
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

type ConfigPaths9481 = Paths9481<NestedConfig9481>;

interface HeavyProps9481 {
  config: DeepPartial9481<NestedConfig9481>;
  path?: ConfigPaths9481;
}

const HeavyComponent9481 = memo(function HeavyComponent9481({ config }: HeavyProps9481) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9481) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9481 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9481: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9481.displayName = 'HeavyComponent9481';
export default HeavyComponent9481;
