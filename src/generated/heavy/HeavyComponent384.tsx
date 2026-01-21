'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly384<T> = T extends (infer U)[]
  ? DeepReadonlyArray384<U>
  : T extends object
  ? DeepReadonlyObject384<T>
  : T;

interface DeepReadonlyArray384<T> extends ReadonlyArray<DeepReadonly384<T>> {}

type DeepReadonlyObject384<T> = {
  readonly [P in keyof T]: DeepReadonly384<T[P]>;
};

type UnionToIntersection384<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf384<T> = UnionToIntersection384<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push384<T extends unknown[], V> = [...T, V];

type TuplifyUnion384<T, L = LastOf384<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push384<TuplifyUnion384<Exclude<T, L>>, L>;

type DeepPartial384<T> = T extends object
  ? { [P in keyof T]?: DeepPartial384<T[P]> }
  : T;

type Paths384<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join384<K, Paths384<T[K], Prev384[D]>> : never }[keyof T]
  : never;

type Prev384 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join384<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig384 {
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

type ConfigPaths384 = Paths384<NestedConfig384>;

interface HeavyProps384 {
  config: DeepPartial384<NestedConfig384>;
  path?: ConfigPaths384;
}

const HeavyComponent384 = memo(function HeavyComponent384({ config }: HeavyProps384) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 384) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-384 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H384: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent384.displayName = 'HeavyComponent384';
export default HeavyComponent384;
