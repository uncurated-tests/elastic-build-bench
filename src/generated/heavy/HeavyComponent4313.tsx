'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4313<T> = T extends (infer U)[]
  ? DeepReadonlyArray4313<U>
  : T extends object
  ? DeepReadonlyObject4313<T>
  : T;

interface DeepReadonlyArray4313<T> extends ReadonlyArray<DeepReadonly4313<T>> {}

type DeepReadonlyObject4313<T> = {
  readonly [P in keyof T]: DeepReadonly4313<T[P]>;
};

type UnionToIntersection4313<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4313<T> = UnionToIntersection4313<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4313<T extends unknown[], V> = [...T, V];

type TuplifyUnion4313<T, L = LastOf4313<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4313<TuplifyUnion4313<Exclude<T, L>>, L>;

type DeepPartial4313<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4313<T[P]> }
  : T;

type Paths4313<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4313<K, Paths4313<T[K], Prev4313[D]>> : never }[keyof T]
  : never;

type Prev4313 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4313<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4313 {
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

type ConfigPaths4313 = Paths4313<NestedConfig4313>;

interface HeavyProps4313 {
  config: DeepPartial4313<NestedConfig4313>;
  path?: ConfigPaths4313;
}

const HeavyComponent4313 = memo(function HeavyComponent4313({ config }: HeavyProps4313) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4313) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4313 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4313: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4313.displayName = 'HeavyComponent4313';
export default HeavyComponent4313;
