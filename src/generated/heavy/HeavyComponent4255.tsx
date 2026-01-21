'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4255<T> = T extends (infer U)[]
  ? DeepReadonlyArray4255<U>
  : T extends object
  ? DeepReadonlyObject4255<T>
  : T;

interface DeepReadonlyArray4255<T> extends ReadonlyArray<DeepReadonly4255<T>> {}

type DeepReadonlyObject4255<T> = {
  readonly [P in keyof T]: DeepReadonly4255<T[P]>;
};

type UnionToIntersection4255<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4255<T> = UnionToIntersection4255<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4255<T extends unknown[], V> = [...T, V];

type TuplifyUnion4255<T, L = LastOf4255<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4255<TuplifyUnion4255<Exclude<T, L>>, L>;

type DeepPartial4255<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4255<T[P]> }
  : T;

type Paths4255<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4255<K, Paths4255<T[K], Prev4255[D]>> : never }[keyof T]
  : never;

type Prev4255 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4255<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4255 {
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

type ConfigPaths4255 = Paths4255<NestedConfig4255>;

interface HeavyProps4255 {
  config: DeepPartial4255<NestedConfig4255>;
  path?: ConfigPaths4255;
}

const HeavyComponent4255 = memo(function HeavyComponent4255({ config }: HeavyProps4255) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4255) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4255 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4255: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4255.displayName = 'HeavyComponent4255';
export default HeavyComponent4255;
