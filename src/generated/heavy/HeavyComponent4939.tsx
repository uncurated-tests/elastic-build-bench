'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4939<T> = T extends (infer U)[]
  ? DeepReadonlyArray4939<U>
  : T extends object
  ? DeepReadonlyObject4939<T>
  : T;

interface DeepReadonlyArray4939<T> extends ReadonlyArray<DeepReadonly4939<T>> {}

type DeepReadonlyObject4939<T> = {
  readonly [P in keyof T]: DeepReadonly4939<T[P]>;
};

type UnionToIntersection4939<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4939<T> = UnionToIntersection4939<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4939<T extends unknown[], V> = [...T, V];

type TuplifyUnion4939<T, L = LastOf4939<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4939<TuplifyUnion4939<Exclude<T, L>>, L>;

type DeepPartial4939<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4939<T[P]> }
  : T;

type Paths4939<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4939<K, Paths4939<T[K], Prev4939[D]>> : never }[keyof T]
  : never;

type Prev4939 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4939<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4939 {
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

type ConfigPaths4939 = Paths4939<NestedConfig4939>;

interface HeavyProps4939 {
  config: DeepPartial4939<NestedConfig4939>;
  path?: ConfigPaths4939;
}

const HeavyComponent4939 = memo(function HeavyComponent4939({ config }: HeavyProps4939) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4939) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4939 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4939: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4939.displayName = 'HeavyComponent4939';
export default HeavyComponent4939;
