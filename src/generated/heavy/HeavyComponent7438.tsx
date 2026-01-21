'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7438<T> = T extends (infer U)[]
  ? DeepReadonlyArray7438<U>
  : T extends object
  ? DeepReadonlyObject7438<T>
  : T;

interface DeepReadonlyArray7438<T> extends ReadonlyArray<DeepReadonly7438<T>> {}

type DeepReadonlyObject7438<T> = {
  readonly [P in keyof T]: DeepReadonly7438<T[P]>;
};

type UnionToIntersection7438<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7438<T> = UnionToIntersection7438<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7438<T extends unknown[], V> = [...T, V];

type TuplifyUnion7438<T, L = LastOf7438<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7438<TuplifyUnion7438<Exclude<T, L>>, L>;

type DeepPartial7438<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7438<T[P]> }
  : T;

type Paths7438<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7438<K, Paths7438<T[K], Prev7438[D]>> : never }[keyof T]
  : never;

type Prev7438 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7438<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7438 {
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

type ConfigPaths7438 = Paths7438<NestedConfig7438>;

interface HeavyProps7438 {
  config: DeepPartial7438<NestedConfig7438>;
  path?: ConfigPaths7438;
}

const HeavyComponent7438 = memo(function HeavyComponent7438({ config }: HeavyProps7438) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7438) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7438 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7438: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7438.displayName = 'HeavyComponent7438';
export default HeavyComponent7438;
