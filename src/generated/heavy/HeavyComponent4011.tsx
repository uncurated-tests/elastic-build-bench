'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4011<T> = T extends (infer U)[]
  ? DeepReadonlyArray4011<U>
  : T extends object
  ? DeepReadonlyObject4011<T>
  : T;

interface DeepReadonlyArray4011<T> extends ReadonlyArray<DeepReadonly4011<T>> {}

type DeepReadonlyObject4011<T> = {
  readonly [P in keyof T]: DeepReadonly4011<T[P]>;
};

type UnionToIntersection4011<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4011<T> = UnionToIntersection4011<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4011<T extends unknown[], V> = [...T, V];

type TuplifyUnion4011<T, L = LastOf4011<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4011<TuplifyUnion4011<Exclude<T, L>>, L>;

type DeepPartial4011<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4011<T[P]> }
  : T;

type Paths4011<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4011<K, Paths4011<T[K], Prev4011[D]>> : never }[keyof T]
  : never;

type Prev4011 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4011<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4011 {
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

type ConfigPaths4011 = Paths4011<NestedConfig4011>;

interface HeavyProps4011 {
  config: DeepPartial4011<NestedConfig4011>;
  path?: ConfigPaths4011;
}

const HeavyComponent4011 = memo(function HeavyComponent4011({ config }: HeavyProps4011) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4011) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4011 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4011: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4011.displayName = 'HeavyComponent4011';
export default HeavyComponent4011;
