'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4386<T> = T extends (infer U)[]
  ? DeepReadonlyArray4386<U>
  : T extends object
  ? DeepReadonlyObject4386<T>
  : T;

interface DeepReadonlyArray4386<T> extends ReadonlyArray<DeepReadonly4386<T>> {}

type DeepReadonlyObject4386<T> = {
  readonly [P in keyof T]: DeepReadonly4386<T[P]>;
};

type UnionToIntersection4386<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4386<T> = UnionToIntersection4386<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4386<T extends unknown[], V> = [...T, V];

type TuplifyUnion4386<T, L = LastOf4386<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4386<TuplifyUnion4386<Exclude<T, L>>, L>;

type DeepPartial4386<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4386<T[P]> }
  : T;

type Paths4386<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4386<K, Paths4386<T[K], Prev4386[D]>> : never }[keyof T]
  : never;

type Prev4386 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4386<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4386 {
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

type ConfigPaths4386 = Paths4386<NestedConfig4386>;

interface HeavyProps4386 {
  config: DeepPartial4386<NestedConfig4386>;
  path?: ConfigPaths4386;
}

const HeavyComponent4386 = memo(function HeavyComponent4386({ config }: HeavyProps4386) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4386) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4386 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4386: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4386.displayName = 'HeavyComponent4386';
export default HeavyComponent4386;
