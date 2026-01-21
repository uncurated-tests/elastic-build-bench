'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13438<T> = T extends (infer U)[]
  ? DeepReadonlyArray13438<U>
  : T extends object
  ? DeepReadonlyObject13438<T>
  : T;

interface DeepReadonlyArray13438<T> extends ReadonlyArray<DeepReadonly13438<T>> {}

type DeepReadonlyObject13438<T> = {
  readonly [P in keyof T]: DeepReadonly13438<T[P]>;
};

type UnionToIntersection13438<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13438<T> = UnionToIntersection13438<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13438<T extends unknown[], V> = [...T, V];

type TuplifyUnion13438<T, L = LastOf13438<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13438<TuplifyUnion13438<Exclude<T, L>>, L>;

type DeepPartial13438<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13438<T[P]> }
  : T;

type Paths13438<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13438<K, Paths13438<T[K], Prev13438[D]>> : never }[keyof T]
  : never;

type Prev13438 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13438<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13438 {
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

type ConfigPaths13438 = Paths13438<NestedConfig13438>;

interface HeavyProps13438 {
  config: DeepPartial13438<NestedConfig13438>;
  path?: ConfigPaths13438;
}

const HeavyComponent13438 = memo(function HeavyComponent13438({ config }: HeavyProps13438) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13438) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13438 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13438: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13438.displayName = 'HeavyComponent13438';
export default HeavyComponent13438;
