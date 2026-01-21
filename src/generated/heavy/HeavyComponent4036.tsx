'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4036<T> = T extends (infer U)[]
  ? DeepReadonlyArray4036<U>
  : T extends object
  ? DeepReadonlyObject4036<T>
  : T;

interface DeepReadonlyArray4036<T> extends ReadonlyArray<DeepReadonly4036<T>> {}

type DeepReadonlyObject4036<T> = {
  readonly [P in keyof T]: DeepReadonly4036<T[P]>;
};

type UnionToIntersection4036<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4036<T> = UnionToIntersection4036<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4036<T extends unknown[], V> = [...T, V];

type TuplifyUnion4036<T, L = LastOf4036<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4036<TuplifyUnion4036<Exclude<T, L>>, L>;

type DeepPartial4036<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4036<T[P]> }
  : T;

type Paths4036<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4036<K, Paths4036<T[K], Prev4036[D]>> : never }[keyof T]
  : never;

type Prev4036 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4036<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4036 {
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

type ConfigPaths4036 = Paths4036<NestedConfig4036>;

interface HeavyProps4036 {
  config: DeepPartial4036<NestedConfig4036>;
  path?: ConfigPaths4036;
}

const HeavyComponent4036 = memo(function HeavyComponent4036({ config }: HeavyProps4036) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4036) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4036 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4036: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4036.displayName = 'HeavyComponent4036';
export default HeavyComponent4036;
