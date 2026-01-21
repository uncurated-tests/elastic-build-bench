'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4461<T> = T extends (infer U)[]
  ? DeepReadonlyArray4461<U>
  : T extends object
  ? DeepReadonlyObject4461<T>
  : T;

interface DeepReadonlyArray4461<T> extends ReadonlyArray<DeepReadonly4461<T>> {}

type DeepReadonlyObject4461<T> = {
  readonly [P in keyof T]: DeepReadonly4461<T[P]>;
};

type UnionToIntersection4461<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4461<T> = UnionToIntersection4461<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4461<T extends unknown[], V> = [...T, V];

type TuplifyUnion4461<T, L = LastOf4461<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4461<TuplifyUnion4461<Exclude<T, L>>, L>;

type DeepPartial4461<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4461<T[P]> }
  : T;

type Paths4461<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4461<K, Paths4461<T[K], Prev4461[D]>> : never }[keyof T]
  : never;

type Prev4461 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4461<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4461 {
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

type ConfigPaths4461 = Paths4461<NestedConfig4461>;

interface HeavyProps4461 {
  config: DeepPartial4461<NestedConfig4461>;
  path?: ConfigPaths4461;
}

const HeavyComponent4461 = memo(function HeavyComponent4461({ config }: HeavyProps4461) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4461) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4461 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4461: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4461.displayName = 'HeavyComponent4461';
export default HeavyComponent4461;
