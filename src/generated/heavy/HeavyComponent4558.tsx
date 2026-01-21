'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4558<T> = T extends (infer U)[]
  ? DeepReadonlyArray4558<U>
  : T extends object
  ? DeepReadonlyObject4558<T>
  : T;

interface DeepReadonlyArray4558<T> extends ReadonlyArray<DeepReadonly4558<T>> {}

type DeepReadonlyObject4558<T> = {
  readonly [P in keyof T]: DeepReadonly4558<T[P]>;
};

type UnionToIntersection4558<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4558<T> = UnionToIntersection4558<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4558<T extends unknown[], V> = [...T, V];

type TuplifyUnion4558<T, L = LastOf4558<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4558<TuplifyUnion4558<Exclude<T, L>>, L>;

type DeepPartial4558<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4558<T[P]> }
  : T;

type Paths4558<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4558<K, Paths4558<T[K], Prev4558[D]>> : never }[keyof T]
  : never;

type Prev4558 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4558<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4558 {
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

type ConfigPaths4558 = Paths4558<NestedConfig4558>;

interface HeavyProps4558 {
  config: DeepPartial4558<NestedConfig4558>;
  path?: ConfigPaths4558;
}

const HeavyComponent4558 = memo(function HeavyComponent4558({ config }: HeavyProps4558) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4558) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4558 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4558: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4558.displayName = 'HeavyComponent4558';
export default HeavyComponent4558;
