'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4387<T> = T extends (infer U)[]
  ? DeepReadonlyArray4387<U>
  : T extends object
  ? DeepReadonlyObject4387<T>
  : T;

interface DeepReadonlyArray4387<T> extends ReadonlyArray<DeepReadonly4387<T>> {}

type DeepReadonlyObject4387<T> = {
  readonly [P in keyof T]: DeepReadonly4387<T[P]>;
};

type UnionToIntersection4387<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4387<T> = UnionToIntersection4387<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4387<T extends unknown[], V> = [...T, V];

type TuplifyUnion4387<T, L = LastOf4387<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4387<TuplifyUnion4387<Exclude<T, L>>, L>;

type DeepPartial4387<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4387<T[P]> }
  : T;

type Paths4387<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4387<K, Paths4387<T[K], Prev4387[D]>> : never }[keyof T]
  : never;

type Prev4387 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4387<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4387 {
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

type ConfigPaths4387 = Paths4387<NestedConfig4387>;

interface HeavyProps4387 {
  config: DeepPartial4387<NestedConfig4387>;
  path?: ConfigPaths4387;
}

const HeavyComponent4387 = memo(function HeavyComponent4387({ config }: HeavyProps4387) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4387) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4387 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4387: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4387.displayName = 'HeavyComponent4387';
export default HeavyComponent4387;
