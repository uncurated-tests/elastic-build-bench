'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1438<T> = T extends (infer U)[]
  ? DeepReadonlyArray1438<U>
  : T extends object
  ? DeepReadonlyObject1438<T>
  : T;

interface DeepReadonlyArray1438<T> extends ReadonlyArray<DeepReadonly1438<T>> {}

type DeepReadonlyObject1438<T> = {
  readonly [P in keyof T]: DeepReadonly1438<T[P]>;
};

type UnionToIntersection1438<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1438<T> = UnionToIntersection1438<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1438<T extends unknown[], V> = [...T, V];

type TuplifyUnion1438<T, L = LastOf1438<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1438<TuplifyUnion1438<Exclude<T, L>>, L>;

type DeepPartial1438<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1438<T[P]> }
  : T;

type Paths1438<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1438<K, Paths1438<T[K], Prev1438[D]>> : never }[keyof T]
  : never;

type Prev1438 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1438<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1438 {
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

type ConfigPaths1438 = Paths1438<NestedConfig1438>;

interface HeavyProps1438 {
  config: DeepPartial1438<NestedConfig1438>;
  path?: ConfigPaths1438;
}

const HeavyComponent1438 = memo(function HeavyComponent1438({ config }: HeavyProps1438) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1438) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1438 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1438: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1438.displayName = 'HeavyComponent1438';
export default HeavyComponent1438;
