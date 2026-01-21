'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4659<T> = T extends (infer U)[]
  ? DeepReadonlyArray4659<U>
  : T extends object
  ? DeepReadonlyObject4659<T>
  : T;

interface DeepReadonlyArray4659<T> extends ReadonlyArray<DeepReadonly4659<T>> {}

type DeepReadonlyObject4659<T> = {
  readonly [P in keyof T]: DeepReadonly4659<T[P]>;
};

type UnionToIntersection4659<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4659<T> = UnionToIntersection4659<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4659<T extends unknown[], V> = [...T, V];

type TuplifyUnion4659<T, L = LastOf4659<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4659<TuplifyUnion4659<Exclude<T, L>>, L>;

type DeepPartial4659<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4659<T[P]> }
  : T;

type Paths4659<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4659<K, Paths4659<T[K], Prev4659[D]>> : never }[keyof T]
  : never;

type Prev4659 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4659<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4659 {
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

type ConfigPaths4659 = Paths4659<NestedConfig4659>;

interface HeavyProps4659 {
  config: DeepPartial4659<NestedConfig4659>;
  path?: ConfigPaths4659;
}

const HeavyComponent4659 = memo(function HeavyComponent4659({ config }: HeavyProps4659) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4659) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4659 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4659: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4659.displayName = 'HeavyComponent4659';
export default HeavyComponent4659;
