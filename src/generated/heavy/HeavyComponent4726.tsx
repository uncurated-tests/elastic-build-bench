'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4726<T> = T extends (infer U)[]
  ? DeepReadonlyArray4726<U>
  : T extends object
  ? DeepReadonlyObject4726<T>
  : T;

interface DeepReadonlyArray4726<T> extends ReadonlyArray<DeepReadonly4726<T>> {}

type DeepReadonlyObject4726<T> = {
  readonly [P in keyof T]: DeepReadonly4726<T[P]>;
};

type UnionToIntersection4726<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4726<T> = UnionToIntersection4726<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4726<T extends unknown[], V> = [...T, V];

type TuplifyUnion4726<T, L = LastOf4726<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4726<TuplifyUnion4726<Exclude<T, L>>, L>;

type DeepPartial4726<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4726<T[P]> }
  : T;

type Paths4726<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4726<K, Paths4726<T[K], Prev4726[D]>> : never }[keyof T]
  : never;

type Prev4726 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4726<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4726 {
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

type ConfigPaths4726 = Paths4726<NestedConfig4726>;

interface HeavyProps4726 {
  config: DeepPartial4726<NestedConfig4726>;
  path?: ConfigPaths4726;
}

const HeavyComponent4726 = memo(function HeavyComponent4726({ config }: HeavyProps4726) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4726) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4726 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4726: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4726.displayName = 'HeavyComponent4726';
export default HeavyComponent4726;
