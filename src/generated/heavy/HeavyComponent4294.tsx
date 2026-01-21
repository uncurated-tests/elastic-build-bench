'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4294<T> = T extends (infer U)[]
  ? DeepReadonlyArray4294<U>
  : T extends object
  ? DeepReadonlyObject4294<T>
  : T;

interface DeepReadonlyArray4294<T> extends ReadonlyArray<DeepReadonly4294<T>> {}

type DeepReadonlyObject4294<T> = {
  readonly [P in keyof T]: DeepReadonly4294<T[P]>;
};

type UnionToIntersection4294<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4294<T> = UnionToIntersection4294<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4294<T extends unknown[], V> = [...T, V];

type TuplifyUnion4294<T, L = LastOf4294<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4294<TuplifyUnion4294<Exclude<T, L>>, L>;

type DeepPartial4294<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4294<T[P]> }
  : T;

type Paths4294<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4294<K, Paths4294<T[K], Prev4294[D]>> : never }[keyof T]
  : never;

type Prev4294 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4294<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4294 {
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

type ConfigPaths4294 = Paths4294<NestedConfig4294>;

interface HeavyProps4294 {
  config: DeepPartial4294<NestedConfig4294>;
  path?: ConfigPaths4294;
}

const HeavyComponent4294 = memo(function HeavyComponent4294({ config }: HeavyProps4294) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4294) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4294 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4294: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4294.displayName = 'HeavyComponent4294';
export default HeavyComponent4294;
