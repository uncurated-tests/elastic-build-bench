'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4494<T> = T extends (infer U)[]
  ? DeepReadonlyArray4494<U>
  : T extends object
  ? DeepReadonlyObject4494<T>
  : T;

interface DeepReadonlyArray4494<T> extends ReadonlyArray<DeepReadonly4494<T>> {}

type DeepReadonlyObject4494<T> = {
  readonly [P in keyof T]: DeepReadonly4494<T[P]>;
};

type UnionToIntersection4494<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4494<T> = UnionToIntersection4494<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4494<T extends unknown[], V> = [...T, V];

type TuplifyUnion4494<T, L = LastOf4494<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4494<TuplifyUnion4494<Exclude<T, L>>, L>;

type DeepPartial4494<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4494<T[P]> }
  : T;

type Paths4494<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4494<K, Paths4494<T[K], Prev4494[D]>> : never }[keyof T]
  : never;

type Prev4494 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4494<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4494 {
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

type ConfigPaths4494 = Paths4494<NestedConfig4494>;

interface HeavyProps4494 {
  config: DeepPartial4494<NestedConfig4494>;
  path?: ConfigPaths4494;
}

const HeavyComponent4494 = memo(function HeavyComponent4494({ config }: HeavyProps4494) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4494) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4494 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4494: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4494.displayName = 'HeavyComponent4494';
export default HeavyComponent4494;
