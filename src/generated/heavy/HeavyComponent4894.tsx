'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4894<T> = T extends (infer U)[]
  ? DeepReadonlyArray4894<U>
  : T extends object
  ? DeepReadonlyObject4894<T>
  : T;

interface DeepReadonlyArray4894<T> extends ReadonlyArray<DeepReadonly4894<T>> {}

type DeepReadonlyObject4894<T> = {
  readonly [P in keyof T]: DeepReadonly4894<T[P]>;
};

type UnionToIntersection4894<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4894<T> = UnionToIntersection4894<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4894<T extends unknown[], V> = [...T, V];

type TuplifyUnion4894<T, L = LastOf4894<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4894<TuplifyUnion4894<Exclude<T, L>>, L>;

type DeepPartial4894<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4894<T[P]> }
  : T;

type Paths4894<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4894<K, Paths4894<T[K], Prev4894[D]>> : never }[keyof T]
  : never;

type Prev4894 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4894<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4894 {
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

type ConfigPaths4894 = Paths4894<NestedConfig4894>;

interface HeavyProps4894 {
  config: DeepPartial4894<NestedConfig4894>;
  path?: ConfigPaths4894;
}

const HeavyComponent4894 = memo(function HeavyComponent4894({ config }: HeavyProps4894) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4894) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4894 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4894: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4894.displayName = 'HeavyComponent4894';
export default HeavyComponent4894;
