'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4046<T> = T extends (infer U)[]
  ? DeepReadonlyArray4046<U>
  : T extends object
  ? DeepReadonlyObject4046<T>
  : T;

interface DeepReadonlyArray4046<T> extends ReadonlyArray<DeepReadonly4046<T>> {}

type DeepReadonlyObject4046<T> = {
  readonly [P in keyof T]: DeepReadonly4046<T[P]>;
};

type UnionToIntersection4046<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4046<T> = UnionToIntersection4046<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4046<T extends unknown[], V> = [...T, V];

type TuplifyUnion4046<T, L = LastOf4046<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4046<TuplifyUnion4046<Exclude<T, L>>, L>;

type DeepPartial4046<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4046<T[P]> }
  : T;

type Paths4046<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4046<K, Paths4046<T[K], Prev4046[D]>> : never }[keyof T]
  : never;

type Prev4046 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4046<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4046 {
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

type ConfigPaths4046 = Paths4046<NestedConfig4046>;

interface HeavyProps4046 {
  config: DeepPartial4046<NestedConfig4046>;
  path?: ConfigPaths4046;
}

const HeavyComponent4046 = memo(function HeavyComponent4046({ config }: HeavyProps4046) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4046) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4046 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4046: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4046.displayName = 'HeavyComponent4046';
export default HeavyComponent4046;
