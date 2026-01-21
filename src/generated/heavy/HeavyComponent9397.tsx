'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9397<T> = T extends (infer U)[]
  ? DeepReadonlyArray9397<U>
  : T extends object
  ? DeepReadonlyObject9397<T>
  : T;

interface DeepReadonlyArray9397<T> extends ReadonlyArray<DeepReadonly9397<T>> {}

type DeepReadonlyObject9397<T> = {
  readonly [P in keyof T]: DeepReadonly9397<T[P]>;
};

type UnionToIntersection9397<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9397<T> = UnionToIntersection9397<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9397<T extends unknown[], V> = [...T, V];

type TuplifyUnion9397<T, L = LastOf9397<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9397<TuplifyUnion9397<Exclude<T, L>>, L>;

type DeepPartial9397<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9397<T[P]> }
  : T;

type Paths9397<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9397<K, Paths9397<T[K], Prev9397[D]>> : never }[keyof T]
  : never;

type Prev9397 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9397<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9397 {
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

type ConfigPaths9397 = Paths9397<NestedConfig9397>;

interface HeavyProps9397 {
  config: DeepPartial9397<NestedConfig9397>;
  path?: ConfigPaths9397;
}

const HeavyComponent9397 = memo(function HeavyComponent9397({ config }: HeavyProps9397) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9397) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9397 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9397: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9397.displayName = 'HeavyComponent9397';
export default HeavyComponent9397;
