'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5438<T> = T extends (infer U)[]
  ? DeepReadonlyArray5438<U>
  : T extends object
  ? DeepReadonlyObject5438<T>
  : T;

interface DeepReadonlyArray5438<T> extends ReadonlyArray<DeepReadonly5438<T>> {}

type DeepReadonlyObject5438<T> = {
  readonly [P in keyof T]: DeepReadonly5438<T[P]>;
};

type UnionToIntersection5438<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5438<T> = UnionToIntersection5438<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5438<T extends unknown[], V> = [...T, V];

type TuplifyUnion5438<T, L = LastOf5438<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5438<TuplifyUnion5438<Exclude<T, L>>, L>;

type DeepPartial5438<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5438<T[P]> }
  : T;

type Paths5438<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5438<K, Paths5438<T[K], Prev5438[D]>> : never }[keyof T]
  : never;

type Prev5438 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5438<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5438 {
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

type ConfigPaths5438 = Paths5438<NestedConfig5438>;

interface HeavyProps5438 {
  config: DeepPartial5438<NestedConfig5438>;
  path?: ConfigPaths5438;
}

const HeavyComponent5438 = memo(function HeavyComponent5438({ config }: HeavyProps5438) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5438) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5438 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5438: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5438.displayName = 'HeavyComponent5438';
export default HeavyComponent5438;
