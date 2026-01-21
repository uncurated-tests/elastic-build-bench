'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4085<T> = T extends (infer U)[]
  ? DeepReadonlyArray4085<U>
  : T extends object
  ? DeepReadonlyObject4085<T>
  : T;

interface DeepReadonlyArray4085<T> extends ReadonlyArray<DeepReadonly4085<T>> {}

type DeepReadonlyObject4085<T> = {
  readonly [P in keyof T]: DeepReadonly4085<T[P]>;
};

type UnionToIntersection4085<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4085<T> = UnionToIntersection4085<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4085<T extends unknown[], V> = [...T, V];

type TuplifyUnion4085<T, L = LastOf4085<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4085<TuplifyUnion4085<Exclude<T, L>>, L>;

type DeepPartial4085<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4085<T[P]> }
  : T;

type Paths4085<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4085<K, Paths4085<T[K], Prev4085[D]>> : never }[keyof T]
  : never;

type Prev4085 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4085<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4085 {
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

type ConfigPaths4085 = Paths4085<NestedConfig4085>;

interface HeavyProps4085 {
  config: DeepPartial4085<NestedConfig4085>;
  path?: ConfigPaths4085;
}

const HeavyComponent4085 = memo(function HeavyComponent4085({ config }: HeavyProps4085) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4085) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4085 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4085: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4085.displayName = 'HeavyComponent4085';
export default HeavyComponent4085;
