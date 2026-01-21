'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly196<T> = T extends (infer U)[]
  ? DeepReadonlyArray196<U>
  : T extends object
  ? DeepReadonlyObject196<T>
  : T;

interface DeepReadonlyArray196<T> extends ReadonlyArray<DeepReadonly196<T>> {}

type DeepReadonlyObject196<T> = {
  readonly [P in keyof T]: DeepReadonly196<T[P]>;
};

type UnionToIntersection196<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf196<T> = UnionToIntersection196<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push196<T extends unknown[], V> = [...T, V];

type TuplifyUnion196<T, L = LastOf196<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push196<TuplifyUnion196<Exclude<T, L>>, L>;

type DeepPartial196<T> = T extends object
  ? { [P in keyof T]?: DeepPartial196<T[P]> }
  : T;

type Paths196<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join196<K, Paths196<T[K], Prev196[D]>> : never }[keyof T]
  : never;

type Prev196 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join196<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig196 {
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

type ConfigPaths196 = Paths196<NestedConfig196>;

interface HeavyProps196 {
  config: DeepPartial196<NestedConfig196>;
  path?: ConfigPaths196;
}

const HeavyComponent196 = memo(function HeavyComponent196({ config }: HeavyProps196) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 196) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-196 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H196: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent196.displayName = 'HeavyComponent196';
export default HeavyComponent196;
