'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4016<T> = T extends (infer U)[]
  ? DeepReadonlyArray4016<U>
  : T extends object
  ? DeepReadonlyObject4016<T>
  : T;

interface DeepReadonlyArray4016<T> extends ReadonlyArray<DeepReadonly4016<T>> {}

type DeepReadonlyObject4016<T> = {
  readonly [P in keyof T]: DeepReadonly4016<T[P]>;
};

type UnionToIntersection4016<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4016<T> = UnionToIntersection4016<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4016<T extends unknown[], V> = [...T, V];

type TuplifyUnion4016<T, L = LastOf4016<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4016<TuplifyUnion4016<Exclude<T, L>>, L>;

type DeepPartial4016<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4016<T[P]> }
  : T;

type Paths4016<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4016<K, Paths4016<T[K], Prev4016[D]>> : never }[keyof T]
  : never;

type Prev4016 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4016<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4016 {
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

type ConfigPaths4016 = Paths4016<NestedConfig4016>;

interface HeavyProps4016 {
  config: DeepPartial4016<NestedConfig4016>;
  path?: ConfigPaths4016;
}

const HeavyComponent4016 = memo(function HeavyComponent4016({ config }: HeavyProps4016) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4016) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4016 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4016: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4016.displayName = 'HeavyComponent4016';
export default HeavyComponent4016;
