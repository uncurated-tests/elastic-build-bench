'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4006<T> = T extends (infer U)[]
  ? DeepReadonlyArray4006<U>
  : T extends object
  ? DeepReadonlyObject4006<T>
  : T;

interface DeepReadonlyArray4006<T> extends ReadonlyArray<DeepReadonly4006<T>> {}

type DeepReadonlyObject4006<T> = {
  readonly [P in keyof T]: DeepReadonly4006<T[P]>;
};

type UnionToIntersection4006<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4006<T> = UnionToIntersection4006<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4006<T extends unknown[], V> = [...T, V];

type TuplifyUnion4006<T, L = LastOf4006<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4006<TuplifyUnion4006<Exclude<T, L>>, L>;

type DeepPartial4006<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4006<T[P]> }
  : T;

type Paths4006<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4006<K, Paths4006<T[K], Prev4006[D]>> : never }[keyof T]
  : never;

type Prev4006 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4006<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4006 {
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

type ConfigPaths4006 = Paths4006<NestedConfig4006>;

interface HeavyProps4006 {
  config: DeepPartial4006<NestedConfig4006>;
  path?: ConfigPaths4006;
}

const HeavyComponent4006 = memo(function HeavyComponent4006({ config }: HeavyProps4006) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4006) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4006 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4006: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4006.displayName = 'HeavyComponent4006';
export default HeavyComponent4006;
