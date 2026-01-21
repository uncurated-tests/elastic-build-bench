'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4953<T> = T extends (infer U)[]
  ? DeepReadonlyArray4953<U>
  : T extends object
  ? DeepReadonlyObject4953<T>
  : T;

interface DeepReadonlyArray4953<T> extends ReadonlyArray<DeepReadonly4953<T>> {}

type DeepReadonlyObject4953<T> = {
  readonly [P in keyof T]: DeepReadonly4953<T[P]>;
};

type UnionToIntersection4953<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4953<T> = UnionToIntersection4953<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4953<T extends unknown[], V> = [...T, V];

type TuplifyUnion4953<T, L = LastOf4953<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4953<TuplifyUnion4953<Exclude<T, L>>, L>;

type DeepPartial4953<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4953<T[P]> }
  : T;

type Paths4953<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4953<K, Paths4953<T[K], Prev4953[D]>> : never }[keyof T]
  : never;

type Prev4953 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4953<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4953 {
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

type ConfigPaths4953 = Paths4953<NestedConfig4953>;

interface HeavyProps4953 {
  config: DeepPartial4953<NestedConfig4953>;
  path?: ConfigPaths4953;
}

const HeavyComponent4953 = memo(function HeavyComponent4953({ config }: HeavyProps4953) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4953) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4953 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4953: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4953.displayName = 'HeavyComponent4953';
export default HeavyComponent4953;
