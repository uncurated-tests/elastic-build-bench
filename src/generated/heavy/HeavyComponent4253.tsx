'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4253<T> = T extends (infer U)[]
  ? DeepReadonlyArray4253<U>
  : T extends object
  ? DeepReadonlyObject4253<T>
  : T;

interface DeepReadonlyArray4253<T> extends ReadonlyArray<DeepReadonly4253<T>> {}

type DeepReadonlyObject4253<T> = {
  readonly [P in keyof T]: DeepReadonly4253<T[P]>;
};

type UnionToIntersection4253<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4253<T> = UnionToIntersection4253<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4253<T extends unknown[], V> = [...T, V];

type TuplifyUnion4253<T, L = LastOf4253<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4253<TuplifyUnion4253<Exclude<T, L>>, L>;

type DeepPartial4253<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4253<T[P]> }
  : T;

type Paths4253<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4253<K, Paths4253<T[K], Prev4253[D]>> : never }[keyof T]
  : never;

type Prev4253 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4253<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4253 {
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

type ConfigPaths4253 = Paths4253<NestedConfig4253>;

interface HeavyProps4253 {
  config: DeepPartial4253<NestedConfig4253>;
  path?: ConfigPaths4253;
}

const HeavyComponent4253 = memo(function HeavyComponent4253({ config }: HeavyProps4253) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4253) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4253 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4253: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4253.displayName = 'HeavyComponent4253';
export default HeavyComponent4253;
