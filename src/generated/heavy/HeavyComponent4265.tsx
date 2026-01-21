'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4265<T> = T extends (infer U)[]
  ? DeepReadonlyArray4265<U>
  : T extends object
  ? DeepReadonlyObject4265<T>
  : T;

interface DeepReadonlyArray4265<T> extends ReadonlyArray<DeepReadonly4265<T>> {}

type DeepReadonlyObject4265<T> = {
  readonly [P in keyof T]: DeepReadonly4265<T[P]>;
};

type UnionToIntersection4265<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4265<T> = UnionToIntersection4265<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4265<T extends unknown[], V> = [...T, V];

type TuplifyUnion4265<T, L = LastOf4265<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4265<TuplifyUnion4265<Exclude<T, L>>, L>;

type DeepPartial4265<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4265<T[P]> }
  : T;

type Paths4265<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4265<K, Paths4265<T[K], Prev4265[D]>> : never }[keyof T]
  : never;

type Prev4265 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4265<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4265 {
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

type ConfigPaths4265 = Paths4265<NestedConfig4265>;

interface HeavyProps4265 {
  config: DeepPartial4265<NestedConfig4265>;
  path?: ConfigPaths4265;
}

const HeavyComponent4265 = memo(function HeavyComponent4265({ config }: HeavyProps4265) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4265) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4265 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4265: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4265.displayName = 'HeavyComponent4265';
export default HeavyComponent4265;
