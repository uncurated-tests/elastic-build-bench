'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4364<T> = T extends (infer U)[]
  ? DeepReadonlyArray4364<U>
  : T extends object
  ? DeepReadonlyObject4364<T>
  : T;

interface DeepReadonlyArray4364<T> extends ReadonlyArray<DeepReadonly4364<T>> {}

type DeepReadonlyObject4364<T> = {
  readonly [P in keyof T]: DeepReadonly4364<T[P]>;
};

type UnionToIntersection4364<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4364<T> = UnionToIntersection4364<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4364<T extends unknown[], V> = [...T, V];

type TuplifyUnion4364<T, L = LastOf4364<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4364<TuplifyUnion4364<Exclude<T, L>>, L>;

type DeepPartial4364<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4364<T[P]> }
  : T;

type Paths4364<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4364<K, Paths4364<T[K], Prev4364[D]>> : never }[keyof T]
  : never;

type Prev4364 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4364<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4364 {
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

type ConfigPaths4364 = Paths4364<NestedConfig4364>;

interface HeavyProps4364 {
  config: DeepPartial4364<NestedConfig4364>;
  path?: ConfigPaths4364;
}

const HeavyComponent4364 = memo(function HeavyComponent4364({ config }: HeavyProps4364) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4364) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4364 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4364: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4364.displayName = 'HeavyComponent4364';
export default HeavyComponent4364;
