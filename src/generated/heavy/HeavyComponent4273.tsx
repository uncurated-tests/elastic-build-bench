'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4273<T> = T extends (infer U)[]
  ? DeepReadonlyArray4273<U>
  : T extends object
  ? DeepReadonlyObject4273<T>
  : T;

interface DeepReadonlyArray4273<T> extends ReadonlyArray<DeepReadonly4273<T>> {}

type DeepReadonlyObject4273<T> = {
  readonly [P in keyof T]: DeepReadonly4273<T[P]>;
};

type UnionToIntersection4273<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4273<T> = UnionToIntersection4273<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4273<T extends unknown[], V> = [...T, V];

type TuplifyUnion4273<T, L = LastOf4273<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4273<TuplifyUnion4273<Exclude<T, L>>, L>;

type DeepPartial4273<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4273<T[P]> }
  : T;

type Paths4273<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4273<K, Paths4273<T[K], Prev4273[D]>> : never }[keyof T]
  : never;

type Prev4273 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4273<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4273 {
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

type ConfigPaths4273 = Paths4273<NestedConfig4273>;

interface HeavyProps4273 {
  config: DeepPartial4273<NestedConfig4273>;
  path?: ConfigPaths4273;
}

const HeavyComponent4273 = memo(function HeavyComponent4273({ config }: HeavyProps4273) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4273) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4273 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4273: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4273.displayName = 'HeavyComponent4273';
export default HeavyComponent4273;
