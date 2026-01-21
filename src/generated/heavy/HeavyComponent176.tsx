'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly176<T> = T extends (infer U)[]
  ? DeepReadonlyArray176<U>
  : T extends object
  ? DeepReadonlyObject176<T>
  : T;

interface DeepReadonlyArray176<T> extends ReadonlyArray<DeepReadonly176<T>> {}

type DeepReadonlyObject176<T> = {
  readonly [P in keyof T]: DeepReadonly176<T[P]>;
};

type UnionToIntersection176<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf176<T> = UnionToIntersection176<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push176<T extends unknown[], V> = [...T, V];

type TuplifyUnion176<T, L = LastOf176<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push176<TuplifyUnion176<Exclude<T, L>>, L>;

type DeepPartial176<T> = T extends object
  ? { [P in keyof T]?: DeepPartial176<T[P]> }
  : T;

type Paths176<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join176<K, Paths176<T[K], Prev176[D]>> : never }[keyof T]
  : never;

type Prev176 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join176<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig176 {
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

type ConfigPaths176 = Paths176<NestedConfig176>;

interface HeavyProps176 {
  config: DeepPartial176<NestedConfig176>;
  path?: ConfigPaths176;
}

const HeavyComponent176 = memo(function HeavyComponent176({ config }: HeavyProps176) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 176) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-176 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H176: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent176.displayName = 'HeavyComponent176';
export default HeavyComponent176;
