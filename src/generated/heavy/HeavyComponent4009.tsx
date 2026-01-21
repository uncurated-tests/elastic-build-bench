'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4009<T> = T extends (infer U)[]
  ? DeepReadonlyArray4009<U>
  : T extends object
  ? DeepReadonlyObject4009<T>
  : T;

interface DeepReadonlyArray4009<T> extends ReadonlyArray<DeepReadonly4009<T>> {}

type DeepReadonlyObject4009<T> = {
  readonly [P in keyof T]: DeepReadonly4009<T[P]>;
};

type UnionToIntersection4009<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4009<T> = UnionToIntersection4009<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4009<T extends unknown[], V> = [...T, V];

type TuplifyUnion4009<T, L = LastOf4009<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4009<TuplifyUnion4009<Exclude<T, L>>, L>;

type DeepPartial4009<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4009<T[P]> }
  : T;

type Paths4009<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4009<K, Paths4009<T[K], Prev4009[D]>> : never }[keyof T]
  : never;

type Prev4009 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4009<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4009 {
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

type ConfigPaths4009 = Paths4009<NestedConfig4009>;

interface HeavyProps4009 {
  config: DeepPartial4009<NestedConfig4009>;
  path?: ConfigPaths4009;
}

const HeavyComponent4009 = memo(function HeavyComponent4009({ config }: HeavyProps4009) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4009) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4009 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4009: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4009.displayName = 'HeavyComponent4009';
export default HeavyComponent4009;
