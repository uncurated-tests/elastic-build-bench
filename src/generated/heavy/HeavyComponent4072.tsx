'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4072<T> = T extends (infer U)[]
  ? DeepReadonlyArray4072<U>
  : T extends object
  ? DeepReadonlyObject4072<T>
  : T;

interface DeepReadonlyArray4072<T> extends ReadonlyArray<DeepReadonly4072<T>> {}

type DeepReadonlyObject4072<T> = {
  readonly [P in keyof T]: DeepReadonly4072<T[P]>;
};

type UnionToIntersection4072<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4072<T> = UnionToIntersection4072<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4072<T extends unknown[], V> = [...T, V];

type TuplifyUnion4072<T, L = LastOf4072<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4072<TuplifyUnion4072<Exclude<T, L>>, L>;

type DeepPartial4072<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4072<T[P]> }
  : T;

type Paths4072<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4072<K, Paths4072<T[K], Prev4072[D]>> : never }[keyof T]
  : never;

type Prev4072 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4072<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4072 {
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

type ConfigPaths4072 = Paths4072<NestedConfig4072>;

interface HeavyProps4072 {
  config: DeepPartial4072<NestedConfig4072>;
  path?: ConfigPaths4072;
}

const HeavyComponent4072 = memo(function HeavyComponent4072({ config }: HeavyProps4072) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4072) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4072 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4072: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4072.displayName = 'HeavyComponent4072';
export default HeavyComponent4072;
