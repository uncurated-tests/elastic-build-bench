'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly438<T> = T extends (infer U)[]
  ? DeepReadonlyArray438<U>
  : T extends object
  ? DeepReadonlyObject438<T>
  : T;

interface DeepReadonlyArray438<T> extends ReadonlyArray<DeepReadonly438<T>> {}

type DeepReadonlyObject438<T> = {
  readonly [P in keyof T]: DeepReadonly438<T[P]>;
};

type UnionToIntersection438<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf438<T> = UnionToIntersection438<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push438<T extends unknown[], V> = [...T, V];

type TuplifyUnion438<T, L = LastOf438<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push438<TuplifyUnion438<Exclude<T, L>>, L>;

type DeepPartial438<T> = T extends object
  ? { [P in keyof T]?: DeepPartial438<T[P]> }
  : T;

type Paths438<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join438<K, Paths438<T[K], Prev438[D]>> : never }[keyof T]
  : never;

type Prev438 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join438<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig438 {
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

type ConfigPaths438 = Paths438<NestedConfig438>;

interface HeavyProps438 {
  config: DeepPartial438<NestedConfig438>;
  path?: ConfigPaths438;
}

const HeavyComponent438 = memo(function HeavyComponent438({ config }: HeavyProps438) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 438) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-438 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H438: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent438.displayName = 'HeavyComponent438';
export default HeavyComponent438;
