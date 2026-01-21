'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4270<T> = T extends (infer U)[]
  ? DeepReadonlyArray4270<U>
  : T extends object
  ? DeepReadonlyObject4270<T>
  : T;

interface DeepReadonlyArray4270<T> extends ReadonlyArray<DeepReadonly4270<T>> {}

type DeepReadonlyObject4270<T> = {
  readonly [P in keyof T]: DeepReadonly4270<T[P]>;
};

type UnionToIntersection4270<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4270<T> = UnionToIntersection4270<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4270<T extends unknown[], V> = [...T, V];

type TuplifyUnion4270<T, L = LastOf4270<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4270<TuplifyUnion4270<Exclude<T, L>>, L>;

type DeepPartial4270<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4270<T[P]> }
  : T;

type Paths4270<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4270<K, Paths4270<T[K], Prev4270[D]>> : never }[keyof T]
  : never;

type Prev4270 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4270<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4270 {
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

type ConfigPaths4270 = Paths4270<NestedConfig4270>;

interface HeavyProps4270 {
  config: DeepPartial4270<NestedConfig4270>;
  path?: ConfigPaths4270;
}

const HeavyComponent4270 = memo(function HeavyComponent4270({ config }: HeavyProps4270) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4270) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4270 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4270: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4270.displayName = 'HeavyComponent4270';
export default HeavyComponent4270;
