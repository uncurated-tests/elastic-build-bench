'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4407<T> = T extends (infer U)[]
  ? DeepReadonlyArray4407<U>
  : T extends object
  ? DeepReadonlyObject4407<T>
  : T;

interface DeepReadonlyArray4407<T> extends ReadonlyArray<DeepReadonly4407<T>> {}

type DeepReadonlyObject4407<T> = {
  readonly [P in keyof T]: DeepReadonly4407<T[P]>;
};

type UnionToIntersection4407<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4407<T> = UnionToIntersection4407<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4407<T extends unknown[], V> = [...T, V];

type TuplifyUnion4407<T, L = LastOf4407<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4407<TuplifyUnion4407<Exclude<T, L>>, L>;

type DeepPartial4407<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4407<T[P]> }
  : T;

type Paths4407<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4407<K, Paths4407<T[K], Prev4407[D]>> : never }[keyof T]
  : never;

type Prev4407 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4407<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4407 {
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

type ConfigPaths4407 = Paths4407<NestedConfig4407>;

interface HeavyProps4407 {
  config: DeepPartial4407<NestedConfig4407>;
  path?: ConfigPaths4407;
}

const HeavyComponent4407 = memo(function HeavyComponent4407({ config }: HeavyProps4407) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4407) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4407 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4407: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4407.displayName = 'HeavyComponent4407';
export default HeavyComponent4407;
