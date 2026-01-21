'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12438<T> = T extends (infer U)[]
  ? DeepReadonlyArray12438<U>
  : T extends object
  ? DeepReadonlyObject12438<T>
  : T;

interface DeepReadonlyArray12438<T> extends ReadonlyArray<DeepReadonly12438<T>> {}

type DeepReadonlyObject12438<T> = {
  readonly [P in keyof T]: DeepReadonly12438<T[P]>;
};

type UnionToIntersection12438<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12438<T> = UnionToIntersection12438<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12438<T extends unknown[], V> = [...T, V];

type TuplifyUnion12438<T, L = LastOf12438<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12438<TuplifyUnion12438<Exclude<T, L>>, L>;

type DeepPartial12438<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12438<T[P]> }
  : T;

type Paths12438<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12438<K, Paths12438<T[K], Prev12438[D]>> : never }[keyof T]
  : never;

type Prev12438 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12438<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12438 {
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

type ConfigPaths12438 = Paths12438<NestedConfig12438>;

interface HeavyProps12438 {
  config: DeepPartial12438<NestedConfig12438>;
  path?: ConfigPaths12438;
}

const HeavyComponent12438 = memo(function HeavyComponent12438({ config }: HeavyProps12438) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12438) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12438 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12438: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12438.displayName = 'HeavyComponent12438';
export default HeavyComponent12438;
