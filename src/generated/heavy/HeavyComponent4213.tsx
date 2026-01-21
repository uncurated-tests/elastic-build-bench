'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4213<T> = T extends (infer U)[]
  ? DeepReadonlyArray4213<U>
  : T extends object
  ? DeepReadonlyObject4213<T>
  : T;

interface DeepReadonlyArray4213<T> extends ReadonlyArray<DeepReadonly4213<T>> {}

type DeepReadonlyObject4213<T> = {
  readonly [P in keyof T]: DeepReadonly4213<T[P]>;
};

type UnionToIntersection4213<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4213<T> = UnionToIntersection4213<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4213<T extends unknown[], V> = [...T, V];

type TuplifyUnion4213<T, L = LastOf4213<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4213<TuplifyUnion4213<Exclude<T, L>>, L>;

type DeepPartial4213<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4213<T[P]> }
  : T;

type Paths4213<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4213<K, Paths4213<T[K], Prev4213[D]>> : never }[keyof T]
  : never;

type Prev4213 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4213<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4213 {
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

type ConfigPaths4213 = Paths4213<NestedConfig4213>;

interface HeavyProps4213 {
  config: DeepPartial4213<NestedConfig4213>;
  path?: ConfigPaths4213;
}

const HeavyComponent4213 = memo(function HeavyComponent4213({ config }: HeavyProps4213) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4213) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4213 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4213: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4213.displayName = 'HeavyComponent4213';
export default HeavyComponent4213;
