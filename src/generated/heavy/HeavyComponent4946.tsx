'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4946<T> = T extends (infer U)[]
  ? DeepReadonlyArray4946<U>
  : T extends object
  ? DeepReadonlyObject4946<T>
  : T;

interface DeepReadonlyArray4946<T> extends ReadonlyArray<DeepReadonly4946<T>> {}

type DeepReadonlyObject4946<T> = {
  readonly [P in keyof T]: DeepReadonly4946<T[P]>;
};

type UnionToIntersection4946<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4946<T> = UnionToIntersection4946<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4946<T extends unknown[], V> = [...T, V];

type TuplifyUnion4946<T, L = LastOf4946<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4946<TuplifyUnion4946<Exclude<T, L>>, L>;

type DeepPartial4946<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4946<T[P]> }
  : T;

type Paths4946<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4946<K, Paths4946<T[K], Prev4946[D]>> : never }[keyof T]
  : never;

type Prev4946 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4946<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4946 {
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

type ConfigPaths4946 = Paths4946<NestedConfig4946>;

interface HeavyProps4946 {
  config: DeepPartial4946<NestedConfig4946>;
  path?: ConfigPaths4946;
}

const HeavyComponent4946 = memo(function HeavyComponent4946({ config }: HeavyProps4946) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4946) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4946 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4946: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4946.displayName = 'HeavyComponent4946';
export default HeavyComponent4946;
