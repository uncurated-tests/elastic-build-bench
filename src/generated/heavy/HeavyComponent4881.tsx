'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4881<T> = T extends (infer U)[]
  ? DeepReadonlyArray4881<U>
  : T extends object
  ? DeepReadonlyObject4881<T>
  : T;

interface DeepReadonlyArray4881<T> extends ReadonlyArray<DeepReadonly4881<T>> {}

type DeepReadonlyObject4881<T> = {
  readonly [P in keyof T]: DeepReadonly4881<T[P]>;
};

type UnionToIntersection4881<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4881<T> = UnionToIntersection4881<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4881<T extends unknown[], V> = [...T, V];

type TuplifyUnion4881<T, L = LastOf4881<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4881<TuplifyUnion4881<Exclude<T, L>>, L>;

type DeepPartial4881<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4881<T[P]> }
  : T;

type Paths4881<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4881<K, Paths4881<T[K], Prev4881[D]>> : never }[keyof T]
  : never;

type Prev4881 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4881<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4881 {
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

type ConfigPaths4881 = Paths4881<NestedConfig4881>;

interface HeavyProps4881 {
  config: DeepPartial4881<NestedConfig4881>;
  path?: ConfigPaths4881;
}

const HeavyComponent4881 = memo(function HeavyComponent4881({ config }: HeavyProps4881) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4881) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4881 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4881: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4881.displayName = 'HeavyComponent4881';
export default HeavyComponent4881;
