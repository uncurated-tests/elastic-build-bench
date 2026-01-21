'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly364<T> = T extends (infer U)[]
  ? DeepReadonlyArray364<U>
  : T extends object
  ? DeepReadonlyObject364<T>
  : T;

interface DeepReadonlyArray364<T> extends ReadonlyArray<DeepReadonly364<T>> {}

type DeepReadonlyObject364<T> = {
  readonly [P in keyof T]: DeepReadonly364<T[P]>;
};

type UnionToIntersection364<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf364<T> = UnionToIntersection364<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push364<T extends unknown[], V> = [...T, V];

type TuplifyUnion364<T, L = LastOf364<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push364<TuplifyUnion364<Exclude<T, L>>, L>;

type DeepPartial364<T> = T extends object
  ? { [P in keyof T]?: DeepPartial364<T[P]> }
  : T;

type Paths364<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join364<K, Paths364<T[K], Prev364[D]>> : never }[keyof T]
  : never;

type Prev364 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join364<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig364 {
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

type ConfigPaths364 = Paths364<NestedConfig364>;

interface HeavyProps364 {
  config: DeepPartial364<NestedConfig364>;
  path?: ConfigPaths364;
}

const HeavyComponent364 = memo(function HeavyComponent364({ config }: HeavyProps364) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 364) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-364 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H364: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent364.displayName = 'HeavyComponent364';
export default HeavyComponent364;
