'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2438<T> = T extends (infer U)[]
  ? DeepReadonlyArray2438<U>
  : T extends object
  ? DeepReadonlyObject2438<T>
  : T;

interface DeepReadonlyArray2438<T> extends ReadonlyArray<DeepReadonly2438<T>> {}

type DeepReadonlyObject2438<T> = {
  readonly [P in keyof T]: DeepReadonly2438<T[P]>;
};

type UnionToIntersection2438<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2438<T> = UnionToIntersection2438<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2438<T extends unknown[], V> = [...T, V];

type TuplifyUnion2438<T, L = LastOf2438<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2438<TuplifyUnion2438<Exclude<T, L>>, L>;

type DeepPartial2438<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2438<T[P]> }
  : T;

type Paths2438<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2438<K, Paths2438<T[K], Prev2438[D]>> : never }[keyof T]
  : never;

type Prev2438 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2438<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2438 {
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

type ConfigPaths2438 = Paths2438<NestedConfig2438>;

interface HeavyProps2438 {
  config: DeepPartial2438<NestedConfig2438>;
  path?: ConfigPaths2438;
}

const HeavyComponent2438 = memo(function HeavyComponent2438({ config }: HeavyProps2438) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2438) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2438 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2438: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2438.displayName = 'HeavyComponent2438';
export default HeavyComponent2438;
