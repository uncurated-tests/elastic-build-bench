'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4787<T> = T extends (infer U)[]
  ? DeepReadonlyArray4787<U>
  : T extends object
  ? DeepReadonlyObject4787<T>
  : T;

interface DeepReadonlyArray4787<T> extends ReadonlyArray<DeepReadonly4787<T>> {}

type DeepReadonlyObject4787<T> = {
  readonly [P in keyof T]: DeepReadonly4787<T[P]>;
};

type UnionToIntersection4787<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4787<T> = UnionToIntersection4787<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4787<T extends unknown[], V> = [...T, V];

type TuplifyUnion4787<T, L = LastOf4787<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4787<TuplifyUnion4787<Exclude<T, L>>, L>;

type DeepPartial4787<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4787<T[P]> }
  : T;

type Paths4787<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4787<K, Paths4787<T[K], Prev4787[D]>> : never }[keyof T]
  : never;

type Prev4787 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4787<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4787 {
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

type ConfigPaths4787 = Paths4787<NestedConfig4787>;

interface HeavyProps4787 {
  config: DeepPartial4787<NestedConfig4787>;
  path?: ConfigPaths4787;
}

const HeavyComponent4787 = memo(function HeavyComponent4787({ config }: HeavyProps4787) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4787) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4787 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4787: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4787.displayName = 'HeavyComponent4787';
export default HeavyComponent4787;
