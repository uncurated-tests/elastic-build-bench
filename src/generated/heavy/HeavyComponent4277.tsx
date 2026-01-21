'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4277<T> = T extends (infer U)[]
  ? DeepReadonlyArray4277<U>
  : T extends object
  ? DeepReadonlyObject4277<T>
  : T;

interface DeepReadonlyArray4277<T> extends ReadonlyArray<DeepReadonly4277<T>> {}

type DeepReadonlyObject4277<T> = {
  readonly [P in keyof T]: DeepReadonly4277<T[P]>;
};

type UnionToIntersection4277<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4277<T> = UnionToIntersection4277<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4277<T extends unknown[], V> = [...T, V];

type TuplifyUnion4277<T, L = LastOf4277<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4277<TuplifyUnion4277<Exclude<T, L>>, L>;

type DeepPartial4277<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4277<T[P]> }
  : T;

type Paths4277<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4277<K, Paths4277<T[K], Prev4277[D]>> : never }[keyof T]
  : never;

type Prev4277 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4277<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4277 {
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

type ConfigPaths4277 = Paths4277<NestedConfig4277>;

interface HeavyProps4277 {
  config: DeepPartial4277<NestedConfig4277>;
  path?: ConfigPaths4277;
}

const HeavyComponent4277 = memo(function HeavyComponent4277({ config }: HeavyProps4277) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4277) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4277 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4277: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4277.displayName = 'HeavyComponent4277';
export default HeavyComponent4277;
