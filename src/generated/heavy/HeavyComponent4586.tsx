'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4586<T> = T extends (infer U)[]
  ? DeepReadonlyArray4586<U>
  : T extends object
  ? DeepReadonlyObject4586<T>
  : T;

interface DeepReadonlyArray4586<T> extends ReadonlyArray<DeepReadonly4586<T>> {}

type DeepReadonlyObject4586<T> = {
  readonly [P in keyof T]: DeepReadonly4586<T[P]>;
};

type UnionToIntersection4586<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4586<T> = UnionToIntersection4586<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4586<T extends unknown[], V> = [...T, V];

type TuplifyUnion4586<T, L = LastOf4586<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4586<TuplifyUnion4586<Exclude<T, L>>, L>;

type DeepPartial4586<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4586<T[P]> }
  : T;

type Paths4586<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4586<K, Paths4586<T[K], Prev4586[D]>> : never }[keyof T]
  : never;

type Prev4586 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4586<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4586 {
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

type ConfigPaths4586 = Paths4586<NestedConfig4586>;

interface HeavyProps4586 {
  config: DeepPartial4586<NestedConfig4586>;
  path?: ConfigPaths4586;
}

const HeavyComponent4586 = memo(function HeavyComponent4586({ config }: HeavyProps4586) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4586) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4586 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4586: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4586.displayName = 'HeavyComponent4586';
export default HeavyComponent4586;
