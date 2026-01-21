'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4346<T> = T extends (infer U)[]
  ? DeepReadonlyArray4346<U>
  : T extends object
  ? DeepReadonlyObject4346<T>
  : T;

interface DeepReadonlyArray4346<T> extends ReadonlyArray<DeepReadonly4346<T>> {}

type DeepReadonlyObject4346<T> = {
  readonly [P in keyof T]: DeepReadonly4346<T[P]>;
};

type UnionToIntersection4346<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4346<T> = UnionToIntersection4346<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4346<T extends unknown[], V> = [...T, V];

type TuplifyUnion4346<T, L = LastOf4346<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4346<TuplifyUnion4346<Exclude<T, L>>, L>;

type DeepPartial4346<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4346<T[P]> }
  : T;

type Paths4346<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4346<K, Paths4346<T[K], Prev4346[D]>> : never }[keyof T]
  : never;

type Prev4346 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4346<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4346 {
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

type ConfigPaths4346 = Paths4346<NestedConfig4346>;

interface HeavyProps4346 {
  config: DeepPartial4346<NestedConfig4346>;
  path?: ConfigPaths4346;
}

const HeavyComponent4346 = memo(function HeavyComponent4346({ config }: HeavyProps4346) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4346) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4346 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4346: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4346.displayName = 'HeavyComponent4346';
export default HeavyComponent4346;
