'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4296<T> = T extends (infer U)[]
  ? DeepReadonlyArray4296<U>
  : T extends object
  ? DeepReadonlyObject4296<T>
  : T;

interface DeepReadonlyArray4296<T> extends ReadonlyArray<DeepReadonly4296<T>> {}

type DeepReadonlyObject4296<T> = {
  readonly [P in keyof T]: DeepReadonly4296<T[P]>;
};

type UnionToIntersection4296<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4296<T> = UnionToIntersection4296<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4296<T extends unknown[], V> = [...T, V];

type TuplifyUnion4296<T, L = LastOf4296<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4296<TuplifyUnion4296<Exclude<T, L>>, L>;

type DeepPartial4296<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4296<T[P]> }
  : T;

type Paths4296<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4296<K, Paths4296<T[K], Prev4296[D]>> : never }[keyof T]
  : never;

type Prev4296 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4296<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4296 {
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

type ConfigPaths4296 = Paths4296<NestedConfig4296>;

interface HeavyProps4296 {
  config: DeepPartial4296<NestedConfig4296>;
  path?: ConfigPaths4296;
}

const HeavyComponent4296 = memo(function HeavyComponent4296({ config }: HeavyProps4296) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4296) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4296 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4296: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4296.displayName = 'HeavyComponent4296';
export default HeavyComponent4296;
