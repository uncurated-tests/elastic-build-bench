'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4998<T> = T extends (infer U)[]
  ? DeepReadonlyArray4998<U>
  : T extends object
  ? DeepReadonlyObject4998<T>
  : T;

interface DeepReadonlyArray4998<T> extends ReadonlyArray<DeepReadonly4998<T>> {}

type DeepReadonlyObject4998<T> = {
  readonly [P in keyof T]: DeepReadonly4998<T[P]>;
};

type UnionToIntersection4998<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4998<T> = UnionToIntersection4998<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4998<T extends unknown[], V> = [...T, V];

type TuplifyUnion4998<T, L = LastOf4998<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4998<TuplifyUnion4998<Exclude<T, L>>, L>;

type DeepPartial4998<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4998<T[P]> }
  : T;

type Paths4998<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4998<K, Paths4998<T[K], Prev4998[D]>> : never }[keyof T]
  : never;

type Prev4998 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4998<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4998 {
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

type ConfigPaths4998 = Paths4998<NestedConfig4998>;

interface HeavyProps4998 {
  config: DeepPartial4998<NestedConfig4998>;
  path?: ConfigPaths4998;
}

const HeavyComponent4998 = memo(function HeavyComponent4998({ config }: HeavyProps4998) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4998) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4998 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4998: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4998.displayName = 'HeavyComponent4998';
export default HeavyComponent4998;
